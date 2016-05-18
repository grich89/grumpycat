jQuery(document).ready(function() {

	// toggle menu

	var menu = jQuery('.menu');

	jQuery('.toggle').click(function() {
	    jQuery('.menu').slideToggle("fast");
	});

	jQuery(window).resize(function(){
       	var w = jQuery(window).width();
       	if(w > 768 && menu.is(':hidden')) {
           	menu.removeAttr('style');
     	}
    });

    // smooth scroll

    jQuery(document).ready(function($) {
	    $(".scroll").click(function(event) {
	    	event.preventDefault();
	    	$('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
	    } );
	} );

});