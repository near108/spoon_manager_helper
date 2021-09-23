console.log("popup.js is loaded");

// データ受け取り
var comments = [];
var infos = [];
chrome.runtime.onMessage.addListener(function (message, sendResponse) {
    console.log(message);
    if (message) {
        if (message.type == 'comment') {
            comments.push(message);
            console.log(comments.length);
        } else if (message.type == 'info') {
            infos.push(message);
            console.log(infos.length);
        }
    }
});
