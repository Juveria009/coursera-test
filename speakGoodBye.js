(function(window) {

var byeSpeaker = {};
var speakWord = "Good Bye";

function speak(name) {

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
})(window);


