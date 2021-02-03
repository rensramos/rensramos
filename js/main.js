
$(window).on("load",function () {
    $('.loader').fadeOut();

    $(".intro-header-middle").typed({
        strings: ["FRONT END DEVELOPER ^1000", "WEBSITE DESIGNER", "FRONT END DEVELOPER"],
        typeSpeed: 10,
        backDelay: 3000,
        showCursor: true,
        cursorChar: "|",
        loop: false
    });

    var $container = $('#project-container');
    $container.mixItUp({
        controls: {
            enable: true,
            live: true,
            activeClass: 'active'

        },
        load: {
            filter: 'all',
            sort: 'rank:desc'
        },
        selectors: {
            filter: '.filter',
            target: '.section-url'
        },
        callbacks:{
            onMixEnd: function(state){
                $('.mix').removeClass('active-item');
                state.$show.each(function( index ) {
                    $( this ).addClass( "active-item" );
                });
            }
        }
    });
});


$(document).ready(function () {
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

});



