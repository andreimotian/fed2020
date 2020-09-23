//jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true//

// JavaScript Document

var navigatie = document.querySelector('header > nav');
var menuKnop = document.querySelector('header > button');

var open = function() {
    navigatie.classList.toggle('open');
    menuKnop.classList.toggle('animated');

}

menuKnop.addEventListener('click', open);