

$(function () {
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

//Intro header type animation
$(function () {
    $(".intro-header-middle").typed({
        strings: ["FRONT END DEVELOPER ^1000", "WEBSITE DESIGNER", "FRONT END DEVELOPER"],
        typeSpeed: 10,
        backDelay: 3000,
        showCursor: true,
        cursorChar: "|",
        loop: false
    });
});

//testimonial
$(function () {
    $("#testimonial-carousel").carousel({
        interval: 15000
    });
});

//category filter dropdown animation
$(function () {
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
});

//on form sumbit
$("#form-content").on("submit",function(){
    $("#ss-submit").attr("disabled", true);
    setTimeout(function(){
        $("#ss-submit").attr("disabled", false);
    }, 1000);
    $("#hidden_iframe").on('load',function () {
        $("#modal-message").modal('show');
        $("#form-content")[0].reset();
        setTimeout(function(){
            $("#modal-message").modal('hide');
        }, 2000);
    });
});
