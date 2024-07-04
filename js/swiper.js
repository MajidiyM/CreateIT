document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // For vertical sliding
        slidesPerView: 1, // Show one slide at a time
        spaceBetween: 30, // Space between slides in pixels
        mousewheel: true, // Enable mousewheel control
        pagination: {
            el: '.swiper-pagination', // CSS selector for pagination container
            clickable: true, // Make pagination bullets clickable
        },
    });
});