console.log('popup.js is loaded');

// データ受け取り
var comments = [];
var infomations = [];

var currentComments = [];
var currentInfomations = [];

var commentError = false;
var infomationsError = false;

document.addEventListener('DOMContentLoaded', function () {

    // シリアル認証
    const auth = new AuthController();
    auth.setSecretId(getSecretId());
    auth.setSecretKey(getSecretKey());
    let authResult = auth.authenticate();
    console.debug('認証結果: %s', authResult);

    document.getElementById('auth').addEventListener('click', function () {
        let secretId = document.getElementById('secretId').value;
        let secretKey = document.getElementById('secretKey').value;

        auth.setSecretId(secretId);
        auth.setSecretKey(secretKey);
        authResult = auth.authenticate();

        console.debug('認証結果: %s', authResult);

        chrome.storage.local.set({ auth_context: auth.getAuthContext() }, function () {
            console.debug('store authContext: %o', auth.getAuthContext());
        });
    });


    // CSV出力
    document.getElementById('export_csv').addEventListener('click', function () {

        chrome.storage.local.get('infomations', function (result) {
            // console.log(result);
            infomations = result;
        });

        chrome.storage.local.get('comments', function (result) {
            // console.log(result);
            comments = result;
        });
        // console.log('export csv file.');

        // infomations
        if (infomations != currentInfomations) {
            infomationsError = false;
            var infoData = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(infomations));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute('href', infoData);
            dlAnchorElem.setAttribute('download', 'infomations.json');
            dlAnchorElem.click();
        } else {
            infomationsError = true;
        }

        // comments
        if (comments != currentComments) {
            var commentData = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(comments));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute('href', commentData);
            dlAnchorElem.setAttribute('download', 'comments.json');
            dlAnchorElem.click();
        } else {
            commentError = true;
        }

    });
});

function getSecretId() {
    chrome.storage.local.get('secretId', function (result) {
        if (result) {
            return result;
        }
    });
    return '';
}

function getSecretKey() {
    chrome.storage.local.get('secretKey', function (result) {
        if (result) {
            return result;
        }
    });
    return '';
}
