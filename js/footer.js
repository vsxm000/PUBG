
// 头部
$(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 200) {

            $('.actGotop').fadeIn(300);

        } else {

            $('.actGotop').fadeOut(300);

        }

    });

    $('.actGotop').click(function () {

        $('html,body').animate({ scrollTop: '0px' }, 800);
    });



    // 广告区域，tab切换
    // 鼠标点击
    $('.tab a').click(function () {
        var num = $(this).index()
        $('a')
            .addClass('tab-left')
            .siblings()
            .removeClass('tab-left')
        if (num == 0) {
            $('.xc')
                .css('display', 'block')
                .siblings()
                .css('display', 'none')
        }

        if (num == 1) {
            $('.tab-content .config')
                .css('display', 'block')
                .siblings()
                .css('display', 'none')
        }


    });
});

