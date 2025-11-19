// ready function to update year in footer
$(function(){
	let today = new Date();
	$("footer span").text(today.getFullYear());
});

// ---------------------------------------------------------
// JQUERY EFFECTS
// https://api.jquery.com/category/effects/
// with jQuery effects, you can easily animate elements on your page, or animate basic interactions if you prefer. Things like opening a menu can include a simple animation that's easy to implement 
// let's allow the user to choose an animation and speed to animate the image in this section, and we'll animate the image when they click the button in the form underneath it

// we need to listen for a click on the button in the form, and handle the effects when that happens
$("#effectSubmit").click(function(e){
	// prevent default form submission
	e.preventDefault();
	
	// grab the two selects and their current values
	let effect = $("#effect").val();
	let speed = $("#speed").val();
	
	// the image we're going to animate
	let image = $("#effectImg");
	
	// run the animation based on the user's choice
	if(effect == "show"){
		image.show(speed);
	}else if(effect == "hide"){
		image.hide(speed);
	}else if(effect == "toggle"){
		image.toggle(speed);
	}else if(effect == "fadeIn"){
		image.fadeIn(speed);
	}else if(effect == "fadeOut"){
		image.fadeOut(speed);
	}else if(effect == "fadeToggle"){
		image.fadeToggle(speed);
	}else if(effect == "slideDown"){
		image.slideDown(speed);
	}else if(effect == "slideUp"){
		image.slideUp(speed);
	}else{
		image.slideToggle(speed);
	}
});


// ADDING EFFECTS TO A MODAL
$("#open-modal").on("click", () => {
	
	// make the modal visible using a jQuery Effect 
	$("#modal").fadeIn(1000)
		.queue(function(next){
			$(this).removeClass("hidden");
		next();
	})
	.css("display", "felx");
	
	// add a handler to support using an effect to hide the modal when the user clicks to close it
	$("#inner-modal button").on("click", () => {
		$("#modal").fadeOut(1000);
	});
	
});


// ---------------------------------------------------------
// CONTROLLING ANIMATION ORDER
// for more complicated animations or animation combined with other functionality that you want to run only after some effect or anumation completes, jQuery offers the queue method. This accepts a callback function thta will run when the animation is complete
// to practice this, I've pulled an example from the jQuery documentation
// https://api.jquery.com/queue/

// THIS IS AN EXAMPLE, UNCOMMENT LINES 80 & 81 where these functions are called to see them in action
// first let's get the div we're going to animate
let div = $("#queue");

// the runIt function has the different animations we want to queue on our div
// notice which ones we're using, not all properties can be animated or toggled, those with numerical values or an ability to toggle on and off are generally the ones we can work with
function runIt(){
	div
    .show("slow")
    .animate({left: "+=200"}, 2000)
    .slideToggle( 1000 )
    .slideToggle("fast")
    .animate({left: "-=200"}, 1500)
    .hide("slow")
    .show(1200)
    .slideUp("normal", runIt);
}

// the showIt function handles queueing the animations on the element, displaying where we are in the animation queue (how many effects we have left to run in the queue) to the page above our animated div, and setting a timeout before calling itself (this is a recursive function, so if we want it to stop running we'll need to comment out the call to it)
function showIt(){
  var n = div.queue("fx");
  $("#queueP span").text(n.length);
  setTimeout(showIt, 100);
}

// call to our functions to animate and update information about the queue
runIt(); 
showIt(); 


// ---------------------------------------------------------
// THE animate() METHOD
// as I mentioned above, you can use jQuery to animate certain properties in a custom way, and the animate method includes some more detailed information about that on their website (see the link I've included in this section on the page)
// CSS properties that are numerical or that can be toggled are the ones that will generally work with the animate method, as well as properties that work with toggle

// we can make our animation happen on click of the button under the image in the last section
// we are going to animate the image here to toogle it's opacity, width and height, including a speed argument and an easing function
$("#animatedImage button").on("click", function(){
	$("#animatedImage img").animate({
		opacity: "toggle",
		width: "toggle",
		height: "toggle"
	}, "slow", "linear");
});


// ---------------------------------------------------------
// Creating Your Own Animations
// ADD YOUR ANIMATION HERE 
$("#section5 button").on("click", function(){
	$("#section5 img").animate({
		opacity: "toggle",
		height: "5000px",
		width: "30px"
	}, 100000, function(){
		alert("animation is complete");
	});
});

// Example animation (more below also)
$('#section6 button').click(function(){
  $("#section6 img")
    .animate({ 
        "left": "-=75vw", // left by -75
        "top": "-=50vh" // up by -50
    }, 500)
    .animate({
      "left": "+=25vw", // left by -50
      "top": "-=25vh", // up by -75
       borderWidth: "10px"
    }, 500)
    .animate({
        deg: 360
        }, {
        duration: 900,
        step: function(now){
              $(this).css({transform: `rotate(${now}deg)`});
             }
      }, 1000)
    .animate({
      "left": "+=25vw", // left by -25
      "top": "+=25vh" // up by -50
    }, 500)
    .animate({
      "left": "+=50vw", // left by 25
      "top": "+=25vh" // up by -25
    }, 500)
    .animate({
        deg: -360
        }, {
        duration: 900,
        step: function(now){
              $(this).css({transform: `rotate(${now}deg)`});
             }
      }, 1000)
    .animate({ 
      "left": "+=50vw", // left by 75
      "top": "+=5vh" // up by -20
    }, 500)
    .animate({
      "left": "-=75vw", // back to 0
      "top": "+=20vh", // back to 0
       borderWidth: "5px"
  }, 500);
});


// ---------------------------------------------------------
// PAST STUDENT EXAMPLES
// these are available as a reference to help you see how we can use jQuery to animate page elements and CSS properties

// section 7 Student Example 1 (nicole)
$("#section7 button").click(function(){
  $("#section7 img").animate({
    border: "toggle",
    width: "toggle"
  }, "slow", "swing");
});

// section 8 Student Example 2 (molly)
$('#section8 button').click(function(){
  console.log("in section 8 function");
  $("#section8 img")
    .animate({ 
        "left": "-=500px",
        "top": "-=200px"
    }, 500)
    .animate({
      "left": "+=250px",
      "top": "-=200px",
       borderWidth: "10px"
    }, 500)
    .animate({
      "left": "+=250px",
      "top": "+=200px"
    }, 500)
    .animate({
      "left": "+=250px",
      "top": "-=200px"
    }, 500)
    .animate({ 
      "left": "+=250",
      "top": "+=200px"
    }, 500)
    .animate({
      "left": "-=500",
      "top": "+=200px",
       borderWidth: "5px"
  }, 500);
});

// section 9 Student Example 3 (dominik)
$("#section9 button").click(() => {
  $("#section9 img")
    .animate(
      {
        width: "1050px",
        height: "1050px",
        top: "0",
        left: "0"
      },
      30000
    )
    .css({
      position: "absolute",
      filter: "grayscale(100%)"
    });
});

// section 10 Student Example 4 (Seth)
$("#section10 button").click(function() {
  $("#section10 img").animate({
    width: "toggle",
    height: "100%",
    top: "-=100px",
    left: "-=200px",
  }, function(){
    $("#section10 img").animate({
      width: "toggle",
      height: "100%",
      top: "+=100px",
      left: "+=200px",
    }, function(){
      $("#section10 img").animate({
        width: "toggle",
        height: "100%",
        top: "-=100px",
        left: "+=200px",
      }, function(){
        $("#section10 img").animate({
          width: "toggle",
          height: "100%",
          top: "+=100px",
          left: "-=200px",
        });
      });
    });
  });
});
