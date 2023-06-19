// ==UserScript==
// @name         NCHU Portal Helper
// @namespace    https://idp.nchu.edu.tw/
// @version      0.1.6
// @description  興大入口自動登入
// @homepage     https://www.nchu.edu.tw/
// @author       Axisflow
// @match        https://idp.nchu.edu.tw/*
// @icon         https://www.nchu.edu.tw/favicon.ico
// @updateURL    https://axisflow.github.io/GitCloud-Public/NCHU-PortalLogin/pl.meta.js
// @downloadURL  https://axisflow.github.io/GitCloud-Public/NCHU-PortalLogin/pl.user.js
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.close
// ==/UserScript==

(function () {
    'use strict';



    /* User Settings Begin */

    let reset = 165;

    /* User Settings End */



    /* Main Program */

    if(window.location.pathname == "/nidp/idff/sso" && window.location.search.search("option=credential") != -1) {
        let id = null;
        let pwd = null;
        if(GM_getValue('reset', null) != reset) {
            alert("接下來會請你輸入帳號資訊作為之後自動登入使用，若輸入錯誤或想更改帳號請進入腳本編輯介面將 reset 宣告為任一值");
            id = prompt("輸入帳號名稱：");
            pwd = prompt("輸入密碼：");

            GM_setValue('reset', reset);
            GM_setValue('id', id);
            GM_setValue('pwd', pwd);
        } else {
            id = GM_getValue('id', null);
            pwd = GM_getValue('pwd', null);
        }

        document.getElementsByTagName('input')[0].value = id;
        document.getElementsByTagName('input')[1].value = pwd;
        document.getElementsByTagName('input')[2].value = code;
        document.getElementsByTagName('button')[0].click();
    }

})();
