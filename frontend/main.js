document.addEventListener("DOMContentLoaded", async function() {
    // Counter logic
    const counter = document.querySelector("#counter");
    if (counter) {
        try {
            let response = await fetch("https://sahnslbz4wpbwuojinuox3w5oi0awcqi.lambda-url.us-east-1.on.aws/");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            console.log('Fetched data:', data); // Log to check data structure
            counter.innerHTML = `${data.views || data}`; // Adjust based on actual data structure
        } catch (error) {
            console.error('Failed to fetch data:', error);
            counter.innerHTML = 'Failed to load data';
        }
    } else {
        console.error('Element with ID "counter" not found');
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Navigation scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // Add active class to navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});