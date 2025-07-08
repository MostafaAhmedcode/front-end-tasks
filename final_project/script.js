$(document).ready(function() {
    $("nav a, #startBtn").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href") || "#skills";
        $('html, body').animate({
            scrollTop: $(target).offset().top - 60
        }, 1000);
    });

    $(window).on('scroll', function() {
        $('.service-box').each(function() {
            var top = $(this).offset().top - $(window).scrollTop();
            if (top < 600) {
                $(this).addClass('visible');
            }
        });
    });
});