const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll("animated-bg-text");

setTimeout(() => getData(), 2500);

function getData() {
  header.innerHTML = '<img src="../assets/4.png" alt="rocket">';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, rerum?";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/23.jpg">';
  name.innerHTML = "Constantine";
  date.innerHTML = "Sep 13, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
