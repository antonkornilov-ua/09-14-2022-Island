const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth:300,
        modifier:2,
        slideshows: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
});