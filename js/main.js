var swiper = new Swiper(".stock__swiper", {
    effect: "flip",
    grabCursor: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//burger


document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('header-open')
})


//animation 
