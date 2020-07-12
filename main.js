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
            $("#nav").hide(400);
            $("#right").hide();
        }
    })


    var elements = document.getElementsByTagName("*");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];

        let t = element.getAttribute("data-gte-target");
        let o = element.getAttribute("data-gte-offset");

        if (t) {

            element.onclick = () => {

                let tar = document.getElementById(t);

                window.scrollTo({
                    top: tar.offsetTop - parseInt(o),
                    behavior: "smooth",
                });
            }
        }
    }
})