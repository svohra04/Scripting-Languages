var tID; 

function stopAnimate() {
  clearInterval(tID);
} 

function animateScriptDown() {

  var positionD = 0; 
  const interval = 1000; 
  const diff = 240; 
  
  tID = setInterval(() => {

    document.getElementById("image").style.width = "240px";
    document.getElementById("image").style.backgroundPosition =
      `-${positionD}px 0px`;
    
    
    if (positionD < 720) {
      positionD = positionD + diff;
    }
    
    else {
      positionD = 0;
    }
    
    
  }, interval); 
} 

function animateScriptUp() {

  var positionU = 1020; 
  const interval = 1000; 
  const diff = 240; 
  
  tID = setInterval(() => {

    document.getElementById("image").style.width = "240px";  
    document.getElementById("image").style.backgroundPosition =
      `-${positionU}px 0px`;
    
    
    if (positionU < 1700) {
      positionU = positionU + diff;
    }
    
    else {
      positionU = 1020;
    }
    
    
  }, interval); 
} 

function animateScriptLeft() {

    var positionUx = 0; 
    const interval = 1500; 
    const diff = 180; 
    
    tID = setInterval(() => {
    
      document.getElementById("image").style.width = "180px";
      document.getElementById("image").style.backgroundPosition =
        `-${positionUx}px 370px`;

        
      if (positionUx < 540) {
        positionUx = positionUx + diff;
      }

      else {
        positionUx = 0;
      }

      
    }, interval);
  } 

function animateScriptRight() {

    var positionUx = 0; 
    const interval = 1500; 
    const diff = 180; 

    tID = setInterval(() => {

        document.getElementById("image").style.width = "180px";
        document.getElementById("image").style.backgroundPosition =
        `-${positionUx}px 690px`;
        
        if (positionUx < 540) {
        positionUx = positionUx + diff;
        }
        
        else {
        positionUx = 0;
        }
        
        
    }, interval); 
} 
 

document.addEventListener('keydown', function(event) { 
    if (event.keyCode == 39 || event.key == "d") {
        //right
        stopAnimate();
        animateScriptRight();
      }
      else if (event.keyCode == 37 || event.key == "a") {
        //left
        stopAnimate();
        animateScriptLeft();
      }
      else if (event.keyCode == 38 || event.key == "w") {
        //up
        stopAnimate();
        animateScriptUp();
      }
      else if (event.keyCode == 40 || event.key == "s") {
        //down
        stopAnimate();
        animateScriptDown();
      }
})