"use strict";
const up = document.querySelectorAll(".up");
const down = document.querySelectorAll(".down");

const ham = document.querySelector(".ham");
const navy = document.querySelector(".navy");
const close = document.querySelector(".close");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

const tab = document.querySelectorAll(".tab");
const part = document.querySelectorAll(".part2");
const tab1 = document.querySelector(".tab1");
const booky = document.querySelector(".booky");

const contact=document.querySelector('.contact')
const input=document.querySelector('input')
const write=document.querySelector('.write')
const error=document.querySelector('.error')


let a, p, q;
up.forEach((n) =>
  n.addEventListener("click", function (e) {
    if (a) a.add("hidden");
    if (p) p.add("hidden");
    if (q) q.remove("hidden");

    e.target.previousElementSibling.children[1].classList.remove("hidden");
    a = e.target.previousElementSibling.children[1].classList;
    e.target.classList.add("hidden");
    e.target.nextElementSibling.classList.remove("hidden");
    p = e.target.nextElementSibling.classList;
    q = e.target.classList;
  })
);

down.forEach((n) =>
  n.addEventListener("click", function (e) {
    // console.log(e.target.parentElement.previousElementSibling.classList);
    if (a) a.add("hidden");
    if (e.target.parentElement.classList.contains("down")) {
      e.target.parentElement.classList.add("hidden");
      e.target.parentElement.previousElementSibling.classList.remove("hidden");
    }
  })
);

ham.addEventListener("click", function (e) {
  e.preventDefault();
  navy.classList.toggle("hidden");
  nav.classList.add("hidden");
  body.style.overflow = "hidden";
  // console.log(navy.classList);
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  navy.classList.add("hidden");
  nav.classList.remove("hidden");
  body.style.overflow = "scroll";
});
let b = tab1.classList;
let prev = booky.getAttribute("data-type");

tab.forEach((n) =>
  n.addEventListener("click", function (e) {
    let y = e.target.getAttribute("data-type");
    if (!e.target.classList.contains("tab-active")) {
      // console.log(y);
      handle(y);
      e.target.classList.add("tab-active");
      b.remove("tab-active");
      b = e.target.classList;
    }
  })
);

function handle(curr) {
  part.forEach((n) => {
    if (curr === n.getAttribute("data-type")) {
      document
        .querySelector(`.part2[data-type="${prev}"]`)
        .classList.add("hidden");
      document
        .querySelector(`.part2[data-type="${curr}"]`)
        .classList.remove("hidden");
      prev = curr;
      // console.log(prev);
    }
  });
}


contact.addEventListener("click", function (e) {
  const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!String(input.value).toLowerCase().match(re)) {
    error.classList.remove("hidden");
    write.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    write.classList.add("hidden");
  }
});