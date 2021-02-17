//adding a snap item trial 
/*
var s = Snap(100,100); 
//lets draw 2 rects at position 100,100 and then reposition them

var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });
var t = t.clone();

arrange.appendChild(s);
*/
//create a shape
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const scripture = document.querySelector('audio');

//trial listening box
playSound = function(){
    scripture.play();
}

var mySvg = Snap(width, 400);


var clickCallback = function(event) {
    this.attr({ opacity: 0.6 });
    playSound();
};

var myRect = mySvg.rect(100,100,50,50);
myRect.attr({ fill: 'purple' });
myRect.click(clickCallback);

var myRect2 = mySvg.rect(200,100,50,50);
myRect2.attr({ fill: 'yellow' });
myRect2.click(clickCallback);

var myRect3 = mySvg.rect(300,100,50,50);
myRect3.attr({ fill: 'green' });
myRect3.click(clickCallback);

var myRect4 = mySvg.rect(400,100,50,50);
myRect4.attr({ fill: 'red' });
myRect4.click(clickCallback);

var myRect5 = mySvg.rect(500,100,50,50);
myRect5.attr({ fill: 'pink' });
myRect5.click(clickCallback);

var myRect6 = mySvg.rect(600,100,50,50);
myRect6.attr({ fill: 'blue' });
myRect6.click(clickCallback);

