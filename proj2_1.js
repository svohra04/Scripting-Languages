var c = document.getElementById("myCanvas");
var canvas = c.getContext("2d");

$(document).ready(function(){
    var x = c.width/2;
    var y = c.height/2;
    var len = 120;
    var ang = 0;
    var level = 0;
    
    drawBranch(x,y,ang,len,level);
    drawBranch(x,y,90,len,level);
    drawBranch(x,y,-90,len,level);
    drawBranch(x,y,180,len,level);
    drawBranch(x,y,45,len,level);
    drawBranch(x,y,-45,len,level);
    drawBranch(x,y,-135,len,level);
    drawBranch(x,y,135,len,level);
    drawBranch(x,y,22.5,len,level);
    drawBranch(x,y,-22.5,len,level);
    drawBranch(x,y,-67.5,len,level);
    drawBranch(x,y,67.5,len,level);
    drawBranch(x,y,-112.5,len,level);
    drawBranch(x,y,112.5,len,level);
    drawBranch(x,y,-157.5,len,level);
    drawBranch(x,y,157.5,len,level);

});

function drawBranch(x, y, ang, len, level) {
    var origAng = ang;
    maxLevels = 11;
    if(level < maxLevels){

        var rad = (ang/180)*Math.PI;
        var newx = x + (len * Math.cos(rad));
        var newy = y + (len * Math.sin(rad));
        canvas.beginPath();
        canvas.translate(canvas.width/2, canvas.height/2);
        canvas.moveTo(x,y);
        canvas.lineTo(newx,newy);
        canvas.lineWidth = 1;
        if (origAng == 45 || origAng == -135 || origAng == -45 || origAng == 135){
            canvas.strokeStyle = "#ff0000";
            canvas.lineWidth = 0.25;
        }
        if (origAng == (22.5 || -22.5 || 67.5 || -67.5 || -112.5 || 112.5 || 157.5 || -157.5)){
            canvas.strokeStyle = "grey";
            canvas.lineWidth = 0.10;
        }
        canvas.closePath();
        canvas.stroke();

        ang = (rad*180) / Math.PI;
        
        drawBranch(newx,newy,ang,len/2,level+1);
        drawBranch(newx,newy,ang+90,len/2,level+1);
        drawBranch(newx,newy,ang-90,len/2,level+1);
    }

}
