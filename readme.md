[繁體中文 readme](readme_tw.md)  

# NOTICE: 

  The Releases is used as archive, not newest code.  

  Please read the descriptions of settings before raising an issue.  

---

# Deploy to Vercel  

### Official

  https://vercel.com/  

### Demo

  https://onemanager-php.vercel.app/  

### Notice

> 1. you must wait 30-50s to make sure deploy READY after change config;  
>
> 2. Vercel limit 100 deploy every day.  

### How to Install

> https://scfonedrive.github.io/Vercel/Deploy.html .  

---

# Deploy to Replit  

### Official

  https://repl.it/  
  https://replit.com/  

### Demo

  https://onemanager.saojsm.repl.co/  

### How to Install
A:
> 1. Click the "+" or "Create Repl", click the `Import from Github`;  
> 2. Input `https://github.com/SAOJSM/OneManager-php` in "GitHub URL", then it will auto show "Language" - "PHP Web Server", Click the "Import from Github";  
> 3. After done, click the green button "Run", it will show the web page on the right, you MUST open it in a new tab or window.

B:
> 1. Click the "+" or "Create Repl", find template "PHP Web Server" (via input "php"), input a name for your project in "Title" or left it default, Click the "+ Create Repl".  
> 2. After done, input `git clone https://github.com/SAOJSM/OneManager-php && mv -b OneManager-php/* ./ && mv -b OneManager-php/.[^.]* ./ && rm -rf *~ && rm -rf OneManager-php` to Console or Shell on the right, press "Enter" to run it.  
> 3. Click the green button "Run", it will show the web page on the right, you MUST open it in a new tab or window.  

---

# Deploy to Glitch  

### Official

  https://glitch.com/  

### Demo

  https://onemanager.glitch.me/  

### How to Install

  [New Project] -> [Import form Github] -> paste "https://github.com/SAOJSM/OneManager-php" , after done, [Show] -> [In a New Window].  

---

# Deploy to Virtual Private Server (VPS) or php host  

### How to Install

1. Start web service on your server (httpd or other), make sure you can visit it.  

2. Install (or Enable) rewrite_module (or RewriteEngine, or URL_rewrite).  

3. Upload code.  

4. Make the rewrite works, the rule is in .htaccess file (IIS rule in web.config file), make sure any query redirect to index.php.  

5. Make the file .data/config.php can be read&write (666 is suggested).  

6. View the website in chrome or other.  

----

# Features  

  When downloading files, the program produce a direct url, visitor download files from MS OFFICE via the direct url, the server expend a few bandwidth in produce.  

  When uploading files, the program produce a direct url, visitor upload files to MS OFFICE via the direct url, the server expend a few bandwidth in produce.  

  The XXX_path in setting is the path in Onedrive, not in url, program will find the path in Onedrive.  

  LOGO ICON: put your 'favicon.ico' in the path you showed, make sure xxxxx.com/favicon.ico can be visited.   

  Program will show content of 'readme.md' & 'head.md'.  

  guest upload path, is a folder that the guest can upload files, but can not be list (exclude admin).  

  If there is 'index.html' file, program will only show the content of 'index.html', not list the files.  

  Click 'EditTime' or 'Size', the list will sort by time or size, Click 'File' can resume sort.  

----

# Functional files

### favicon.ico

  put it in the showing home folder of FIRST disk (maybe not root of onedrive). 

### index.html

  show content of index.html as html. 

### head.md

### readme.md

  it will showed at top or bottom as markdown.

### head.omf

### foot.omf

  it will showed at top or bottom as html (javascript works!). 

----

# Version Update Log

## 2024-03-21
- Updated minimum PHP version requirement to 8.1
- Updated doctrine/cache package to 2.2.1
- Optimized code structure and dependency management