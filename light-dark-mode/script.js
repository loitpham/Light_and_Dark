const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Image Mode
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';

    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    imageMode('dark');
}

// Light Mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';

    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    imageMode('light');
}

// Switch theme dynamically
function switchTheme(event) {
    console.log(event);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // key and value must be strings
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // key and value must be strings
        lightMode();
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}