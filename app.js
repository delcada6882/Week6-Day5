$('.submit').on('click', function(){
    let userNameComment = $('#displayName').val();
    let userComment = $('#comment').val();
    
    $('#commentSection').append(`
    <div class="commentPost">
        <div class="commentImage">
            <img src="Profile Image.png" alt="Default Profile Picture">
        </div>
        <div class="commentText">
            <div class="commentHeader">
                <p class="userName">${userNameComment}</p>
                <div class="commentChange">   
                    <p class="edit">Edit</p>
                    <p class="delete">Delete</p>
                </div>
            </div>
            <h1 class="comment">${userComment}</h1>
            <div id="editComment" class="noDisplay">
                <input type="text" id="editting" placeholder="New Comment">
                <h1 class="editSubmit">Submit</h1>
            </div>
        </div>
    </div>
    `);

    $('#displayName').val("");
    $('#comment').val("");
});
$('#commentSection').on('click', '.delete', function(){
    let deleteMaterial = $(this).parents()[3];
    $(deleteMaterial).remove();
});

$('#commentSection').on('click', '.edit', function(){
    let changeMaterialParent = $(this).parents()[2];
    let changeMaterial = $(changeMaterialParent).children()[2];
    $(changeMaterial).toggleClass('noDisplay');
});

$('#commentSection').on('click', '.editSubmit', function(){
    let newUserCommentParent = $(this).parents()[0];
    let newUserCommentInput = $(newUserCommentParent).children()[0];
    let newUserComment = $(newUserCommentInput).val();

    let editChangeMaterialParent = $(this).parents()[1];
    let editChangeMaterial = $(editChangeMaterialParent).children()[1];
    $(editChangeMaterial).text(newUserComment);
    
    let changeMaterialParent = $(this).parents()[1];
    let changeMaterial = $(changeMaterialParent).children()[2];
    $(changeMaterial).toggleClass('noDisplay');
    
    $(newUserCommentInput).val("");
});