(function(window) {


var helloSpeaker = {};
var speakWord = "Hello";

function speak(name) {

helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

window.helloSpeaker = helloSpeaker;
})(window);

