var colors = ["white","lightgray","lightblue", "lightgreen", "lightyellow", "lightpink"];
var currentColor;

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("white");
}

function draw()
{
  if (mouseIsPressed)
   {
    if (mouseX < 51) {
      backgroundChange();
    }
  }
  var  y = 0;
  for (i = 0; i < colors.length; i++){
      var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
      currentColor.appear();
      y = y + 50;
  }
}

function backgroundChange() {
  
    if(mouseY > 0 && mouseY < 50) {
      background("white");

       if (mouseY > 50 && mouseY < 100) {
        background("red");
      }

        
       if (mouseY > 100 && mouseY < 150) {
        background("blue");
      }

        if (mouseY > 100 && mouseY < 150) {
          background("blue");
        }
          
      
    if (mouseY > 150 && mouseY < 200) {
      background("yellow");
    }
    if (mouseY > 200 && mouseY < 250) {
      background("pink");
    } 
    if (mouseY > 250 && mouseY < 300) {
      background("grey");
    }   
}  
    
}

    

