// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function( $ )
	{
	
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	4500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			}
		
		// Listeners
		$('.sticky').ready(function()
			{
			// If 'autoclose' is enabled, set a timer to close the sticky
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
			});
		// Closing a sticky
		$('.sticky-close').click(function()
			{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var user_ip = ["254.41.197.192","181.15.126.200","209.106.24.170","34.143.58.72","29.201.175.99","100.186.42.9","57.98.121.206","35.57.185.160","22.176.152.72","50.99.2.200","133.9.137.215","178.81.40.52","22.120.137.255","94.237.105.49","63.62.177.120","128.213.22.206","222.206.180.186","88.68.57.209","129.220.179.75","156.40.138.82"];
	var country_flag = ['img/cf/UK.png', 'img/cf/US.png', 'img/cf/Germany.png', 'img/cf/Netherlands.png', 'img/cf/Sweden.png', 'img/cf/Australia.png', 'img/cf/France.png', 'img/cf/Switzerland.png', 'img/cf/Belgium.png', 'img/cf/Canada.png', 'img/cf/Denmark.png', 'img/cf/Italy.png', 'img/cf/Singapore.png'];	
	var followers_amount =["<span class='activity-followers-amount-value'><img class='img-responsive' src='img/followers-selection-3-small.png'/>5000 Followers</span>","<span class='activity-followers-amount-value'><img class='img-responsive' src='img/followers-selection-2-small.png'/>2500 Followers</span>","<span class='activity-followers-amount-value'><img class='img-responsive' src='img/followers-selection-1-small.png'/>1000 Followers</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-user-ip">IP: ' + random_user_ip() +'</span></div><div class="activity-before-followers-amount">has generated</div><div class="activity-followers-amount">'+random_followers_amount() +'</div></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-user-ip">IP: ' + random_user_ip() +'</span></div><div class="activity-before-followers-amount">has generated</div><div class="activity-followers-amount">'+random_followers_amount() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 2500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-user-ip">IP: ' + random_user_ip() +'</span></div><div class="activity-before-followers-amount">has generated</div><div class="activity-followers-amount">'+random_followers_amount() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 6500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-user-ip">IP: ' + random_user_ip() +'</span></div><div class="activity-before-followers-amount">has generated</div><div class="activity-followers-amount">'+random_followers_amount() +'</div></div>');
	}
	
	function random_user_ip()
	{
	 return user_ip[rng(0,user_ip['length']-1)];
	}
	function random_flag()
	{
	 return country_flag[rng(0,country_flag['length']-1)];
	}
	function random_followers_amount()
	{
	 return followers_amount[rng(0,followers_amount['length']-1)];
	}
}); 
