    // GSAP Animations
    document.addEventListener('DOMContentLoaded', () => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animate the contact section
        gsap.from(".contact-content", {
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".contact-form-container", {
            scrollTrigger: {
                trigger: ".contact-section",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Form element animations
        const formGroups = gsap.utils.toArray(".form-group");
        formGroups.forEach((group, i) => {
            gsap.from(group, {
                scrollTrigger: {
                    trigger: ".contact-form",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.1,
                ease: "back.out"
            });
        });

        // Button hover animation
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('mouseenter', () => {
                gsap.to(submitBtn.querySelector('.btn-icon'), {
                    x: 5,
                    duration: 0.3
                });
            });

            submitBtn.addEventListener('mouseleave', () => {
                gsap.to(submitBtn.querySelector('.btn-icon'), {
                    x: 0,
                    duration: 0.3
                });
            });
        }
    });