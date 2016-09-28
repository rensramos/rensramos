
var main = main || {};
main.init = function() {
    main.onNavbarMenuClick();
    // main.iconAnimation();
    main.onHeaderChange();
    main.mixItUpItem();
    // main.testimonialCarousel();
};

main.testimonialCarousel = function () {
    ("#testimonial-carousel").carousel({
        interval: 7000
    });

}

main.mixItUpItem = function () {
    var $container = $('#project-container');
    $container.mixItUp({
        controls: {
            enable: true,
            live: true,
            activeClass: 'active'

        },
        load: {
            filter: 'all',
            sort: 'rank:asc'
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
};

main.onHeaderChange = function () {
    $(".intro-header-middle").typed({
        strings: ["FRONT END DEVELOPER ^1000", "WEBSITE DESIGNER", "FRONT END DEVELOPER"],
        typeSpeed: 10,
        backDelay: 3000,
        showCursor: true,
        cursorChar: "|",
        loop: false
    });
};

main.iconAnimation = function () {
    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');
    });
};

main.onNavbarMenuClick = function () {

    // var triggerBttn = document.getElementById( 'trigger-overlay' ),
    //     overlay = document.querySelector( 'div.overlay' ),
    //     closeBttn = overlay.querySelector( 'trigger-overlay' );
    // transEndEventNames = {
    //     'WebkitTransition': 'webkitTransitionEnd',
    //     'MozTransition': 'transitionend',
    //     'OTransition': 'oTransitionEnd',
    //     'msTransition': 'MSTransitionEnd',
    //     'transition': 'transitionend'
    // },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    //     support = { transitions : Modernizr.csstransitions };
    //
    // function toggleOverlay() {
    //     if( classie.has( overlay, 'open' ) ) {
    //         classie.remove( overlay, 'open' );
    //         classie.add( overlay, 'close' );
    //         var onEndTransitionFn = function( ev ) {
    //             if( support.transitions ) {
    //                 if( ev.propertyName !== 'visibility' ) return;
    //                 this.removeEventListener( transEndEventName, onEndTransitionFn );
    //             }
    //             classie.remove( overlay, 'close' );
    //         };
    //         if( support.transitions ) {
    //             overlay.addEventListener( transEndEventName, onEndTransitionFn );
    //         }
    //         else {
    //             onEndTransitionFn();
    //         }
    //     }
    //     else if( !classie.has( overlay, 'close' ) ) {
    //         classie.add( overlay, 'open' );
    //     }
    // }
    //
    // triggerBttn.addEventListener( 'click', toggleOverlay );
    // closeBttn.addEventListener( 'click', toggleOverlay );

};


$(function(){
    main.init();
});

