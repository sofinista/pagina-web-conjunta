/* ============================================================
   KALON — kalon.js
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── HERO SLIDER ────────────────────────────────────
    const slides = document.querySelectorAll(".hero-slider .slide");
    const dots   = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (!slides.length) return;

    let current = 0;
    let autoplay;

    function goTo(index) {
        slides[current].classList.remove("active");
        if (dots[current]) dots[current].classList.remove("active");

        current = (index + slides.length) % slides.length;

        slides[current].classList.add("active");
        if (dots[current]) dots[current].classList.add("active");
    }

    function startAutoplay() {
        autoplay = setInterval(() => goTo(current + 1), 5500);
    }

    function stopAutoplay() {
        clearInterval(autoplay);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goTo(current + 1);
            stopAutoplay();
            startAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goTo(current - 1);
            stopAutoplay();
            startAutoplay();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            goTo(parseInt(dot.dataset.index));
            stopAutoplay();
            startAutoplay();
        });
    });

    // Touch/swipe soporte
    let touchStartX = 0;
    const slider = document.querySelector(".hero-slider");

    if (slider) {
        slider.addEventListener("touchstart", e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        slider.addEventListener("touchend", e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                goTo(diff > 0 ? current + 1 : current - 1);
                stopAutoplay();
                startAutoplay();
            }
        }, { passive: true });
    }

    startAutoplay();

});