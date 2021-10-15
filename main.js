var commentBuffer = [];
var lastComment = [];
var lastCommentText = "";
var lastCommentUser = "";

main();

async function main() {

    console.log("spoon manager tools are running.");

    // コメント取得
    const commentController = new CommentController();
    commentController.start();

    // データ取得
    const infomationController = new InfomationController();
    infomationController.start("");


}
