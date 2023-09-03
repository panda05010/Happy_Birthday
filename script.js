// Función para crear globos de forma aleatoria
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    const size = Math.random() * 100 + 50; // Tamaño aleatorio entre 50 y 150 px
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.background = getRandomColor();
    const xPos = Math.random() * window.innerWidth;
    balloon.style.left = xPos + 'px';
    balloon.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración de la animación entre 5 y 10 segundos
    balloon.addEventListener('animationiteration', () => {
        // Eliminar el globo cuando la animación termine
        balloon.remove();
    });
    document.getElementById('globos-container').appendChild(balloon);
}

// Genera un color hexadecimal aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Crear globos cada segundo
setInterval(createBalloon, 1000);
