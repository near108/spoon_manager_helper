class InfomationController {

    constructor() {
        this.records = [];
    }

    start() {
        var self = this;
        console.log("infomation describer is started");
        this.getInfomation(self);
    }

    getInfomation(self) {
        // console.log(self.records);
        let time = getTime();
        console.log(time);
        if (typeof time === "undefined") {
        } else {
            const record = {
                time: time,
                heart: getHeartCount(),
                active: getActiveListener(),
                total: getTotalListener()
            };
            // console.log(record);
            self.records.push(record);
            chrome.storage.local.set({ infomations: self.records }, function () {
                console.log("stored info.");
            });
            // chrome.runtime.sendMessage(record);
        }
        setTimeout(self.getInfomation, 1000, self);
    }
}

