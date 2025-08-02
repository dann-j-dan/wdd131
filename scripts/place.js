// Windchill calculation for metric units (°C, km/h)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const temp = 24; // static value, °C
const speed = 10; // static value, km/h

document.getElementById('temp').textContent = temp;
document.getElementById('speed').textContent = speed;

let windchill = "N/A";
if (temp <= 10 && speed > 4.8) {
    windchill = calculateWindChill(temp, speed) + " °C";
}
document.getElementById('windchill').textContent = windchill;

// Footer year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
    "Last Modification: " + document.lastModified;