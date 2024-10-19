// script.js

window.addEventListener("scroll", function() {
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (window.scrollY > 100) { // Aparece después de hacer scroll 100px
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    }

    const aboutItems = document.querySelectorAll('.about-item');

    const checkVisibility = () => {
        const windowHeight = window.innerHeight;

        aboutItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add('visible');
            }
        });
    };

    // Ejecuta la función para verificar la visibilidad
    checkVisibility();
});

// Funcionalidad para la imagen ampliada
const fullImageOverlay = document.getElementById('fullImageOverlay');
const fullImage = document.getElementById('fullImage');
let scale = 1;
let isPanning = false;
let startX, startY;

// Funciones para abrir y cerrar la imagen ampliada
function openFullImage() {
    fullImageOverlay.style.display = 'flex';
    resetImagePosition(); // Reiniciar la posición y escala de la imagen
}

function closeFullImage() {
    fullImageOverlay.style.display = 'none';
}

// Reiniciar la posición y escala de la imagen
function resetImagePosition() {
    scale = 1;
    fullImage.style.transform = 'translate(0, 0) scale(1)'; // Reiniciar posición y escala
}

// Añadir zoom y desplazamiento
fullImageOverlay.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(1, scale), 3); // Limitar el zoom entre 1x y 3x
    fullImage.style.transform = `scale(${scale})`;
});

fullImage.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    fullImage.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    e.preventDefault();
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;
    fullImage.style.transform += ` translate(${dx}px, ${dy}px)`; // Mover la imagen según el desplazamiento
    startX = e.clientX; // Actualizar las coordenadas iniciales
    startY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isPanning = false;
    fullImage.style.cursor = 'grab';
});

// Funcionalidad de la burbuja
const bubble = document.getElementById('bubble');

bubble.addEventListener('click', function() {
    this.classList.toggle('open');
});
