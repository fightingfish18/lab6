//William Smyth May
//2013-11-04
//This is the JavaScript file for processing the sign-up form for lab 6

//Window onload function
$(function() {
	//Populates the list of States in the dropdown menu.
	var state = $('.us-states');
	for (var i = 0; i < usStates.length; i++) {
		var option = $(document.createElement('option'));
		option.attr('value', usStates[i].abbreviation);
		option.html(usStates[i].name);
		state.append(option);
	}
	
	//Ensures that a zipcode is present if an address is provided.
	$('.signup-form').submit(function(){
		var form = $(this);
		var addr1Input = form.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		if (addr1Value.length > 0) {
			var zip = form.find('input[name="zip"]').val();
			if (zip.length < 1) {
				alert('Please enter a zip code since you have submitted a street address'); //Alerts users on what is required if not met.
				return false;
			}
		}
		return true;
	});
	
	//If the user clicks the No Thanks! button, the user is asked to confirm intentions
	$('.cancel-signup').click(function(){
		$('.cancel-signup-modal').modal();
	});
	
	//If the user confirms they wish to leave, they are redirected to Google.
	$('.btn-abandon').click(function(){
		window.location = 'http://www.google.com';
	});
});
