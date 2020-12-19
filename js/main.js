$(document).ready(function() {
    $("#lightgallery").lightGallery(); 
});
$(document).ready(function() {
    $("#lightgallery2").lightGallery(); 
});


const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const socialIcons = document.getElementById('social-icons');

hamburger.addEventListener('click', () => { 
    mainNav.classList.toggle('show');
    socialIcons.classList.toggle('show');
});
