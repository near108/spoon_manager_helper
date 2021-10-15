class CommentController {

    constructor() {
        this.records = [];
    }

    start() {
        var self = this;
        console.log('commnet describer is stated.');

        // コメント取得
        this.getComment(self, function (comment) {
            // コメント取得時処理
            self.records.push(comment);
            chrome.storage.local.set({ comments: self.records }, function () {
                console.log("stored comment.");
            });
        });
    }

    getComment(self, callback) {
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
                callback(comment);
            }
        }
        setTimeout(self.getComment, 100, self, callback);
    };

}

