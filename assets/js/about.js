document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const animateOnScroll = (elements, animationClass, threshold = 0.2) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Animate elements when they come into view
    const animateElements = () => {
        // Hero section
        animateOnScroll(document.querySelectorAll('.horizontal-divider'), 'animate__fadeIn');
        animateOnScroll(document.querySelectorAll('.hero-title'), 'animate__fadeInUp');
        animateOnScroll(document.querySelectorAll('.slider-container'), 'animate__fadeIn');

        // About section
        animateOnScroll(document.querySelectorAll('.about-container .section-label'), 'animate__fadeInLeft');
        animateOnScroll(document.querySelectorAll('.about-content'), 'animate__fadeInRight');
        animateOnScroll(document.querySelectorAll('.zone-container .section-label'), 'animate__fadeInLeft');
        animateOnScroll(document.querySelectorAll('.zone-content'), 'animate__fadeInRight');

        // Work zones
        animateOnScroll(document.querySelectorAll('.zone-title'), 'animate__fadeInLeft');
        animateOnScroll(document.querySelectorAll('.zone-description'), 'animate__fadeInUp');
        animateOnScroll(document.querySelectorAll('.zone-media'), 'animate__fadeInRight');

        // Full video
        animateOnScroll(document.querySelectorAll('.video-title'), 'animate__fadeInUp');

        // Partners
        animateOnScroll(document.querySelectorAll('.partners-header h2'), 'animate__fadeInRight');

        // Partner logos - staggered
        const partnerLogos = document.querySelectorAll('.partner-logo');
        partnerLogos.forEach((logo, index) => {
            setTimeout(() => {
                logo.classList.add('animate__fadeIn');
            }, index * 100);
        });

        // Founder
        animateOnScroll(document.querySelectorAll('.founder-title'), 'animate__fadeInDown');
        animateOnScroll(document.querySelectorAll('.founder-image:nth-child(1)'), 'animate__fadeInLeft');
        animateOnScroll(document.querySelectorAll('.founder-image:nth-child(2)'), 'animate__fadeInRight');
    };

    // Initialize animations
    animateElements();

    // Infinite slider reset (for smoother loop)
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        setInterval(() => {
            if (sliderTrack.style.transform === 'translateX(-50%)') {
                sliderTrack.style.transition = 'none';
                sliderTrack.style.transform = 'translateX(0)';
                setTimeout(() => {
                    sliderTrack.style.transition = 'transform 30s linear';
                }, 10);
            }
        }, 30000);
    }

    // Scroll to top when refresh to ensure animations play
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
});