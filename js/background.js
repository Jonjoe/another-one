var orchestra = [];
var audio_files = 15;

var soundeffect = function() {
	this.audio = new Audio();
	this.audio.src = 'audio/1.mp3';

	this.start = function() {
		this.audio.play();
	};
};

function release() {
	var a = new soundeffect();
	orchestra.push(a);
	a.audio.onended = function() {
		orchestra.splice(0,1);
	};
	a.start();
}

chrome.browserAction.onClicked.addListener(release);