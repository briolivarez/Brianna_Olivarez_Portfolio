document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("theme-toggle");
  
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleCheckbox.checked = true;
  }
  
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });
});
