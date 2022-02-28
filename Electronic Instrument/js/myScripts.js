// JavaScript Document

$(document).ready(function(){
            $("#mySVG").load("images/Artboard1.svg", function(){
                //We will add our new code here!
				
				$("#G_key").click(function(){
					console.log("G Note!");
					$("#info").html("G note is also considered the fifth, with octaves sound ranging from 12.25 Frequency and up to 25087.708 Frequency.");
				});
				
            });
});