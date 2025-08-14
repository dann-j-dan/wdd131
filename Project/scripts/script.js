document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.body.classList.toggle("dark-theme", savedTheme === "dark");

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
        });
    }

    // Year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // Gallery (Home Page)
    const destinations = document.getElementById("destinations");
    if (destinations) {
        const places = [
            { name: "Bwindi Forest", img: "images/bwindi.jpeg" },
            { name: "Murchison Falls", img: "images/murchision falls.jpeg" },
            { name: "Lake Victoria", img: "images/victoria.jpeg" },
            { name: "Rwenzori Mountains", img: "images/rwenzori.jpeg" }
        ];

        destinations.innerHTML = places.map(place => `
            <div>
                <img src="${place.img}" alt="${place.name}" loading="lazy">
                <h4>${place.name}</h4>
            </div>
        `).join("");
    }

    // Contact Form
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let submissions = Number(localStorage.getItem("formCount")) || 0;
            submissions++;
            localStorage.setItem("formCount", submissions);

            document.getElementById("confirmation").textContent = 
                `Thank you! Your message has been sent. You have submitted this form ${submissions} time(s).`;
            document.getElementById("confirmation").classList.remove("hidden");

            form.reset();
        });
    }
});
