// Footer year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
        menuButton.innerHTML = '&#9776;'; // hamburger icon
    } else {
        navigation.style.display = 'flex';
        menuButton.innerHTML = '&times;'; // X icon
    }
});

