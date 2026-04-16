/* ============================================================
   THE ROYAL CUT — barberia.js
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── FORMULARIO → WHATSAPP ──────────────────────────
    const form = document.getElementById("form-reserva");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombre   = document.getElementById("nombre")?.value?.trim();
            const fecha    = document.getElementById("fecha")?.value;
            const servicio = document.getElementById("servicio")?.value;

            if (!nombre || !fecha || !servicio) {
                alert("Por favor completa todos los campos.");
                return;
            }

            const mensaje =
`Hola, quiero agendar una cita en The Royal Cut ✂️

👤 Nombre: ${nombre}
📅 Fecha: ${fecha}
💈 Servicio: ${servicio}

¡Quedo atento a la confirmación!`;

            const telefono = "573226594124";
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        });
    }

});