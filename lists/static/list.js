/*'input').on('keypress', function () {
	$('.has-error').hide();
});*/

jQuery(document).read(function() {
	$('input').focus(function(){
		$('.has-error').hide();
	});
});