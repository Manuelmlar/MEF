
const plans = document.querySelectorAll('.plan');

plans.forEach(plan => {
    plan.addEventListener('click', () => {
        // Remover la selección de todos los planes
        plans.forEach(p => p.classList.remove('selected'));
        
        // Agregar la selección al plan clicado
        plan.classList.add('selected');
    });
});

document.querySelector('.next-btn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    
    modal.style.display = 'block'; // Asegura que el modal esté visible
    setTimeout(function() {
        modal.classList.remove('hide'); // Remueve la clase de salida si la tiene
        modal.classList.add('show'); // Añade la clase de entrada
    }, 10); // Breve retardo para asegurarse de que la transición funcione correctamente
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.classList.remove('show'); // Remueve la clase de entrada
    modal.classList.add('hide'); // Añade la clase para la animación de salida
    setTimeout(function() {
        modal.style.display = 'none'; // Oculta el modal después de la animación
    }, 500); // El tiempo coincide con la duración de la animación de salida
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    }
});