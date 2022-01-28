// JavaScript Document

$(document).ready(function(){
	
	//jQuery methods go here...
	
	//This method changes text
	$("h1").html('Jordan David');
	
	//fade in effect on header
	$("#background").fadeIn("slow");
	
	
	//check for a button click
	$("#btn1").click(function(){
		//this runs the code when the button is clicked
		//console.log("Working");
		
		$("#changeContent").html("This is <b>great!</b>");
		
		
	}); //this closes btn 1
	
	//clicking on btn2
	
	$("#btn2").click(function(){
		
		//console.log("working!");
		
		$(".cssChange").css("background-color","green");
		
	});
	
	//menu sliding
	
	$("#hamburger").click(function(){
		//console.log("working");
		//slide the menu out 
		$("#menu").slideToggle("slow");
		
		
	}); //end of hamburger click
	
	//check for a click on id close
	//slide away
	$("#close").click(function(){
		
		$("#menu").slideUp("slow");
		
	});
	
	//gallery stuff
	
	//check if nxt btn is clicked
	//fade out set 1 of pics
	//fade in set 2
	$("#nextBtn").click(function(){
				$("#set1").fadeOut("slow", function(){
				$("#set2").fadeIn("slow");
});
	});
	
	
}); //ALL code goes before this
