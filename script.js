document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll for the entry button ---
    const entryButton = document.querySelector('a.btn[href^="#"]');
    if (entryButton) {
        entryButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // --- Fade-in sections on scroll ---
    const sections = document.querySelectorAll('.card-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Forgiveness Section Logic ---
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const questionContainer = document.getElementById('forgiveness-question');
    const responseContainer = document.getElementById('response-container');
    const responseMessage = document.getElementById('response-message');

    const responses = {
        yes: "Thank you... thank you so much! You've made me the happiest person in the world. I promise I won't let you down. ❤️",
        talk: "Of course. I'm here to listen whenever you're ready. Your feelings are what matter most right now. I'll be waiting.",
        time: "I understand completely. Take all the time you need. My heart isn't going anywhere. I'll wait."
    };

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.getAttribute('data-choice');
            responseMessage.textContent = responses[choice];
            
            questionContainer.style.transition = 'opacity 0.5s ease-out';
            questionContainer.style.opacity = '0';
            
            setTimeout(() => {
                questionContainer.classList.add('hidden');
                responseContainer.classList.remove('hidden');
                responseContainer.style.opacity = '0';
                setTimeout(() => {
                    responseContainer.style.transition = 'opacity 0.5s ease-in';
                    responseContainer.style.opacity = '1';
                }, 50);
            }, 500);
        });
    });

    // --- Floating Hearts Animation on Landing Page ---
    const heartsContainer = document.getElementById('hearts-container');
    if (heartsContainer) {
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '&#10084;'; // Heart character
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10 seconds duration
            heart.style.opacity = Math.random();
            heart.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`; // Vary size

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 10000); // Remove heart after 10 seconds
        }

        setInterval(createHeart, 500); // Create a new heart every 500ms
    }
});
