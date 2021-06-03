var Mouse ="empty";
var MouseX = "";
var MouseY = "";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var thickness = 3;
canvas.addEventListener("mousedown", MouseDownFN);
function MouseDownFN(e){
Mouse = "mouseDown";
}

canvas.addEventListener("mouseleave", MouseLeaveFN);
function MouseLeaveFN(e){

Mouse = "mouseLeave";
}
canvas.addEventListener("mouseup", MouseUpFN);
function MouseUpFN(e){
Mouse = "mouseUp";
}

canvas.addEventListener("mousemove", MouseMoveFN);
function MouseMoveFN(e){
    MouseX = e.clientX - canvas.offsetLeft;
    MouseY = e.clientY - canvas.offsetTop;
    if (Mouse == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = thickness;

console.log("Last position of X and Y" + LastPosX + "," + LastPosY);
ctx.moveTo(LastPosX, LastPosY);
console.log("Current Position" + MouseX + "," + MouseY);

ctx.lineTo(MouseX, MouseY);
ctx.stroke();
    }
LastPosX = MouseX;
LastPosY = MouseY;

}