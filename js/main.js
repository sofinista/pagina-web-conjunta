/* ============================================================
   CASA AURORA — main.js
   Shared across all pages
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── NAVBAR SCROLL ──────────────────────────────────
    const navbar = document.getElementById("navbar") || document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 60);
        }, { passive: true });
    }

    // ── MENÚ MOBILE ────────────────────────────────────
    const toggle   = document.getElementById("menu-toggle");
    const menu     = document.getElementById("menu");
    const overlay  = document.getElementById("menu-overlay");

    function openMenu() {
        menu.classList.add("active");
        toggle.classList.add("open");
        if (overlay) overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        menu.classList.remove("active");
        toggle.classList.remove("open");
        if (overlay) overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.contains("active") ? closeMenu() : openMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    // Cerrar menu al hacer click en un link
    if (menu) {
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    // ── SMOOTH SCROLL ──────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // ── SCROLL REVEAL ──────────────────────────────────
    const revealElements = document.querySelectorAll(".card, .exp-card, .gallery-item, .section-header");

    if ("IntersectionObserver" in window && revealElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay ? entry.target.dataset.delay * 100 : 0;
                    setTimeout(() => {
                        entry.target.classList.add("revealed");
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(24px)";
            el.style.transition = "opacity 0.7s cubic-bezier(0.76, 0, 0.24, 1), transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)";
            observer.observe(el);
        });

        // Inyectar clase revealed
        const style = document.createElement("style");
        style.textContent = ".revealed { opacity: 1 !important; transform: translateY(0) !important; }";
        document.head.appendChild(style);
    }

});
/* ============================================================
   KALON — main.js  (compartido por todas las páginas)
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── NAVBAR SCROLL ──────────────────────────────────
    const navbar = document.getElementById("navbar") || document.querySelector(".navbar");

    if (navbar) {
        const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 55);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // estado inicial
    }

    // ── MENÚ MOBILE ─────────────────────────────────────
    const toggle  = document.getElementById("menu-toggle");
    const menu    = document.getElementById("menu");
    const overlay = document.getElementById("menu-overlay");

    function openMenu() {
        menu?.classList.add("active");
        toggle?.classList.add("open");
        overlay?.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        menu?.classList.remove("active");
        toggle?.classList.remove("open");
        overlay?.classList.remove("active");
        document.body.style.overflow = "";
    }

    toggle?.addEventListener("click", () =>
        menu?.classList.contains("active") ? closeMenu() : openMenu()
    );

    overlay?.addEventListener("click", closeMenu);

    // Cerrar al hacer click en link del menú
    menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

    // ── SMOOTH SCROLL ───────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const id = this.getAttribute("href");
            if (id === "#") return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const offset = 80; // altura navbar
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        });
    });

    // ── SCROLL REVEAL ───────────────────────────────────
    const toReveal = document.querySelectorAll(
        ".card, .exp-card, .gallery-item, .section-header, .ba-card"
    );

    if ("IntersectionObserver" in window && toReveal.length) {

        const style = document.createElement("style");
        style.textContent = `
            .will-reveal {
                opacity: 0;
                transform: translateY(22px);
                transition: opacity 0.65s cubic-bezier(0.76,0,0.24,1),
                            transform 0.65s cubic-bezier(0.76,0,0.24,1);
            }
            .will-reveal.revealed {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay
                        ? parseFloat(entry.target.dataset.delay) * 90
                        : 0;
                    setTimeout(() => entry.target.classList.add("revealed"), delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        toReveal.forEach((el, i) => {
            el.classList.add("will-reveal");
            if (!el.dataset.delay) el.dataset.delay = (i % 4);
            observer.observe(el);
        });
    }

});