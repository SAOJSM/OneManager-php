[English Readme](readme.md)  

# 版本更新記錄

## 2024-03-21
- 更新 PHP 最低版本要求至 8.1
- 更新 doctrine/cache 套件至 2.2.1
- 優化程式碼結構和相依性管理

# 注意：

  請關閉瀏覽器的翻譯功能。  

  Releases 只是當存檔使用，並非最新程式碼。  

  請將設定中所有的設定項目說明都讀一遍，有些問題就不用詢問了。  

---

# 部署到 Vercel  

### 官方網站

  https://vercel.com/  

### 展示網站

  https://onemanager-php.vercel.app/  

### 注意事項

> 1. 每次更改設定後都要等待 30-50 秒來確保部署成功；  
>
> 2. Vercel 每天限制 100 次部署。  

### 安裝說明（英文）

  https://scfonedrive.github.io/Vercel/Deploy.html   

---

# 部署到 Replit  

### 官方網站

  https://repl.it/  
  https://replit.com/  

### 展示網站

  https://onemanager.saojsm.repl.co/  

### 安裝方式
A:
> 1. 點擊右上的 "+" 或左上的 "+ Create Repl"，點擊 `Import from Github`；
> 2. 在 "GitHub URL" 中輸入 `https://github.com/SAOJSM/OneManager-php`，會自動顯示 "Language" 與 "PHP Web Server"，點擊下方的 "Import from Github"。  
> 3. 完成後，點擊上方的綠色 "Run" 按鈕，右側會顯示網頁，你必須在新視窗開啟它來安裝，否則無法登入。  

B:
> 1. 點擊右上的 "+" 或左上的 "+ Create Repl"，template 中輸入 php，選擇 "PHP Web Server"，在 "Title" 中輸入你想要的名稱或使用預設值，點擊下方的 "+ Create Repl"。  
> 2. 完成後，在右側的 Console 或 Shell 中輸入 `git clone https://github.com/SAOJSM/OneManager-php && mv -b OneManager-php/* ./ && mv -b OneManager-php/.[^.]* ./ && rm -rf *~ && rm -rf OneManager-php` 按 Enter 執行。  
> 3. 點擊上方的綠色 "Run" 按鈕，右側會顯示網頁，你必須在新視窗開啟它來安裝，否則無法登入。  

---

# 部署到 Glitch  

### 官方網站

  https://glitch.com/  

### 展示網站

  https://onemanager.glitch.me/  

### 安裝方式

  點擊 [New Project] -> 點擊 [Import form Github] -> 貼上 "https://github.com/SAOJSM/OneManager-php"，完成後，左上角點擊 [Show] -> [In a New Window]。  

---

# 部署到 VPS (Virtual Private Server) 或虛擬主機  

### 安裝方式

1. 啟動網頁伺服器，確保你能訪問到。  

2. 安裝 rewrite_module （或稱 RewriteEngine，或 URL_Rewrite）。  

3. 上傳程式碼。  

4. 開啟偽靜態（重寫）功能，規則在 .htaccess 檔案中，nginx 從裡面複製，IIS 規則在 web.config 檔案中，我們的目的是不管訪問什麼都讓 index.php 來處理。  

5. 使網頁身份可讀寫程式碼中的 .data/config.php 檔案，建議 chmod 666 .data/config.php。  

6. 在瀏覽器中訪問。  

----

# 特色功能  

  下載時，由程式解析出直接連結，瀏覽器直接從微軟 OneDrive 伺服器下載檔案，伺服器只消耗與微軟通信的少量流量。  

  上傳時，由程式生成上傳 url，瀏覽器直接向微軟 OneDrive 的這個 url 上傳檔案，伺服器只消耗與微軟通信的少量流量。  

  設定中的 XXX_path 是 OneDrive 裡面的路徑，並不是你 url 裡面的，程式會去你 OneDrive 裡面找這個路徑。  

  網站圖示：將 favicon.ico 檔案放在你要展示的目錄中，確保 xxxxx.com/favicon.ico 可以訪問到。  

  可以在檔案列表顯示 head.md 和 readme.md 檔案的內容。  

  訪客上傳目錄（也叫圖床目錄），是指定一個目錄，讓訪客可以上傳檔案，不限格式，不限大小。這個目錄裡面的內容不列清單（除非管理登入）。  

  如果目錄中有 index.html 檔案，只會輸出顯示 html 檔案，不顯示程式框架。  

  點擊"時間"、"大小"，可以排序顯示，點"檔案"恢復原樣。  

----

# 功能性檔案

### favicon.ico

  放在第一個磁碟的顯示目錄（不一定是 onedrive 根目錄）。  

### index.html

  將 index.html 以靜態網頁顯示出來。  

### head.md

### readme.md

  會在頂部或底部顯示為 markdown。

### head.omf

### foot.omf

  會在頂部或底部顯示為 html（javascript 可以運作！）。 