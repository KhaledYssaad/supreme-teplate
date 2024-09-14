// header start

let header = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY >= window.innerHeight) {
    header.style.background = "var(--black-transparent)";
  } else {
    header.style.background = "transparent";
  }
};

// header end

//landing start

let slider = Array.from(document.querySelectorAll(".image-slider img")),
  slideBuls = slider.length,
  currentSlide = 1,
  nextButton = document.querySelector("#next"),
  prevButton = document.querySelector("#prev"),
  paginationBuls = document.createElement("ul"),
  landing = document.querySelector(".landing");
paginationBuls.classList.add("spans");
landing.appendChild(paginationBuls);
for (let i = 1; i <= slideBuls; i++) {
  paginationElem = document.createElement("li");
  paginationElem.style.cssText = `display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;`;
  paginationElem.setAttribute("data-index", i);
  paginationBuls.appendChild(paginationElem);
}
function checker() {
  // Remove 'active' class from all slider images
  slider.forEach((img) => img.classList.remove("active"));

  // Add 'active' class to the current slide
  slider[currentSlide - 1].classList.add("active");

  // Get all pagination bullets
  let bullets = Array.from(document.querySelectorAll(".spans li"));

  // Remove 'active' class and reset styles for all bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
    bullet.style.backgroundColor = "transparent";
    bullet.style.border = "1px solid white"; // Reset border
  });

  // Add 'active' class and apply styles to the current bullet
  let currentBullet = bullets[currentSlide - 1];
  currentBullet.classList.add("active");
  currentBullet.style.backgroundColor = "var(--main-color)";
  currentBullet.style.borderColor = "white";
}

prevButton.onclick = function () {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slideBuls;
  }
  checker();
};

nextButton.onclick = function () {
  currentSlide++;
  if (currentSlide > slideBuls) {
    currentSlide = 1;
  }
  checker();
};

// Touch swipe support
let startX, endX;

landing.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

landing.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    nextButton.click(); // Swipe left
  } else if (startX < endX - 50) {
    prevButton.click(); // Swipe right
  }
});
//initial check after reloading page
checker();

//landing end
