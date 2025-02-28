document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const flexContainer = document.querySelector(".flex-container");
  const flexDirection = document.getElementById("flex-direction");
  const justifyContent = document.getElementById("justify-content");
  const alignItems = document.getElementById("align-items");
  const flexWrap = document.getElementById("flex-wrap");
  const alignContent = document.getElementById("align-content");

  // Function to update styles dynamically
  function updateFlexbox() {
      flexContainer.style.flexDirection = flexDirection.value;
      flexContainer.style.justifyContent = justifyContent.value;
      flexContainer.style.alignItems = alignItems.value;
      flexContainer.style.flexWrap = flexWrap.value;
      flexContainer.style.alignContent = alignContent.value;
  }

  // Add event listeners to all controls
  flexDirection.addEventListener("change", updateFlexbox);
  justifyContent.addEventListener("change", updateFlexbox);
  alignItems.addEventListener("change", updateFlexbox);
  flexWrap.addEventListener("change", updateFlexbox);
  alignContent.addEventListener("change", updateFlexbox);

  // Initialize with default values
  updateFlexbox();
});
