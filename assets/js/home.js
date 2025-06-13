 document.addEventListener('DOMContentLoaded', function() {
        // ===== SLIDER FUNCTIONALITY =====
        const sliderTrack = document.querySelector('.slider-track');
        const sliderDots = document.querySelector('.slider-dots');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');

        // Sample images (replace with your own)
        const images = [
            'assets/file/1.jpg',
            'assets/file/2.jpg',
            'assets/file/3.jpg',
            'assets/file/4.jpg',
            'assets/file/5.jpg'
        ];

        let currentSlide = 0;
        let slideInterval;

        // Create slides and dots
        images.forEach((image, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'slider-slide';

            const img = document.createElement('img');
            img.className = 'slider-image';
            img.src = image;
            img.alt = `Slide ${index + 1}`;
            img.loading = 'lazy';

            slide.appendChild(img);
            sliderTrack.appendChild(slide);

            // Create dot
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            sliderDots.appendChild(dot);
        });

        // Update slider position
        function updateSlider() {
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Update active dot
            document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % images.length;
            updateSlider();
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + images.length) % images.length;
            updateSlider();
        }

        // Go to specific slide
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        // Auto-slide
        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        startAutoSlide();

        // Pause on hover
        sliderTrack.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderTrack.addEventListener('mouseleave', startAutoSlide);

        // Button events
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });

        // ===== NAVBAR SCROLL EFFECT =====
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.padding = '1rem 5%';
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                } else {
                    navbar.style.padding = '1.5rem 5%';
                    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                }
            });
        }
    });