$('#slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    infinite: false,

    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a class="dot">'+(i+1)+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});