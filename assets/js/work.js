document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA: MANAGE ALL YOUR CONTENT HERE
    const portfolioData = {
        photoshoots: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920', alt: 'Woman in stylish green clothing' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965', alt: 'Person with fashionable accessories' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070', alt: 'Woman in retro outfit by a vintage car' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=1974', alt: 'Fashion model in yellow outfit' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1509904852434-296557161858?q=80&w=1974', alt: 'Woman in red dress' }
        ],
        cultural: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070', alt: 'DJ performing at a concert' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070', alt: 'Crowd at a music festival' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070', alt: 'Colorful festival lanterns at night' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070', alt: 'Musician playing guitar on stage' }
        ],
        corporate: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974', alt: 'Team meeting in a modern office' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071', alt: 'Students collaborating with a laptop' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070', alt: 'Group of professionals in a discussion' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070', alt: 'Presenter pointing at a whiteboard' }
        ],
        videos: [
            { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-modern-sports-car-1581-large.mp4', thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000', alt: 'Cinematic shot of a modern sports car' },
            { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-a-surfer-walks-on-the-beach-with-a-surfboard-1203-large.mp4', thumb: 'https://images.unsplash.com/photo-1502680390409-73574f46398f?q=80&w=2000', alt: 'Surfer walking along the beach' },
            { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-sunny-field-4187-large.mp4', thumb: 'https://images.unsplash.com/photo-1524250502761-5ac945e200f4?q=80&w=1974', alt: 'Fashion model in a sunny field' },
            { type: 'video', url: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-4181-large.mp4', thumb: 'https://images.unsplash.com/photo-1551843183-c2157a41d636?q=80&w=2070', alt: 'Man working on a laptop' }
        ]
    };

    // 2. DOM ELEMENTS & STATE
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxLoader = document.querySelector('.lightbox-loader');

    let currentCategoryItems = [];
    let currentLightboxIndex = 0;
    const placeholderSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // 3. LAZY LOADING
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const itemDiv = entry.target;
                const img = itemDiv.querySelector('img');
                img.src = img.dataset.src;
                img.addEventListener('load', () => {
                    itemDiv.classList.remove('lazy-img');
                    itemDiv.classList.add('loaded');
                });
                observer.unobserve(itemDiv);
            }
        });
    }, { rootMargin: "0px 0px 300px 0px" });

    // 4. FUNCTIONS
    const populateGalleries = () => {
        for (const category in portfolioData) {
            const galleryEl = document.getElementById(`${category}-gallery`);
            if (galleryEl) {
                const items = portfolioData[category];
                items.forEach((item, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'gallery-item lazy-img';
                    itemDiv.dataset.category = category;
                    itemDiv.dataset.index = index;

                    const img = document.createElement('img');
                    img.src = placeholderSrc;
                    img.dataset.src = item.type === 'video' ? item.thumb : item.url;
                    img.alt = item.alt;

                    itemDiv.appendChild(img);
                    if (item.type === 'video') {
                        itemDiv.classList.add('video');
                    }
                    galleryEl.appendChild(itemDiv);
                    lazyLoadObserver.observe(itemDiv);
                });
            }
        }
    };

    const showLightbox = (category, index) => {
        currentCategoryItems = portfolioData[category];
        currentLightboxIndex = parseInt(index);
        updateLightboxMedia();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const updateLightboxMedia = () => {
        lightboxImage.style.display = 'none';
        lightboxVideo.style.display = 'none';
        lightboxLoader.style.display = 'block';
        const item = currentCategoryItems[currentLightboxIndex];
        const mediaElement = item.type === 'image' ? lightboxImage : lightboxVideo;
        mediaElement.src = item.url;
        const onMediaLoaded = () => {
            lightboxLoader.style.display = 'none';
            mediaElement.style.display = 'block';
            if (item.type === 'video') mediaElement.play();
            mediaElement.removeEventListener(item.type === 'video' ? 'loadeddata' : 'load', onMediaLoaded);
        };
        mediaElement.addEventListener(item.type === 'video' ? 'loadeddata' : 'load', onMediaLoaded);
    };

    const navigateLightbox = (direction) => {
        currentLightboxIndex += direction;
        if (currentLightboxIndex >= currentCategoryItems.length) currentLightboxIndex = 0;
        if (currentLightboxIndex < 0) currentLightboxIndex = currentCategoryItems.length - 1;
        updateLightboxMedia();
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        lightboxVideo.pause();
        lightboxVideo.src = '';
        lightboxImage.src = '';
    };

    // 5. ANIMATIONS
    const animateSections = () => {
        document.querySelectorAll('.portfolio-category').forEach(section => {
            gsap.from(section.querySelector('.category-header'), {
                scrollTrigger: { trigger: section, start: "top 80%" },
                opacity: 0, y: 50, duration: 1, ease: 'power3.out'
            });
            gsap.from(section.querySelector('.horizontal-scroll-wrapper'), {
                scrollTrigger: { trigger: section, start: "top 70%" },
                opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2
            });
        });
    };

    // 6. EVENT LISTENERS
    document.getElementById('portfolio-content').addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            showLightbox(item.dataset.category, item.dataset.index);
        }
    });

    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));
    document.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });

    // 7. INITIALIZATION
    populateGalleries();
    animateSections();
});