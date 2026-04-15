 /* 🍔 MENÚ MOBILE PREMIUM */
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menu-overlay");

    if (toggle && menu && overlay) {

        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");

            // cambiar icono
            toggle.textContent = menu.classList.contains("active") ? "✖" : "☰";
        });

        // cerrar tocando overlay
        overlay.addEventListener("click", () => {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            toggle.textContent = "☰";
        });
    };