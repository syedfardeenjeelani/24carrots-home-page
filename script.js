window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 500) {
    header.classList.remove("fixed");
  } else {
    header.classList.add("fixed");
  }
});
