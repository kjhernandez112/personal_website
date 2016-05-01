var canvas = documet.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.moveTo(100, 60);
ctx.lineTo(130, 30);
ctx.lineTo(160, 60);
ctx.lineTo(160, 100);
ctx.lineTo(100, 100);
ctx.fill();

