alert("Hello, Welcome to drum kit🥁");

//detecting button press

var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function(){
    var innerHTMLInside = this.innerHTML; //this is the identity of button that triggered the event listner
    handleEvent(innerHTMLInside);
    buttonAnimation(innerHTMLInside);
  //this means whole <button></button> tag so we do this.HTML  to get inner HTML
  });

  //this.style.color="white";

}

// detecting Keypress

document.addEventListener("keypress", function(){
  handleEvent(event.key);
  buttonAnimation(event.key);
});

function handleEvent(passed) {

  switch (passed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:

      console.log("landed somewhere!!! default of switch case");

  }
}
function checkWhatPressed(passedValue){

  switch (passedValue) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log("landed somewhere!!! default of switch case");

}
}

//button animation
function buttonAnimation(key){

var activeButton = document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");

}, 300);

}

//add an event listner to entire document so that it start listening whenever a key is pressed

  //   var audio = new Audio('sounds/tom-1.mp3');
  //   audio.play();
  // this.style.color = "blue";
  // this.style.backgroundColor = "green";
  // this.style.color = "red";
  // console.log(this.innerHTML);
  // alert("Something got clicked!!!");
