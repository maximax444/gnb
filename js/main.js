$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});
$('.header__mob').on("click", function (e) {
    e.preventDefault();
    $('.header__mob-menu').toggleClass('active');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
    }
});
$(".about-photos__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    fade: true,
    prevArrow: ".about-arrow-prev",
    nextArrow: ".about-arrow-next"
});
