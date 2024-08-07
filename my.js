function toggleMenu() {
  const menu = documents.querySelector(".menu-links");
  const icon = documents.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
