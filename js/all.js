$(document).ready(function(){
	/*swiper */
  	var mySwiper = new Swiper('.swiper-container', {
	    direction: 'horizontal', // 垂直切換選項
	    loop: true, // 迴圈模式選項
	    speed: 1500,
	    autoplay: {
     	delay: 2000,//1秒切换一次
    },
  })
	// gotop
	$('.goTop').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 1500);
	});

	/*下拉式選單 */
  	$('.menu > li > a').click(function(event) {
    	event.preventDefault();
    	$(this).parent().find('.menu-column').slideToggle();
    	$(this).parent().siblings().find('.menu-column').hide();
    	$(this).toggleClass('active');
    	$(this).parent().siblings().find('a').removeClass('active');
  });

  	// lightbox
    lightbox.option({
        'resizeDuration': 100,
        'wrapAround': true,
        'positionFromTop': 200,
    });


     var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    
})

	