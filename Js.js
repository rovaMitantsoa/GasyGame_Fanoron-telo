document.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowUp":
        if (pointY > 50) {
          pointY -= 10;
        }
        break;
      case "ArrowDown":
        if (pointY < 150) {
          pointY += 10;
        }
        break;
      case "ArrowLeft":
        if (pointX > 50) {
          pointX -= 10;
        }
        break;
      case "ArrowRight":
        if (pointX < 150) {
          pointX += 10;
        }
        break;
    }
  
    // Effacer le canvas et redessiner le carré et le point
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(50, 50, 100, 100);
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(pointX, pointY, 5, 0, 2 * Math.PI);
    ctx.fill();
  });