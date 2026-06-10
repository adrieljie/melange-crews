class Carousel {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 3;
                this.autoplayInterval = null;
                this.isAutoPlaying = true;
                this.autoplayDelay = 2000;
                
                this.carouselWrapper = document.getElementById('carouselWrapper');
                this.slides = document.querySelectorAll('.carousel-slide');
                
                this.init();
            }
            
            init() {
                this.startAutoplay();
                this.addEventListeners();
            }
            
            addEventListeners() {
                this.carouselWrapper.addEventListener('mouseenter', () => {
                    if (this.isAutoPlaying) {
                        this.pauseAutoplay();
                    }
                });
                
                this.carouselWrapper.addEventListener('mouseleave', () => {
                    if (this.isAutoPlaying) {
                        this.startAutoplay();
                    }
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateCarousel();
            }
            
            updateCarousel() {
                const translateX = -this.currentSlide * 100;
                this.carouselWrapper.style.transform = `translateX(${translateX}%)`;
            }
            
            startAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                }
                
                this.autoplayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.autoplayDelay);
            }
            
            pauseAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                    this.autoplayInterval = null;
                }
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            new Carousel();
        });