document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-resume");
    const resumeContent = document.getElementById("resume-content");
    const sectionHeaders = document.querySelectorAll(".section-header");
  
    // Toggle entire resume visibility
    toggleButton.addEventListener("click", function() {
      if (resumeContent.style.display === "none" || resumeContent.style.display === "") {
        resumeContent.style.display = "block";
      } else {
        resumeContent.style.display = "none";
      }
    });
  
    // Toggle individual sections
    sectionHeaders.forEach(header => {
      const sectionId = header.dataset.section;
      const sectionContent = document.getElementById(sectionId);
  
      // Initially hide the sections
      sectionContent.style.display = "none";
  
      // Add click event listener to toggle visibility
      header.addEventListener("click", function() {
        if (sectionContent.style.display === "none" || sectionContent.style.display === "") {
          sectionContent.style.display = "block";
        } else {
          sectionContent.style.display = "none";
        }
      });
    });
  });
  