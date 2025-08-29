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
    "The first thing that I developed was a mother's day web",
    "My favourite languages are Java and C++",
    "I have a Cambridge B2 in English ",
    "I always study by books and by practicing a lot",
    "I don't like PHP"
];

let currentPhraseIndex = 0;

document.getElementById('phraseButton').addEventListener('click', function() {
    document.getElementById('phraseSquare').innerText = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
});


// Boton list
document.getElementById('menu-btn').addEventListener('click', function() { 
    const menuLinks = document.getElementById('menu-links');
    if (menuLinks.style.display === 'block' ) {
        menuLinks.style.display = 'none'; 
    } else {
        menuLinks.style.display = 'block'; 
    }
});

const aboutMe = document.getElementById('about-me');
const intro = document.getElementById('intro');
const proyects = document.getElementById('proyects');

function showSection(section) {
    // Ocultá todo
    [aboutMe, intro, proyects].forEach(div => div.classList.add('hide'));

    // Mostrá solo la sección deseada
    section.classList.remove('hide');
}

document.getElementById('home-btn').addEventListener('click', () => {
    showSection(intro);
});

document.getElementById('about-me-btn').addEventListener('click', () => {
    showSection(aboutMe);
});

document.getElementById('proyects-btn').addEventListener('click', () => {
    showSection(proyects);
});

/*
//About me Button
document.getElementById('about-me-btn').addEventListener('click', () => {
    document.getElementById('about-me').classList.remove('hide');
    document.getElementById('proyects').classList.add('hide');
    document.getElementById('intro').classList.add('hide');
});

//Home button
document.getElementById('home-btn').addEventListener('click', () => {
    document.getElementById('about-me').classList.add('hide');
    document.getElementById('proyects').classList.add('hide');
    document.getElementById('intro').classList.remove('hide');
});

//Proyects button
document.getElementById('proyects-btn').addEventListener('click', () => {
    document.getElementById('about-me').classList.add('hide');
    document.getElementById('intro').classList.add('hide');
    document.getElementById('proyects').classList.remove('hide');
});


*/


