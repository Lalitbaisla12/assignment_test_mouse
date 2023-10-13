document.addEventListener("DOMContentLoaded", function() {
    const xPositionBox = document.getElementById("xPositionBox");
    const yPositionBox = document.getElementById("yPositionBox");
    
    function updateBoxPositions(event) {
      const x = event.clientX;
      const y = event.clientY;
  

      xPositionBox.innerText = `${x}`;
      yPositionBox.innerText = `${y}`;
    }
  

    document.addEventListener("mousemove", updateBoxPositions);
  });
  