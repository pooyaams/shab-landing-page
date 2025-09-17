const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 5
        },
        768: {
            spaceBetween: 6
        },
        1024: {
            spaceBetween: 7
        },
        1280: {
            spaceBetween: 8
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 5
        },
        768: {
            spaceBetween: 6
        },
        1024: {
            spaceBetween: 7
        },
        1280: {
            spaceBetween: 8
        }
    }
});