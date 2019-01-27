//check off specific todos by clicking
$("li").click(function(){
	//if li is grey
	if ($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it back
		$(this).css({
		color: "black",
		textDecoration: "none" 
		});	
	} else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through" /*tricky syntax*/
		});	
	}
	//else
		//turn it grey
	
});