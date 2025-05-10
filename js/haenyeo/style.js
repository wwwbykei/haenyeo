
//navigation
function navCollapse(){//sub menu mobile
    if( $( window ).width() <= 1180 ){
        $( ".nav-gnb > ul > li:not(.nochild)" ).click( function(){
            $( ".nav-gnb > ul > li:not(.nochild)" ).removeClass( "active" );
            $( this ).addClass( "active" );
        });
    }else{
        $( "body, .nav-menu, .nav-gnb > ul > li:not(.nochild), .bg-close" ).removeClass( "active" );
    }
};
function navBtn(){
    $( ".nav-btn,.nav-search" ).click( function(){
        $( "body,.nav-menu,.bg-close" ).toggleClass( "active" );
    });
    $( "header" ).append( "<div class='bg-close'></div>" );
    $( ".nav-menu" ).bind( 'webkitTransitionEnd otransitionend oTransitionEnd transitionend', function() {
        $( ".bg-close, .nav-close" ).click( function(){
            $( "body, .nav-menu, .bg-close" ).removeClass( "active" );
        });
    });
};

//상단 메뉴 고정
function navSticky(){
	if ($(window).scrollTop() > 50) {
		$('#js-sticky').addClass('sticky');
	}
	else{
		$('#js-sticky').removeClass('sticky');
	}
}

function setHiddenBtn(){
	if ( $(this).scrollTop() > 100 ) {
		$( ".btn-show-scroll" ).fadeIn();
	}else{
		$( ".btn-show-scroll" ).fadeOut();
	}
};
function setBtntop(){
	$( "a[href='#top']" ).click(function(){
        $('html,body').animate({ scrollTop:0 }, 100 );return false;
    });
};


//fade up 모션
function aosInit(){
	AOS.init({
		disable: false,
		offset: 300,
		duration: 1300,
		easing: 'ease',
		once: true,
		delay: 200,
	});
};

$( document ).ready( function(){
	navCollapse();
	navBtn();
	setBtntop();
});

$( window ).resize( function(){
    navCollapse();
});

$( window ).scroll( function(){
	setHiddenBtn();
	navSticky();
});