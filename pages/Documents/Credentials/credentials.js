// JavaScript for toggle functionality
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
  