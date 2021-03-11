let comments=[];
loadComments();

document.getElementById('comm_add').onclick = function(){
    let commentBody = document.getElementById('comment-body');

    let comment = {
        body: commentBody.value,
    }
    console.log(comment);
    commentBody.value ='';
    comments.push(comment);

    saveComments();
    showComments();
}
function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}
function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'))
    showComments();
};
function showComments(){
    let commentField = document.getElementById('comment_field');
    let out = '';
    comments.forEach(function(item){
        out += `<p>${item.body}</p>`;
    });
    commentField.innerHTML = out;
}