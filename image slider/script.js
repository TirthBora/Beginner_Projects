   let currentSlide = 0;
        const slider = document.getElementById('slider');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const dotsContainer = document.getElementById('dotsContainer');

        // Create dots
        function createDots() {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Update dots
        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Go to specific slide
        function goToSlide(n) {
            currentSlide = n;
            updateSlider();
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        // Update slider position
        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        // Auto slide
        let autoSlideInterval = setInterval(nextSlide, 3000);

        // Pause auto slide on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 3000);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Initialize
        createDots();