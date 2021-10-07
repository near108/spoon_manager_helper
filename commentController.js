class CommentController {
    constructor() {
        this.records = [];
    }

    start() {
        var self = this;
        console.log('commnet describer is stated.');
        this.getComment(self);
    }

    getComment(self) {
        var announce = document.getElementsByClassName('comment');

        if (announce[announce.length - 1] != lastComment) {
            lastComment = announce[announce.length - 1];
            if (lastComment) {
                commentBuffer.push(lastComment);
                if (lastComment.getElementsByTagName('button').length > 0) {
                    lastCommentUser = lastComment.getElementsByTagName('button')[0].textContent;
                }
                lastCommentText = lastComment.getElementsByTagName('pre')[0].textContent;
                const comment = {
                    time: getTime(),
                    user: lastCommentUser,
                    text: lastCommentText
                };
                // console.log(comment);
                // chrome.runtime.sendMessage(comment);
                self.records.push(comment);
                chrome.storage.local.set({ comments: self.records }, function () {
                    console.log("stored comment.");
                });
            }
        }
        setTimeout(self.getComment, 100, self);
    };

}

