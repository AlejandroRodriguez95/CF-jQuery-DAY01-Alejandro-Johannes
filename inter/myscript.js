$("form").submit(function(e) {

	e.preventDefault();
	
	
	
	

});

// $("#myform").css("display", "none");

var newDiv = '<div> New div test</div>';
// // ask why its not working with pre work syntax ($ at declaring new var)
$("article").append(newDiv);
$("article").append(newDiv);
$("article").append(newDiv);
$("article").append(newDiv);
$("article").append(newDiv);

$("input").val("Search for...");

$("div").addClass("Box");



$("a").attr("href", "www.codefactory.wien");
$("a").attr("test", "Number1");
