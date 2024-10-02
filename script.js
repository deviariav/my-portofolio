document.addEventListener('DOMContentLoaded', function() {
    // Handling the contact button click
    const contactButton = document.querySelector('.contact-btn');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'mailto:deviariavi@gmail.com';
        });
    }

    // Handling hover over the profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted');
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Animasi teks pada header
        const headerText = document.querySelector('.header-text');
        if (headerText) {
            const text = headerText.textContent;
            headerText.textContent = '';
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    headerText.textContent += text[i];
                }, 100 * i);
            }
        }
    
        // Lazy loading untuk gambar
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    
        // Animasi scroll untuk elemen
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => elementObserver.observe(el));
    
        // Toggle dark mode
        const darkModeToggle = document.querySelector('#dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
            });
    
            // Check for saved dark mode preference
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
            }
        }
    
        // Skill progress bars animation
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 500);
        });
    
        // Modal for project details
        const projectLinks = document.querySelectorAll('.project-link');
        const modal = document.querySelector('#project-modal');
        const modalContent = document.querySelector('#modal-content');
        const closeModal = document.querySelector('#close-modal');
    
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const projectDetails = link.getAttribute('data-details');
                modalContent.innerHTML = projectDetails;
                modal.style.display = 'block';
            });
        });
    
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});