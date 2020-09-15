// JavaScript Document

var navigatie   = document.querySelector('header > nav')
var menuKnop    = document.querySelector('header > button');

var open = function () {
  navigatie.classList.toggle('open')
}

menuKnop.addEventListener('click', open);
