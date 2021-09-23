function getTime() {
    let target = document.getElementsByClassName("time-chip-container");
    if (target[0]) {
        let time = target[0].getElementsByTagName("span")[0].innerText;
        if (time !== "00:00") {
            return time;
        }
    }
}

function getHeartCount() {
    let parent = document.getElementsByClassName("count-info-list")[0];
    if (parent) {
        let targets = parent.getElementsByTagName("li");
        if (targets.length == 4) {
            let heart = targets[1].getElementsByTagName("button")[0].getAttribute("title");
            return heart;
        }
    }
}

function getTotalListener() {
    let parent = document.getElementsByClassName("count-info-list")[0];
    if (parent) {
        let targets = parent.getElementsByTagName("li");
        if (targets.length == 4) {
            let tl = targets[3].getElementsByTagName("button")[0].getAttribute("title");
            return tl;
        }
    }
}

function getActiveListener() {
    let parent = document.getElementsByClassName("count-info-list")[0];
    if (parent) {
        let targets = parent.getElementsByTagName("li");
        if (targets.length == 4) {
            let tl = targets[2].getElementsByTagName("button")[0].getAttribute("title");
            return tl;
        }
    }
}