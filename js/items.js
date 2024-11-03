document.querySelectorAll('.articulo-categoria').forEach(item => {
    // Efecto al pasar el mouse
    item.addEventListener('mouseover', () => {
        item.classList.add('hover-effect');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hover-effect');
    });

    // Efecto al hacer clic
    item.addEventListener('click', () => {
        // Elimina la clase 'click-effect' de todos los elementos para que solo uno tenga el efecto al hacer clic
        document.querySelectorAll('.articulo-categoria').forEach(el => el.classList.remove('click-effect'));
        
        // Agrega la clase 'click-effect' solo al elemento clicado
        item.classList.add('click-effect');
    });
});