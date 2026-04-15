document.addEventListener("DOMContentLoaded", () => {

    // 🎯 SLIDER
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    if (next && prev) {
        next.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });

        prev.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });

        setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, 5000);
    }

    // 🧭 MENÚ (LO QUE TE FALTABA)
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");

            toggle.textContent = menu.classList.contains("active") ? "✖" : "☰";
        });

        console.log("✅ menú kalon funcionando");
    } else {
        console.log("❌ menú no encontrado");
    }

});