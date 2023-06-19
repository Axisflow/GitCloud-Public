// ==UserScript==
// @name         NCHU Health Form Filler
// @namespace    https://avenger2.nchu.edu.tw/HealthSurvey/
// @version      0.1.3
// @date         2022-03-25
// @description  自動幫你填寫疫苗表單
// @homepage     https://www.nchu.edu.tw/
// @author       Axisflow
// @match        https://avenger2.nchu.edu.tw/*
// @icon         https://www.nchu.edu.tw/favicon.ico
// @updateURL    https://axisflow.github.io/GitCloud-Public/Auto-NCHU-HealthSurvey/autohs.meta.js
// @downloadURL  https://axisflow.github.io/GitCloud-Public/Auto-NCHU-HealthSurvey/autohs.user.js
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.close
// ==/UserScript==

(function () {
    'use strict';
    var nowHSVer = 1;

    var temp;

    if ((temp = GM_getValue(hsver)) == undefined || temp < nowHSVer) {

    }

    if (confirm("Auto?")) {
        let nowLoc = location.pathname;

        if (nowLoc == "/HealthSurvey/" || nowLoc == "/HealthSurvey/logout.jsp") {
            //// Login Form \\\\
            document.getElementsByClassName('form-control')[0].value = "41100XXXXX"; //學號
            document.getElementsByClassName('form-control')[1].value = "**********"; //密碼
            document.getElementsByTagName('button')[0].click();
        }
        else if (nowLoc == "/HealthSurvey/NoteServlet" || nowLoc == "/HealthSurvey/project/SelfDec2.jsp") {

            ////

            //// Policies Acceptions \\\\
            document.getElementsByClassName('ajs-ok')[0].click();
            document.getElementsByClassName('ajs-ok')[1].click();

            //// Main Form \\\\
            /*1. 連絡電話*/
            document.getElementById('Q1').value = '09XXXXXXXX';

            /*2.近一個月出入境台灣史? */
            document.getElementById('Q2-1').click(); //No

            /*3. 最近14天內是否出現以下症狀(複選)*/
            document.getElementById('Q4-0').click(); //無以下任一症狀

            /*4. 最近14天內是否有接觸正在居家隔離、居家檢疫的家人、親友?*/
            document.getElementById('Q11-1').click(); //No
            //document.getElementById('Q11-2').click(); //Yes

            /*5. 最近14天內是否有接觸正在自主健康管理期的家人、親友?*/
            document.getElementById('Q12-1').click(); //No
            //document.getElementById('Q12-2').click(); //Yes

            /*6.您近期(一個月內)是否接受過新冠肺炎篩檢?*/
            document.getElementById('Q13-1').click(); //No
            //document.getElementById('Q13-1').click(); //Yes

            /*7.最近14天內，您是否為衛生主管機關列管之嚴重特殊傳染性肺炎(武漢肺炎)居家隔離、居家檢疫或自我健康管理個案?*/
            document.getElementById('Q16-1').click(); //No
            //document.getElementById('Q16-2').click(); //Yes

            /*8.施打第一劑新冠肺炎疫苗時間? */
            document.getElementById('Q15_date').value = 'MM/DD/YYYY';

            /*9.施打第二劑新冠肺炎疫苗時間?*/
            document.getElementById('Q17_date').value = 'MM/DD/YYYY';

            /*10.施打第三劑新冠肺炎疫苗時間? */
            document.getElementById('Q18_date').value = 'MM/MM/YYYY';

            document.getElementById('b2').click();
            document.getElementsByClassName('ajs-ok')[1].click();


            window.close();
        }
    }
})();
