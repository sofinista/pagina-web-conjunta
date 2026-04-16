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

const track = document.getElementById("ba-track");

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("active");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
    isDown = false;
});

track.addEventListener("mouseup", () => {
    isDown = false;
});

track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidad
    track.scrollLeft = scrollLeft - walk;
});
/* ============================================================
   KALON — kalon.js
   Hero slider + drag-to-scroll en ba-track
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── HERO SLIDER ─────────────────────────────────────
    const slides  = document.querySelectorAll(".hero-slider .slide");
    const dots    = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (slides.length > 1) {
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

        function resetAutoplay() {
            clearInterval(autoplay);
            startAutoplay();
        }

        if (nextBtn) nextBtn.addEventListener("click", () => { goTo(current + 1); resetAutoplay(); });
        if (prevBtn) prevBtn.addEventListener("click", () => { goTo(current - 1); resetAutoplay(); });

        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                goTo(parseInt(dot.dataset.index));
                resetAutoplay();
            });
        });

        // Swipe táctil
        const sliderEl = document.querySelector(".hero-slider");
        if (sliderEl) {
            let touchStartX = 0;
            sliderEl.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
            sliderEl.addEventListener("touchend", e => {
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 45) { goTo(diff > 0 ? current + 1 : current - 1); resetAutoplay(); }
            }, { passive: true });
        }

        startAutoplay();
    }

    // ── DRAG SCROLL — ba-track ──────────────────────────
    const track = document.getElementById("ba-track");
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener("mousedown", e => {
            isDown = true;
            track.classList.add("grabbing");
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener("mouseleave", () => { isDown = false; track.classList.remove("grabbing"); });
        track.addEventListener("mouseup",    () => { isDown = false; track.classList.remove("grabbing"); });

        track.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.2;
            track.scrollLeft = scrollLeft - walk;
        });
    }

});