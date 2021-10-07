console.log("popup.js is loaded");

// データ受け取り
var comments = [];
var infomations = [];

var currentComments = [];
var currentInfomations = [];

var commentError = false;
var infomationsError = false;

// CSV出力
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('export_csv').addEventListener('click', function () {
        chrome.storage.local.get("infomations", function (result) {
            // console.log(result);
            infomations = result;
        });

        chrome.storage.local.get("comments", function (result) {
            // console.log(result);
            comments = result;
        });
        // console.log('export csv file.');

        // infomations
        if (infomations != currentInfomations) {
            infomationsError = false;
            var infoData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(infomations));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", infoData);
            dlAnchorElem.setAttribute("download", "infomations.json");
            dlAnchorElem.click();
        } else {
            infomationsError = true;
        }

        // comments
        if (comments != currentComments) {
            var commentData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(comments));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", commentData);
            dlAnchorElem.setAttribute("download", "comments.json");
            dlAnchorElem.click();
        } else {
            commentError = true;
        }

        if (commentError) {
            alert("出力するコメントがありません。");
        }
        if (infomationsError) {
            alert("出力する情報がありません。");
        }

    });
});

// chrome.runtime.onMessage.addListener(function (message, sendResponse) {
//     // console.log(message);
//     if (message) {
//         if (message.type == 'comment') {
//             comments.push(message);
//             // console.log(comments.length);
//         } else if (message.type == 'info') {
//             infos.push(message);
//             // console.log(infos.length);
//         }
//     }
//     // var stage = document.getElementById('stage');
//     // if (chart) {
//     //     chart.data.dataPoints = infos;
//     // } else {
//     //     chart = new CanvasJS.Chart(stage, {
//     //         title: {
//     //             text: "LIVE情報"  //グラフタイトル
//     //         },
//     //         theme: "theme4",  //テーマ設定
//     //         data: [{
//     //             type: 'column',  //グラフの種類
//     //             dataPoints: infos  //表示するデータ
//     //         }]
//     //     });
//     // }
//     // chart.render();
// });