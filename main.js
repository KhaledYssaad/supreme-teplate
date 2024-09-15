// header start

let header = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY >= window.innerHeight) {
    header.style.background = "#0f6d90";
  } else {
    header.style.background = "transparent";
  }
};

//nav bar

let nav = document.querySelector(".links ul"),
  menuButt = document.querySelector(".menu");

menuButt.onclick = function (event) {
  if (nav.style.opacity === "1") {
    nav.style.cssText = `
    opacity: 0;
    display: none;`;
  } else {
    nav.style.cssText = `
    opacity: 1;
    display: flex;`;
  }
};

// Hide the menuButt if clicking outside of it
document.addEventListener("click", function (event) {
  if (!menuButt.contains(event.target) && !nav.contains(event.target)) {
    nav.style.cssText = `
    opacity: 0;
    display: none;`;
  }
});

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

//categories start

let categories = Array.from(document.querySelectorAll(".categories span")),
  boxes = document.querySelectorAll(".pictures .box");
console.log(boxes.length);
categories.forEach((category) => {
  category.addEventListener("click", function () {
    categories.forEach((cat) => {
      cat.classList.remove("active");
    });
    this.classList.add("active");
    boxes.forEach((box) => {
      if (
        box.classList.contains(category.innerHTML) ||
        category.innerHTML === "All"
      ) {
        box.style.display = "block";
      } else box.style.display = "none";
    });
  });
});

//categories end
