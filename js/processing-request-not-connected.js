$(document).ready(function() {
	setTimeout(function() {	
		$(".processing-wrapper-not-connected p").html('<span class="processing-message-error">Failed To Retrieve Profile Info</span>');
		$(".processing-wrapper-not-connected p").removeClass('animated infinite jello');
		$(".processing-wrapper-not-connected p").addClass('animated bounce');	
	}, 2500 );
	setTimeout(function() {	
		$(".processing-wrapper-not-connected p").html('Please check your username.');
		$(".processing-wrapper-not-connected p").removeClass('bounce');			
	}, 4500 );
	setTimeout(function() {	
		$(".processing-wrapper-not-connected").fadeOut(function(){
			$(".error-message").fadeIn();	
		});
	}, 5700 );
});
	