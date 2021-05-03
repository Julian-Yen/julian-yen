const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const bgm = document.querySelector('.bgm');
const audioElement = document.querySelector('audio');
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);
// if track ends

bgm.addEventListener('click', function () {
  // check if context is in suspended state (autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  if (this.dataset.playing === 'false') {
    audioElement.play();
    this.dataset.playing = 'true';

    // if track is playing pause it
  } else if (this.dataset.playing === 'true') {
    audioElement.pause();
    this.dataset.playing = 'false';
  }
  bgm.classList.toggle('pause');
});

audioElement.addEventListener(
  'ended',
  () => {
    bgm.dataset.playing = 'false';
    bgm.classList.toggle('pause');
  },
  false
);

//whether I should only add one gain node?
var gainNode = audioContext.createGain();

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
//gainNode.gain.setValueAtTime(1, audioContext.currentTime);

//linearRampMinus.onclick = function() {
//gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
//}

//create an environment for the file to be in the buffer
// first we need to create a stage
var stage = new Konva.Stage({
  container: 'box', // id of container <div>
  width: window.innerWidth,
  height: window.innerHeight + 1000,
});
// then create layer
var layer = new Konva.Layer();
const w = window.innerWidth;

//testing the fourier shit
const analyserNode = audioContext.createAnalyser();
const waveformCanvas = document.querySelector('#waveform');
const wfCanvasContext = waveformCanvas.getContext('2d');
waveformCanvas.width = w;

const analyserNode2 = audioContext.createAnalyser();
const waveformCanvas2 = document.querySelector('#waveform2');
const wfCanvasContext2 = waveformCanvas2.getContext('2d');
waveformCanvas2.width = w;

//define functions
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

var id = null;
var id2 = null;
var continueAnimating = true;
var continueAnimating2 = true;
//fourier shit
function draw() {
  if (continueAnimating) {
    id = requestAnimationFrame(draw);
  }

  // only animate while playing (reduces CPU load)

  // connect the analyser to the destination
  //fourier shit
  analyserNode.minDecibels = -150;
  analyserNode.fftSize = 1024;
  let bufferLength = analyserNode.frequencyBinCount;
  const WIDTH = w;
  const HEIGHT = 200;
  let waveformArray = new Uint8Array(bufferLength);

  // time domain visualization
  analyserNode.getByteTimeDomainData(waveformArray);
  wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
  wfCanvasContext.lineWidth = 2;
  wfCanvasContext.strokeStyle = '#fff';
  wfCanvasContext.beginPath();
  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;
  for (let i = 0; i < bufferLength; i++) {
    const v = waveformArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;
    if (i === 0) {
      wfCanvasContext.moveTo(x, y);
    } else {
      wfCanvasContext.lineTo(x, y);
    }
    x += sliceWidth;
  }
  wfCanvasContext.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
  wfCanvasContext.stroke();
}

function draw2() {
  if (continueAnimating2) {
    id2 = requestAnimationFrame(draw2);
  }

  // only animate while playing (reduces CPU load)

  // connect the analyser to the destination
  //fourier shit
  analyserNode2.minDecibels = -150;
  analyserNode2.fftSize = 1024;
  let bufferLength = analyserNode.frequencyBinCount;
  const WIDTH = w;
  const HEIGHT = 200;
  let waveformArray = new Uint8Array(bufferLength);

  // time domain visualization
  analyserNode2.getByteTimeDomainData(waveformArray);
  wfCanvasContext2.clearRect(0, 0, WIDTH, HEIGHT);
  wfCanvasContext2.lineWidth = 2;
  wfCanvasContext2.strokeStyle = '#fff';
  wfCanvasContext2.beginPath();
  const sliceWidth = (WIDTH * 1.0) / bufferLength;
  let x = 0;
  for (let i = 0; i < bufferLength; i++) {
    const v = waveformArray[i] / 128.0;
    const y = (v * HEIGHT) / 2;
    if (i === 0) {
      wfCanvasContext2.moveTo(x, y);
    } else {
      wfCanvasContext2.lineTo(x, y);
    }
    x += sliceWidth;
  }
  wfCanvasContext2.lineTo(waveformCanvas2.width, waveformCanvas2.height / 2);
  wfCanvasContext2.stroke();
}

//loading the sounds into a folder
var soundFolder = [];
var sources = [];
var loopfolder = [];
var floor = [];
var time = [];

for (let i = 0; i < sounds.length; i++) {
  var filename = sounds[i]['path'];
  floor[i] = sounds[i]['level'];
  time[i] = sounds[i]['time'];
  console.log(filename);
  fetch(filename)
    .then((data) => data.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then((decodeAudio) => {
      soundFolder[i] = decodeAudio;
    });
  //soundFolder[i] = audio;
}
const WIDTH = w;
const HEIGHT = 200;
window.cancelAnimationFrame || window.mozCancelAnimationFrame;

let playSound;
let playSound2;

function stopAll() {
  for (let i = 0; i < sources.length; i++) {
    //id = requestAnimationFrame(draw);
    //cancelAnimationFrame(id);
    // To turn off animation
    if (sources[i]) sources[i].stop();
  }
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);

  playSound2.loop = false;
  continueAnimating = false;
  //wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
  setTimeout(function () {
    wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
  }, 50);
  setTimeout(function () {
    playSound2.stop();
    playSound.stop();
  }, 1000);
}

/*function scheduler(audioStart, index) {
  audio = context.createBufferSource();
  sources[index] = audio;
  audio.buffer = audioSamples[index]; //array with all the loaded audio
  audio.connect(context.destination);
  audio.start(audioStart + audio.buffer.duration * index);
}*/
//control the play and pause
//for changing sound, can use (e){e.target.fill or something, [this] also works I guess?}

function playback(index) {
  playSound = audioContext.createBufferSource();
  sources[index] = playSound;
  playSound.buffer = soundFolder[index];
  //playSound.buffer = audio;
  continueAnimating2 = true;
  playSound.connect(gainNode);
  gainNode.connect(analyserNode2);
  analyserNode2.connect(audioContext.destination);
  gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 1);
  //analyserNode.connect(audioContext.destination);
  playSound.start(audioContext.currentTime);
  layer.draw();
  draw2();
  //console.log(playSound.isPlaying);
}

function loop(index) {
  playSound2 = audioContext.createBufferSource();
  loopfolder[index] = playSound2;
  playSound2.buffer = soundFolder[index];
  playSound2.connect(gainNode);
  gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 1);
  gainNode.connect(analyserNode);
  analyserNode.connect(audioContext.destination);
  playSound2.start(0);
  playSound2.loop = true;
  continueAnimating = true;
  draw();
}

function pause() {
  playSound.stop();
  continueAnimating2 = false;
  setTimeout(function () {
    wfCanvasContext2.clearRect(0, 0, WIDTH, HEIGHT);
  }, 50);
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', stopAll);
// draw the image
//function load() {
for (let i = 0; i < 26; i++) {
  // create our shape
  let a = time[i];
  let b = floor[i];
  console.log(a);
  console.log(b);
  var circle = new Konva.Circle({
    x: a * 150 - 1450,
    y: b * 400 - 300 + random(0, 500),
    radius: random(30, 40),
    fill: 'white',
    opacity: 1,
    draggable: true,
    globalCompositeOperation: 'saturation',
  });

  //call function vs call function + parameter
  circle.on('mouseover', function () {
    playback(i);
    var fill = 'black';
    this.fill(fill);
    layer.draw();
  });
  circle.on('mouseout', function () {
    pause();
    var fill = 'Azure';
    this.fill(fill);
    layer.draw();
  });
  circle.on('click', function () {
    loop(i);
  });

  // add the shape to the layer
  layer.add(circle);
  layer.draw();
  stage.add(layer);

  //circle.to({ opacity: 1 });
}

//}

//const btn2 = document.querySelector('#load');
//btn2.addEventListener('click', load);

/*
to-do:

Filter the location from soundjs and forming it into different arrays

Clicking on the region:

clear the stage

decode the sounds and put it into the array

load the circles 
*/
