// ----- search bar hide / show animation -----
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.searchbar');
let formBtn = document.querySelector('#user-btn');
let loginForm = document.querySelector('.login');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navmenu');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');

});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// ----- jquery script -----
$(document).ready(function() {

    // ----- preloader -----
    $(window).load(function() {
        $(".preloader").fadeOut(1000);
    });

    // ----- vegas script -----
    $("body").vegas({
        delay: 7500,
        slides: [
            { src: "../images/img_01.jpg" },
            { src: "../images/img_02.jpg" },
            { src: "../images/img_03.jpg" }
        ],
        timer: true,
        transition: ["fade", "blur"],
        animation: ["kenburnsUp", "kenburnsLeft", "kenburnsDown", "kenburnsRight"]
    });

});

// ----- review swiper -----
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});