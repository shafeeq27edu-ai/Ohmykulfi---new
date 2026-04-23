/**
 * OhmyKulfi Premium Script
 * Handling dynamic taglines and interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mock Gemini 3.1 Tagline Service
    const taglines = [
        "Crafting Bengaluru's Finest Saffron Kulfi.",
        "The Soul of Indiranagar in Every Bite.",
        "Artisanal Kulfi, Rooted in Tradition.",
        "Experience the Magic of Malleshwaram Mango.",
        "Bengaluru's Favorite Premium Dessert Destination."
    ];

    let currentTaglineIndex = 0;
    const taglineElement = document.getElementById('dynamic-tagline');

    function updateTagline() {
        taglineElement.style.opacity = '0';
        
        setTimeout(() => {
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            taglineElement.textContent = taglines[currentTaglineIndex];
            taglineElement.style.opacity = '1';
        }, 500);
    }

    // Cycle taglines every 4 seconds
    if (taglineElement) {
        setInterval(updateTagline, 4000);
    }

    // Scroll-triggered animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero images on mouse move
    const heroVisuals = document.querySelector('.hero-visuals');
    if (heroVisuals) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 30;
            const yPos = (clientY / window.innerHeight - 0.5) * 30;

            const images = heroVisuals.querySelectorAll('.image-wrapper');
            images.forEach((img, index) => {
                const depth = (index + 1) * 0.5;
                img.style.transform = `translate(${xPos * depth}px, ${yPos * depth}px)`;
            });
        });
    }
});
