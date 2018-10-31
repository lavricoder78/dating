//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../libs/nice_scroll.js
//= ../../libs/waypoint.min.js
//= ../../libs/countUp.js




$(document).ready(function(){
	$('.counter').counterUp({
		delay: 43,
	    time: 4300,
        offset: 150
	});

	$(".counter_3").counterUp({
    		delay: 20,
		    time: 2000,
         	beginAt: 150,
     	    offset: 150
	});


	$(window).scroll(function() {
	    $('.going_left_right').each(function(){
	      var imagePos = $(this).offset().top;
	      var topOfWindow = $(window).scrollTop();
	      if (imagePos < topOfWindow+600) {
	        $(this).removeClass("hidden_box_clear");
	        $(this).addClass('fadeInLeft');
	      }
	    });

    	$('.going_right_left').each(function(){
	      var imagePos = $(this).offset().top;
	      var topOfWindow = $(window).scrollTop();
	      if (imagePos < topOfWindow+600) {
	        $(this).removeClass("hidden_box_clear");
	        $(this).addClass('fadeInRight slow');
	      }
	    });

		$('.going_top_bottom').each(function(){
	      var imagePos = $(this).offset().top;
	      var topOfWindow = $(window).scrollTop();
	      if (imagePos < topOfWindow+600) {
	        $(this).removeClass("hidden_box_clear");
	        $(this).addClass('fadeInDown slow');
	      }
	    });
  	});
});