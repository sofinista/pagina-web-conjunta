window.addEventListener("load", () => {
    const intro = document.getElementById("intro");

    setTimeout(() => {
        intro.style.opacity = "0";
    }, 2000); // ⏱️ menos tiempo visible

    setTimeout(() => {
        intro.style.display = "none";
    }, 2400); // ⏱️ desaparece más rápido
});


// 🧭 NAVBAR SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


console.log("menu funcionando");
