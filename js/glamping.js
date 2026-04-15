document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-reserva");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const entrada = document.getElementById("entrada").value;
        const salida = document.getElementById("salida").value;
        const experiencia = document.getElementById("experiencia").value;

        // ✅ VALIDACIÓN AQUÍ 👇
        if (salida <= entrada) {
            alert("La fecha de salida debe ser después de la entrada");
            return;
        }

        // 💬 MENSAJE
        const mensaje = 
`Hola, quiero reservar en Aurora Glamping 🌲

👤 Nombre: ${nombre}
🏕️ Experiencia: ${experiencia}
📅 Entrada: ${entrada}
📅 Salida: ${salida}`;

        const telefono = "573226594124"; // Reemplaza con tu número real
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");

        // cambiar icono
        toggle.textContent = menu.classList.contains("active") ? "✖" : "☰";
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");

        // cambiar icono
        toggle.textContent = menu.classList.contains("active") ? "✖" : "☰";
    });

});