/* ============================================================
   AURORA GLAMPING — glamping.js
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ── FORMULARIO → WHATSAPP ──────────────────────────
    const form = document.getElementById("form-reserva");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombre     = document.getElementById("nombre")?.value?.trim();
            const entrada    = document.getElementById("entrada")?.value;
            const salida     = document.getElementById("salida")?.value;
            const experiencia = document.getElementById("experiencia")?.value;

            if (!nombre || !entrada || !salida) {
                alert("Por favor completa todos los campos.");
                return;
            }

            if (salida <= entrada) {
                alert("La fecha de salida debe ser posterior a la de entrada.");
                return;
            }

            const mensaje =
`Hola, quiero reservar en Aurora Glamping 🌲

👤 Nombre: ${nombre}
🏕️ Experiencia: ${experiencia}
📅 Llegada: ${entrada}
📅 Salida: ${salida}

¡Espero confirmación de disponibilidad!`;

            const telefono = "573226594124";
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        });
    }

    // ── SELECCIÓN DE EXPERIENCIA DESDE CARDS ──────────
    document.querySelectorAll(".card-cta").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const cardTitle = this.closest(".card")?.querySelector("h3")?.textContent;
            const select = document.getElementById("experiencia");

            if (select && cardTitle) {
                for (let opt of select.options) {
                    if (opt.value.toLowerCase().includes(cardTitle.toLowerCase().split(" ")[0].toLowerCase())) {
                        select.value = opt.value;
                        break;
                    }
                }
                document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});