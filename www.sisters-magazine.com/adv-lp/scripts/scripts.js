$(document).ready(function () {
    initPage();
});

/* FUNCTIONS DEFINITION */
function initPage() {
    $(document).localScroll({
        hash: false,
        duration: 400
    });

    /* MENU CLICK EVENTS */
    $('ul.paging-content li').click(function () {
        $('ul.paging-content li').removeClass('selected');
        $(this).addClass('selected');
    });

    /* DETERMINE DARK AND LIGHT */
    var tempTimeout;
    var currentScroll;
    var wheel_dir;
    var current_menu_selected;
    var enableScroll = true;
    window.mousewheelBinded = false;
    var sec1 = $('#sec1').offset().top;
    var sec2 = $('#sec2').offset().top;
    var sec3 = $('#sec3').offset().top;
    var sec4 = $('#sec4').offset().top;
    var sec5 = $('#sec5').offset().top;
    var sec6 = $('#sec6').offset().top;
    $(window).scroll(function () {
        clearTimeout(tempTimeout);
        tempTimeout = setTimeout(function () {
            /* CHANGE BETWEEN DARK AND LIGHT */
            currentScroll = $(window).scrollTop();
            if (currentScroll < (sec5 - ($(window).height() / 2))) {
                $('ul.paging-content').removeClass('dark');
                $('header').removeClass('dark');
            } else {
                $('ul.paging-content').addClass('dark');
                $('header').addClass('dark');
            }
            /* SELECT MENU CIRCLE */
            if (currentScroll < sec2 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(1)').addClass('selected');
            } else if (currentScroll < sec3 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(2)').addClass('selected');
            } else if (currentScroll < sec4 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(3)').addClass('selected');
            } else if (currentScroll < sec5 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(4)').addClass('selected');
            } else if (currentScroll < sec6 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(5)').addClass('selected');
            } else if (currentScroll >= sec6 - 20) {
                $('ul.paging-content li').removeClass('selected');
                $('ul.paging-content li:nth-child(6)').addClass('selected');
            }
        }, 150);
    });

    /* MOUSE WHEEL */
    function doScroll(arg) {
        if (enableScroll) {
            enableScroll = false;
            arg.find('a').click();
            setTimeout(function () {
                enableScroll = true;
            }, 1600);
        }
    }

    if (!window.mousewheelBinded) {
        window.mousewheelBinded = true;
        $(document).on('mousewheel', function (event, delta) {
            current_menu_selected = $('.container ul.paging-content li.selected');
            wheel_dir = delta;
            if (wheel_dir < 0) {
                doScroll(current_menu_selected.next())
            } else {
                doScroll(current_menu_selected.prev());
            }
        });
    }
}