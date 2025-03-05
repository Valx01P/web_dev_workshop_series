document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const gridContainer = document.querySelector(".grid-container");
  const gridColumns = document.getElementById("grid-columns");
  const gridRows = document.getElementById("grid-rows");
  const gridGap = document.getElementById("grid-gap");
  const justifyItems = document.getElementById("justify-items");
  const alignItems = document.getElementById("align-items");
  const justifyContent = document.getElementById("justify-content");
  const alignContent = document.getElementById("align-content");

  // Function to update styles dynamically
  function updateGrid() {
      gridContainer.style.gridTemplateColumns = gridColumns.value;
      gridContainer.style.gridTemplateRows = gridRows.value;
      gridContainer.style.gap = gridGap.value;
      gridContainer.style.justifyItems = justifyItems.value;
      gridContainer.style.alignItems = alignItems.value;
      gridContainer.style.justifyContent = justifyContent.value;
      gridContainer.style.alignContent = alignContent.value;
  }

  // Add event listeners to all controls
  gridColumns.addEventListener("change", updateGrid);
  gridRows.addEventListener("change", updateGrid);
  gridGap.addEventListener("change", updateGrid);
  justifyItems.addEventListener("change", updateGrid);
  alignItems.addEventListener("change", updateGrid);
  justifyContent.addEventListener("change", updateGrid);
  alignContent.addEventListener("change", updateGrid);

  // Initialize with default values
  updateGrid();
});
