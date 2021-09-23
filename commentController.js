class CommentController {
    start() {
        var self = this;
        console.log('commnet describer is running.');
        getComment(self);
    }
}

function getComment(self) {
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
                type: "comment",
                time: getTime(),
                user: lastCommentUser,
                text: lastCommentText
            };
            chrome.runtime.sendMessage(comment);
            console.log(comment);
        }
    }
    setTimeout('getComment()', 100, self);
};
