class InfomationController {
    start() {
        console.log("monitoring is starting");
        getInfomation();
    }
}

function getInfomation() {
    let time = getTime();
    console.log(time);
    if (typeof time === "undefined") {
    } else {
        const record = {
            type: "info",
            time: time,
            heart: getHeartCount(),
            active: getActiveListener(),
            total: getTotalListener()
        };
        console.log(record);
        chrome.runtime.sendMessage(record);
    }
    setTimeout('getInfomation()', 1000);
}