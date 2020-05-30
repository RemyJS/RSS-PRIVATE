const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');

function talk() {
  synth.speak(utterance);
}

function stop() {
  synth.pause();
}
