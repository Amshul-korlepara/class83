var last_x1, last_y1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "black";
width = 2;

canvas.addEventListener("touchstart", my_touchstart);
    
function my_touchstart(e)
{
       color = document.getElementById("color1").value;
    width = document.getElementById("width1").value;
  last_x1=e.touches[0].clientX-canvas.offsetLeft;
  last_y1=e.touches[0].clientY-canvas.offsetTop;
}

    canvas.addEventListener("touchmove",mytouchmove);
    function mytouchmove(e){
    current_position_of_mouse_X=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.touches[0].clientY-canvas.offsetTop;
          ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x1, last_y1);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
        
        last_y1=current_position_of_mouse_Y
        last_x1=current_position_of_mouse_X
        
    }

    function erase() {
      ctx.beginPath();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.stroke();
    }
