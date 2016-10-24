$(document) .ready(function() {
	$("#testbutton, strong").click(function() {
		$(this).css("background-color", "red"); /* this will leave the clicked one as is*/
	});
});