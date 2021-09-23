var commentBuffer = [];
var lastComment = [];
var lastCommentText = "";
var lastCommentUser = "";

main();

function main() {
    console.log("spoon manager tools are running.");

    const commentController = new CommentController();
    commentController.start();

    const infomationController = new InfomationController();
    infomationController.start("");

}
