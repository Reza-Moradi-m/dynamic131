const menuButton = document.querySelector("#menu-btn");

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector("nav ul");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  const clickedImage = event.target;
  const imageName = clickedImage.src.split("/").pop().split(".")[0];
  const fullImagePath = `images/${imageName}-full.jpeg`;
  const viewerHTML = viewerTemplate(fullImagePath, clickedImage.alt);
  document.body.insertAdjacentHTML("afterbegin", viewerHTML);
  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);

}

// Add the image with name "pic1.webp"
const image1 = document.createElement("img");
image1.src = "pic1.jpeg";
image1.alt = "nature picture 1";
image1.style.display = "none"; // Hide the image initially
document.body.appendChild(image1);

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
