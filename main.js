$('.form .stages label').click(function() {
	var radioButtons = $('.form input:radio');
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
	selectedIndex = selectedIndex + 1;
});

$('.form button').click(function() {
	var radioButtons = $('.form input:radio');
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));

	selectedIndex = selectedIndex + 2;

	$('.form input[type="radio"]:nth-of-type(' + selectedIndex + ')').prop('checked', true);

	// if (selectedIndex == 6) {
	// 	$('button').html('I Agree');
	// } else if (selectedIndex == 5) {
	// 	$('button').html('Submit Your Contact');
	// } else if (selectedIndex == 4) {
	// 	$('button').html('Submit Supervisor Contact');
	// } else if (selectedIndex == 3) {
	// 	$('button').html('Set Prize');
	// } else  {
	// 	$('button').html('Set Deadline');
	// }
});