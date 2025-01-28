// Heroku is free, but it will sleep 6 hours every day, so use 2 heroku account, and create 2 apps.
// 1st app: your_heroku_id_1.herokuapp.com
// 2nd app: your_heroku_id_2.herokuapp.com
// Let them serve alternatively, that is:
// 1st app online 0-12 & 18-24 (UTC)
// 2nd app online 6-18 (UTC)
// So Cloudflare Workers can serve all 24 hours.
// 由於 Heroku 免費版本每天會休眠 6 小時，所以用兩個帳號建立兩個應用程式。
// 第一個應用程式：your_heroku_id_1.herokuapp.com
// 第二個應用程式：your_heroku_id_2.herokuapp.com
// 讓它們輪流服務，即：
// 第一個應用程式線上時間：0-12 點和 18-24 點（UTC）
// 第二個應用程式線上時間：6-18 點（UTC）
// 這樣 Cloudflare Workers 就可以全天 24 小時服務了。

// 1st app
const SingleDay = 'https://herooneindex.herokuapp.com';
// 2nd app
const DoubleDay = 'https://onemanager.glitch.me';

//const SingleDay = 'https://example.com/proxy/onedrive/xxx/'
//const DoubleDay = 'https://example.com/proxy/onedrive/xxx/'

// CF proxy all, true/false
// 所有請求都由 CF 代理，true 或 false
const CFproxy = true;

// Used in cloudflare workers, odd or even days point to 2 heroku account.

// 由於 Heroku 不綁定信用卡無法自訂網域名稱，就算綁定後 HTTPS 也不方便
// 另外免費方案每月 550 小時，有些使用者不夠用
// 因此在 CF Workers 使用此程式碼，分單雙日存取不同 Heroku 帳號下的相同網頁
// 只需修改上面的設定，下面的程式碼不用更動

addEventListener('fetch', event => {
    let url=new URL(event.request.url);
    if (url.protocol == 'http:') {
        url.protocol = 'https:'
        event.respondWith( Response.redirect(url.href) )
    } else {
        let response = null;
        let nd = new Date();
        if (nd.getDate()%2) {
            host = SingleDay
        } else {
            host = DoubleDay
        }
        if (host.substr(0, 7)!='http://'&&host.substr(0, 8)!='https://') host = 'http://' + host;

        response = fetchAndApply(host, event.request);

        event.respondWith( response );
    }
})

async function fetchAndApply(host, request) {
    let f_url = new URL(request.url);
    let a_url = new URL(host);
    let replace_path = a_url.pathname;
    if (replace_path.substr(replace_path.length-1)!='/') replace_path += '/';
    let replaced_path = '/';
    let query = f_url.search;
    let path = f_url.pathname;
    if (host.substr(host.length-1)=='/') path = path.substr(1);
    f_url.href = host + path + query;

    let response = null;
    if (!CFproxy) {
        response = await fetch(f_url, request);
    } else {
        let method = request.method;
        let body = request.body;
        let request_headers = request.headers;
        let new_request_headers = new Headers(request_headers);
        new_request_headers.set('Host', f_url.host);
        new_request_headers.set('Referer', request.url);

        response = await fetch(f_url.href, {
            method: method,
            body: body,
            headers: new_request_headers
        });
    }

    let out_headers = new Headers(response.headers);
    if (out_headers.get('Content-Disposition')=='attachment') out_headers.delete('Content-Disposition');
    let out_body = null;
    let contentType = out_headers.get('Content-Type');
    if (contentType.includes("application/text")) {
        out_body = await response.text();
        while (out_body.includes(replace_path)) out_body = out_body.replace(replace_path, replaced_path);
    } else if (contentType.includes("text/html")) {
        out_body = await response.text();
        while (replace_path!='/'&&out_body.includes(replace_path)) out_body = out_body.replace(replace_path, replaced_path);
    } else {
        out_body = await response.body;
    }

    let out_response = new Response(out_body, {
        status: response.status,
        headers: out_headers
    })

    return out_response;
}
