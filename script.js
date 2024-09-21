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

const bubble = document.getElementById('bubble');

bubble.addEventListener('click', function() {
    this.classList.toggle('open');
});
