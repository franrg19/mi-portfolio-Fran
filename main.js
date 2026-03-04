document.addEventListener('DOMContentLoaded', () => {
    
    // // --- LÓGICA DE BOTONES DE CONTACTO ---
    // const botonesContacto = document.querySelectorAll('.btn-contactar');
    // botonesContacto.forEach(boton => {
    //     boton.addEventListener('click', () => {
    //         alert('¡Hola! Pronto añadiré mi formulario de contacto. Me puedes encontrar en LinkedIn mientras tanto.');
    //     });
    // });

    // --- LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
    const btnMenu = document.getElementById('btn-menu');
    const menuMovil = document.getElementById('menu-movil');
    const iconoMenu = btnMenu.querySelector('i');

    btnMenu.addEventListener('click', () => {
        // 1. Alternamos la clase 'hidden' y 'flex' para mostrar u ocultar el menú
        menuMovil.classList.toggle('hidden');
        menuMovil.classList.toggle('flex');
        
        // 2. Cambiamos el icono de las barras (hamburguesa) a una "X"
        if (menuMovil.classList.contains('hidden')) {
            iconoMenu.classList.remove('fa-xmark');
            iconoMenu.classList.add('fa-bars');
        } else {
            iconoMenu.classList.remove('fa-bars');
            iconoMenu.classList.add('fa-xmark');
        }
    });

    // Opcional: Cerrar el menú al hacer clic en uno de los enlaces móviles
    const enlacesMoviles = menuMovil.querySelectorAll('a');
    enlacesMoviles.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuMovil.classList.add('hidden');
            menuMovil.classList.remove('flex');
            iconoMenu.classList.remove('fa-xmark');
            iconoMenu.classList.add('fa-bars');
        });
    });

    console.log("¡Portfolio de Fran cargado correctamente con menú móvil! 📱🚀");
});