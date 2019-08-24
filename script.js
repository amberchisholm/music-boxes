const cNote = document.getElementById('cAudio');
const cBox = document.getElementById("c");
const dNote = document.getElementById('dAudio');
const dBox = document.getElementById("d");
const eNote = document.getElementById('eAudio');
const eBox = document.getElementById("e");
const fNote = document.getElementById('fAudio');
const fBox = document.getElementById("f");
const gNote = document.getElementById('gAudio');
const gBox = document.getElementById("g");
const aNote = document.getElementById('aAudio');
const aBox = document.getElementById("a");
const bNote = document.getElementById('bAudio');
const bBox = document.getElementById("b");

function playCNote() {
	cNote.currentTime = 0;
	cNote.play();
} 

function playDNote() {
	dNote.currentTime = 0;
	dNote.play();
}

function playENote() {
	eNote.currentTime = 0;
	eNote.play();
}

function playFNote() {
	fNote.currentTime = 0;
	fNote.play();
}

function playGNote() {
	gNote.currentTime = 0;
	gNote.play();
}

function playANote() {
	aNote.currentTime = 0;
	aNote.play();
}

function playBNote() {
	bNote.currentTime = 0;
	bNote.play();
} 


cBox.addEventListener('click', playCNote);
dBox.addEventListener('click', playDNote);
eBox.addEventListener('click', playENote);
fBox.addEventListener('click', playFNote);
gBox.addEventListener('click', playGNote);
aBox.addEventListener('click', playANote);
bBox.addEventListener('click', playBNote);








// let x = document.getElementById("myAudio"); 

// function playAudio() { 
//   x.play(); 
// } 


