// Loading screen
function loading_screen(){
    document.getElementById('loading-screen').style.display = 'flex';
    document.getElementById('main-container').style.display = 'none';
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-container').style.display = 'flex';
    }, 2000);
}

window.onload = function() {
    loading_screen();
};

// Frases
const phrases = [
    "I'm a guitarist btw",
    "The first thing that I developed was a mothers'day web",
    "My favourite languages are Java and Python!",
    "I love playing VR games"
];
let indice = 0; // Para saber qué frase mostrar

const mensaje = document.getElementById('bot-message');
const boton = document.getElementById('bot-btn');

boton.addEventListener('click', () => {
    mensaje.textContent = phrases[indice]; // Mostrar frase
    indice++; // Pasar a la siguiente frase
    if(indice >= phrases.length) indice = 0; // Reiniciar al final
});

document.addEventListener('DOMContentLoaded', () => {
    // Secciones (corregí 'intro' a 'info-section')
    const sections = {
        'info-section': document.getElementById('info-section'),  // Cambié 'intro' por 'info-section'
        'about-me': document.getElementById('about-me'),
        projects: document.getElementById('projects')
    };
    function showSection(section) {
        Object.values(sections).forEach(sec => sec.classList.add('hide'));
        section.classList.remove('hide');
    }
    // Navbar links
    document.querySelectorAll('.btn-section').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = link.dataset.target;
            showSection(sections[target]);
            // Activar clase active
            document.querySelectorAll('.btn-section').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

});

