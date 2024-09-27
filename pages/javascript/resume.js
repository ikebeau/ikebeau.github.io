document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-resume");
    const resumeContent = document.getElementById("resume-content");
  
    toggleButton.addEventListener("click", function() {
      if (resumeContent.style.display === "none" || resumeContent.style.display === "") {
        resumeContent.style.display = "block";
      } else {
        resumeContent.style.display = "none";
      }
    });
  });
  