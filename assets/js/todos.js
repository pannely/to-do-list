//check off specific todos by clicking
$("ul").on("click", "li", function(){ //using "on() allows you to add arguments "
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){ /*add event object to stop bubbling*/
	$(this).parent().fadeOut(500, function(){ /*add a function to ensure fadeout before remove*/
		$(this).remove(); /* this now refers to li */
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbibg new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //clears out input
		//create a new li and add to ul
		$("ul").append("<li><span>x</span> "+todoText+"</li>")
	}
});