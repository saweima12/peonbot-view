---
title: 關於 PeonBot
---

# 關於 PeonBot

PeonBot 為實驗型整地機器人，透過一連串機制設計增加 [**廣告機器人**] 及 [**亂群人士**] 的攻擊成本，保持群組訊息的整潔，並透過配套的查詢頁面協助管理員清理亂源。

## 核心功能

- 發言權限驗證 （預設鎖定及刪除除管理員外所有成員的貼圖、錄影、轉發權限，需發言到達一定次數才可解鎖）
- 網址黑名單 （針對特定網址自動進行刪除）
- 記錄查詢  （透過網頁查詢群組內成員的發言點數、被刪除的訊息。）

*TIPS*: 
- 發言點數每五分鐘結算一次，因此剛到達標準並不會馬上解鎖權限。
- 台灣時間每天晚上 11 點自動清除「14日內未曾發言且發言點數小於 21 點」的點數記錄，需要重新累積。
- 機器人目前沒有踢人功能。

## 可用指令

指令分為一般使用者及管理員兩部份。

**一般使用者:**
  - $point 用於查詢當前的發言點數

**管理員:**
  - $setlevel 配合 reply 使用，用於設置成員的權限等級 (none | jr | sr) 當設置為 jr 以上時會解鎖貼圖權限。
  - $query 配合查詢頁面使用，用於查詢因改名字而找不到的成員。
  - $save 配合 Reply 使用，將 reply 的訊息記錄進資料庫，方便分析如何阻擋。

## 輔助網站（本網站）

網站每 2 小時刷新一次，用於檢視群組內部的點數變化及攔截、刪除的訊息。

## 關於協助機器人運作

機器人的運行成本包含 VPS 的月費及 DOMAIN 的年費。如果有興趣協助機器人的運作，有以下兩個管道可使用：(點圖可顯示原大小)

<details>
    <summary>Binance 錢包</summary>
    <div class="flex flex-col sm:flex-row">
        <div class="flex-1 wallet-box">
            <a href="https://media.saweicore.com/common/BINANCE-WALLET.jpg" target="_blank">
                <img src="https://media.saweicore.com/common/BINANCE-WALLET.jpg" loading="lazy" style="width:300px"/>
            </a>
        </div>
        <div class="flex-1 text-ellipsis">
            <section class="p-5" style="padding: 0 1rem;">
                <strong>幣安交易所的錢包</strong>
                <p>幣安ID: 403638280</p>
                <p>可接受所有幣安支援的幣種</p>
            </section>
        </div>
    </div>
</details>


<details>
    <summary>Cardano 錢包</summary>
    <div class="flex flex-col sm:flex-row">
        <div class="flex-1 wallet-box">
            <a href="https://media.saweicore.com/common/ADA-WALLET.jpg" target="_blank">
                <img src="https://media.saweicore.com/common/ADA-WALLET.jpg" loading="lazy" style="width:300px"/>
            </a>
        </div>
        <div class="flex-1 text-ellipsis">
            <section class="p-5" style="padding: 0 1rem;">
                <strong>Cardano 區塊鏈上的錢包地址：</strong>
                <p class="break-all" style="word-break: break-all; padding: 0 0.5rem;">
                    addr1q9tftn49hj9etv4xddeaxd6w69qmt5h3wqhfmt6s3x5pv0t00vhntt5d44nytqj8uhre7vmkkm6q6f9j7lguqz8tfp7q4f70d3
                </p>
                <p>此錢包目前只能接受 ADA 轉帳。</p>
            </section>
        </div>
    </div>
</details>

