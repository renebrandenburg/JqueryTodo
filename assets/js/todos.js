// Check Off specific Todos by Clicken 
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Click on x to delete Todo 
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});
