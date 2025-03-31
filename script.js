document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent instant jump
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth"
                });
            }

            // Highlight active link
            navLinks.forEach(nav => nav.classList.remove("active-link"));
            this.classList.add("active-link");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.08)";
            card.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });

        card.addEventListener("click", () => {
            card.classList.add("clicked");
            setTimeout(() => {
                card.classList.remove("clicked");
            }, 300);
        });
    });
});

AOS.init({
    duration: 1000, // Animation duration (1 second)
    once: true // Animations play only once
});

const text = "Hello, I'm Rachel Jacob Fernandes";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;
