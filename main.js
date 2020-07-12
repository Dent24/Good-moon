$(document).ready(function(){

    $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        var offset = $(about).offset();
        var top = offset.top;
        top = top - 300;

        if(windowTop > top){
            $("#nav").show(400);
            $("#right").show();
        } else{
            $("#nav").hide();
            $("#right").hide();
        }
    })
})