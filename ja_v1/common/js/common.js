jQuery(function(){

    jQuery(".menu-switch").click(function(){
        jQuery(this).toggleClass("open");
        jQuery(".navbox").toggleClass("show");
        jQuery(".mask").toggleClass("show").disableScroll();
    });
    
    jQuery(".mask,.navbox .nav li a").click(function(){
	    jQuery(this).toggleClass("show");
        jQuery(".navbox").toggleClass("show");
        jQuery(".menu-switch").toggleClass("open");
    });

	jQuery('[data-toggle="tooltip"]').tooltip();
	
	jQuery(".btn-body-search").click(function(){
        jQuery(this).toggleClass("show");
        jQuery(".human").toggleClass("show");
    });
    
    jQuery(".body-tab .btn").click(function(){
        jQuery(this).addClass("active").siblings().removeClass("active");
    });
    
    jQuery(".body-front").click(function(){
        jQuery(".body-show .body.front").show().siblings().not(".label").hide()
    });
    jQuery(".body-back").click(function(){
        jQuery(".body-show .body.back").show().siblings().not(".label").hide()
    });

});	

// 相关视频轮播
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// 头部随滚动收缩
var position = 0;

jQuery(window).scroll(function(e) {
  var $element = jQuery('.hdc, .col-body-side');
  var scrollTop = jQuery(this).scrollTop();
  if( scrollTop <= 0 ) { 
    $element.removeClass('hide').removeClass('scrolling');
  } else if( scrollTop < position ) {
    $element.removeClass('hide');
  } else if( scrollTop > position ) {
    $element.addClass('scrolling');
    if( scrollTop + jQuery(window).height() >=  jQuery(document).height() - $element.height() ){
      $element.removeClass('hide');
    } else if(Math.abs($element.position().top) < $element.height()) {
      $element.addClass('hide');
    }
  }
  position = scrollTop;
})
	

// scroll into view
/*
window.addEventListener('load', function() {
	document.querySelector('.body-part').addEventListener('click', function(e) {
	  e.preventDefault();
	  document.querySelector('.col-body-main').scrollIntoView({ behavior: 'smooth' });
	});
});
*/
