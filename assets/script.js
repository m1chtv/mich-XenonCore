// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const follower = document.querySelector(".cursor-follower");
let mouseX = 0,
  mouseY = 0;
let followerX = 0,
  followerY = 0;
const speed = 0.05;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animate() {
  followerX += (mouseX - followerX) * speed;
  followerY += (mouseY - followerY) * speed;
  follower.style.transform = `translate(${followerX - 10}px, ${
    followerY - 10
  }px)`;
  requestAnimationFrame(animate);
}
animate();
