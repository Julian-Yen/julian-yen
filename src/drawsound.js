const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
//create an environment for the file to be in the buffer

// first we need to create a stage
var stage = new Konva.Stage({
  container: 'box', // id of container <div>
  width: window.innerWidth,
  height: window.innerHeight,
});
// then create layer
var layer = new Konva.Layer();
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
for (let i = 0; i < sounds.length; i++) {
  // create our shape
  var circle = new Konva.Circle({
    x: random(50, 500),
    y: stage.height() / 2 + i * random(100, 120),
    radius: random(30, 40),
    fill: 'black',
  });

  var filename = sounds[i]['path'];
  console.log(filename);
  let audio;
  let playSound;

  function playback() {
    playSound = audioContext.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(audioContext.destination);
    playSound.start(audioContext.currentTime);
  }

  function pause() {
    playSound.stop();
  }

  fetch(filename)
    .then((data) => data.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then((decodeAudio) => {
      audio = decodeAudio;
    });

  circle.on('mouseover', playback);
  circle.on('mouseout', pause);
  //circle.on("mouseout", function () {
  //playSound.stop(audioContext.currentTime);
  //});
  // add the shape to the layer
  layer.add(circle);
}

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
