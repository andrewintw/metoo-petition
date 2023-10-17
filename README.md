# metoo-petition

配合 Google 表單快速建立一個簡易的 #MeToo 連署網頁


## 專案說明

進行公民連署行動時，經常需要一個展示頁面，顯示目前的連署人數、以及公民身分。metoo-petition 這個小專案是 2022 年為了台灣的某個 #MeToo 事件而撰寫的。透過 metoo-petition 您只需有一個 google 帳戶就能快速建置一個連署網站。

它的運作架構如下:

```
        連署入口頁                         連署表單
      +------------+                    +-------------+
      | index.html | ---(open link)---> | Google Form |
      +------------+                    +-------------+
            |                                  |
 (read data & generate web page)          (save data)
            |                                  |
            |                                  V
            |                     +--------------------+
            +-------------------> | google spreadsheet |
                                  +--------------------+
　　　　　　　　　　　　　　　　　　　　　　儲存連署人資訊
```

透過 Google App Script，我們可以建立一個簡易的 WebApp，它會讀取由連署表單建立的試算表，並且把連暑人的內容顯示於網頁。網頁可以顯示連署聲明，並且顯示目前的連署人數、依照不同的身分列出連署人的名字（如下圖）。

![](images/web-app-page.png)


## 建置步驟

1. 建立一個 Google form 連署表單，設計樣貌如下：

包含兩個欄位：**你的身份**、**姓名**。 

![](images/google-form-design.png)

2. 設定將表單回覆內容儲存到一個 google 試算表（spreadsheet）

![](images/google-form-response.png)

3. google spreadsheet 的內容如下：

您不需要自行建立，只要在表單的回覆中指定一個新的試算表，系統便會自動建立這樣的試算表。

![](images/google-spreadsheet.png)

4. 接下來，從雲端硬碟的「新增 -> 更多」建立一個「Google App Script」

從 source/ 資料夾下，將所有的 .gs 和 .html 檔案內容都貼到 Google App Script 的編輯。

並且記得在 Code.gs（程式碼.gs）中取代您所使用的 google spreadsheet ID（您可以打開 Google 試算表，並從網址列取得這串 ID）

![](images/google-app-script.png)

5. 準備部署

點擊「部署 -> 新增部署作業」

![](images/google-apps-script-deploy.png)

6. 部署類型選擇「網頁應用程式（Deploy as Web App）」

![](images/deploy-as-web-app.png)

7. 部署完成後會取得一個 ＷebApp 的 URL，這個 URL 就是連署的入口網頁。

NOTE: 每當修改程式碼或是網頁內容時，都需要重新部署

![](images/web-app-url.png)

8. 試著在瀏覽器中打開測試

![](images/web-app-page.png)
