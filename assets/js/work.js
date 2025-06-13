document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from(".hero-video video", {
        scale: 1.2,
        duration: 2.5,
        ease: "power2.inOut"
    });

    gsap.from(".video-overlay", {
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    });

    gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
    });

    gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8
    });

    gsap.from(".scroll-indicator", {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.2
    });

    // Scroll down arrow functionality
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        gsap.to(window, {
            duration: 1.8,
            scrollTo: ".projects-grid",
            ease: "power2.inOut"
        });

        gsap.to(this.querySelector('.arrow-down'), {
            y: 10,
            duration: 0.4,
            repeat: 1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });

    // Project hover animations
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.to(item.querySelector('.project-image'), {
                scale: 1.08,
                duration: 1.2,
                ease: "power2.out"
            });

            gsap.to(item.querySelector('.project-title'), {
                letterSpacing: '4px',
                duration: 0.6,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.to(item.querySelector('.project-image'), {
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            });

            gsap.to(item.querySelector('.project-title'), {
                letterSpacing: '3px',
                duration: 0.6,
                ease: "power2.out"
            });
        });
    });

    // Animate projects grid on scroll
    gsap.utils.toArray('.grid-row').forEach((row, i) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            delay: i * 0.15,
            ease: "power3.out"
        });
    });

    // Project data - only images/videos
    const projectsData = {
        1: {
            title: "Fashion Editorial",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        },
        2: {
            title: "Automotive",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' }
            ]
        },
        3: {
            title: "Motion Project",
            media: [
                { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-modern-sports-car-1581-large.mp4' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80' }
            ]
        },
        4: {
            title: "Architecture",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
            ]
        },
        5: {
            title: "Runway",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        },
        6: {
            title: "Concert Film",
            media: [
                { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-concert-audience-enjoying-music-43583-large.mp4' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
            ]
        },
        7: {
            title: "Underwater",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        },
        8: {
            title: "Festival",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        },
        9: {
            title: "Product",
            media: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        },
        10: {
            title: "Documentary",
            media: [
                { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
            ]
        }
    };

    // Project popup functionality
    const projectPopup = document.querySelector('.project-popup');
    const closePopup = document.querySelector('.close-popup');
    const popupImage = document.querySelector('.popup-image');
    const popupVideo = document.querySelector('.popup-video');
    const thumbnailsContainer = document.querySelector('.media-thumbnails');

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const projectData = projectsData[projectId];

            if (!projectData) return;

            // Clear thumbnails
            thumbnailsContainer.innerHTML = '';

            // Set media
            if (projectData.media.length > 0) {
                const firstMedia = projectData.media[0];

                if (firstMedia.type === 'image') {
                    popupImage.src = firstMedia.url;
                    popupImage.style.display = 'block';
                    popupVideo.style.display = 'none';
                    popupVideo.pause();
                } else {
                    popupVideo.src = firstMedia.url;
                    popupVideo.style.display = 'block';
                    popupImage.style.display = 'none';
                }

                // Create thumbnails
                projectData.media.forEach((media, index) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = 'thumbnail';
                    if (index === 0) thumbnail.classList.add('active');

                    if (media.type === 'image') {
                        thumbnail.style.backgroundImage = `url(${media.url})`;
                    } else {
                        thumbnail.style.backgroundImage = 'url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80)';
                        thumbnail.innerHTML = '<div class="play-icon small">▶</div>';
                    }

                    thumbnail.addEventListener('click', () => {
                        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');

                        if (media.type === 'image') {
                            popupImage.src = media.url;
                            popupImage.style.display = 'block';
                            popupVideo.style.display = 'none';
                            popupVideo.pause();
                        } else {
                            popupVideo.src = media.url;
                            popupVideo.style.display = 'block';
                            popupImage.style.display = 'none';
                        }
                    });

                    thumbnailsContainer.appendChild(thumbnail);
                });
            }

            // Show popup with animation
            projectPopup.classList.add('active');
            document.body.style.overflow = 'hidden';

            gsap.from(".popup-container", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    });

    // Close popup
    closePopup.addEventListener('click', () => {
        gsap.to(".popup-container", {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
                projectPopup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close popup when clicking outside content
    projectPopup.addEventListener('click', (e) => {
        if (e.target === projectPopup) {
            gsap.to(".popup-container", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    projectPopup.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});