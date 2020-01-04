jQuery(function(){

    jQuery(".btn-menu").click(function(){
        jQuery(this).toggleClass("open");
        jQuery("#nav").toggleClass("show");
        jQuery(".mask").toggleClass("show");
    });
    
    jQuery(".mask, #nav li a").click(function(){
	    jQuery(this).toggleClass("show");
        jQuery("#nav").toggleClass("show");
        jQuery(".btn-menu").toggleClass("open");
    });
    
    jQuery(".btn-close").click(function(){
        jQuery(".mask").toggleClass("show");
        jQuery("#nav").toggleClass("show");
        jQuery(".btn-menu").toggleClass("open");
    });


});	
