document.addEventListener("DOMContentLoaded", function() {
    const xPositionBox = document.getElementById("xPositionBox");
    const yPositionBox = document.getElementById("yPositionBox");
  
    // Function to update box positions based on pointer coordinates
    function updateBoxPositions(event) {
      const x = event.clientX;
      const y = event.clientY;
  
      // Update box positions
      xPositionBox.innerText = `${x}`;
      yPositionBox.innerText = `${y}`;
    }
  
    // Add event listener to update positions on mousemove
    document.addEventListener("mousemove", updateBoxPositions);
  });
  