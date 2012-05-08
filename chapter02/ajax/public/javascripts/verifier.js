$(document).ready(function () {
    $('.uname').blur(function (e) {
        $.ajax({
            type:"POST",
            url:"/verify",
            data:{ username:$('.uname').val()}
        }).done(function (taken) {
                if (taken == 'N') {
                    $('#imagePlaceHolder').html('<img src="http://nodeninja.github.com/book/chapter02/tick.png">');
                }
                else {
                    $('#imagePlaceHolder').html('<img src="http://nodeninja.github.com/book/chapter02/cross.png">');
                }
            });
    });
});