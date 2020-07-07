$('#slide1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});

$('#slide2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    asNavFor: '#slide1',
});