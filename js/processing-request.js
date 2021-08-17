$(document).ready(function() {
	setTimeout(function() {	
		$(".processing-wrapper p").html('<span class="processing-message-success">Profile Info Succesfully Retrieved</span>');
		$(".processing-wrapper p").removeClass('animated infinite jello');
		$(".processing-wrapper p").addClass('animated bounce');	
	}, 2500 );
	setTimeout(function() {	
		$(".processing-wrapper p").html('Processing...');
		$(".processing-wrapper p").removeClass('bounce');
		$(".processing-wrapper p").addClass('infinite jello');			
	}, 4500 );
	setTimeout(function() {	
		$(".processing-wrapper").fadeOut(function(){
			$(".processing-second-step").fadeIn();	
		});
	}, 6500 );
});
	