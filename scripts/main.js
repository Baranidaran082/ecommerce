// TechPulse Main JavaScript - Homepage Functionality

class TechPulseHome {
    constructor() {
        this.currentSlide = 0;
        this.reviewSlides = document.querySelectorAll('.review-card');
        this.dots = document.querySelectorAll('.dot');
        this.isAutoPlay = true;
        this.autoPlayInterval = null;
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupHeroAnimations();
        this.setupCategoryCards();
        this.loadTrendingProducts();
        this.setupReviewsSlider();
        this.setupNewsletterForm();
        this.setupScrollEffects();
        this.setupSearch();
    }

    // Navigation functionality
    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navbar = document.getElementById('navbar');

        // Mobile hamburger menu
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            navMenu.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Navbar scroll effect
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        // Smooth scroll for anchor links
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
    }

    // Hero section animations
    setupHeroAnimations() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        // Add random animation delays
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const floatingContainer = document.querySelector('.floating-elements');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            if (floatingContainer && scrolled < window.innerHeight) {
                floatingContainer.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
            }
        });
    }

    // Category cards interaction
    setupCategoryCards() {
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                if (category) {
                    window.location.href = `products.html?category=${category}`;
                }
            });

            // Add hover sound effect (optional)
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Load and display trending products
    loadTrendingProducts() {
        const trendingGrid = document.getElementById('trending-products-grid');
        if (!trendingGrid) return;

        const trendingProducts = getTrendingProducts().slice(0, 8); // Show first 8 trending products

        if (trendingProducts.length === 0) {
            trendingGrid.innerHTML = '<p class="no-products">No trending products available at the moment.</p>';
            return;
        }

        trendingGrid.innerHTML = trendingProducts.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.discount ? `<span class="product-badge">-${product.discount}%</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${this.capitalizeCategory(product.category)}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');

        // Add click handlers for product cards
        trendingGrid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.add-to-cart-btn')) {
                    const productId = card.dataset.productId;
                    window.location.href = `product-detail.html?id=${productId}`;
                }
            });
        });
    }

    // Customer reviews slider
    setupReviewsSlider() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dots = document.querySelectorAll('.dot');

        if (!this.reviewSlides.length) return;

        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto play
        this.startAutoPlay();

        // Pause auto play on hover
        const slider = document.querySelector('.reviews-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoPlay());
            slider.addEventListener('mouseleave', () => this.startAutoPlay());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Touch/swipe support
        this.setupTouchNavigation();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.reviewSlides.length;
        this.updateSlider();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.reviewSlides.length) % this.reviewSlides.length;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }

    updateSlider() {
        // Hide all slides
        this.reviewSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show current slide
        if (this.reviewSlides[this.currentSlide]) {
            this.reviewSlides[this.currentSlide].classList.add('active');
        }

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    startAutoPlay() {
        if (this.isAutoPlay && !this.autoPlayInterval) {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000); // Change slide every 5 seconds
        }
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    // Touch navigation for mobile
    setupTouchNavigation() {
        const slider = document.querySelector('.reviews-slider');
        if (!slider) return;

        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide(); // Swipe left - next slide
                } else {
                    this.previousSlide(); // Swipe right - previous slide
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    // Newsletter form functionality
    setupNewsletterForm() {
        const newsletterForm = document.getElementById('newsletter-form');
        const emailInput = document.getElementById('newsletter-email');
        const messageDiv = document.getElementById('newsletter-message');

        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (this.validateEmail(email)) {
                this.subscribeToNewsletter(email);
            } else {
                this.showNewsletterMessage('Please enter a valid email address.', 'error');
            }
        });
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    subscribeToNewsletter(email) {
        const messageDiv = document.getElementById('newsletter-message');
        const emailInput = document.getElementById('newsletter-email');
        
        // Simulate subscription process
        this.showNewsletterMessage('Subscribing...', 'info');
        
        setTimeout(() => {
            // Simulate successful subscription
            this.showNewsletterMessage('Thank you for subscribing! Check your email for confirmation.', 'success');
            emailInput.value = '';
        }, 1500);
    }

    showNewsletterMessage(message, type) {
        const messageDiv = document.getElementById('newsletter-message');
        if (!messageDiv) return;

        messageDiv.textContent = message;
        messageDiv.className = `newsletter-message ${type}`;
        messageDiv.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    // Scroll effects and animations
    setupScrollEffects() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.section-title, .category-card, .product-card, .review-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Parallax background elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Search functionality
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchIcon = document.querySelector('.search-icon');

        if (!searchInput) return;

        // Search on Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Search on icon click
        if (searchIcon) {
            searchIcon.addEventListener('click', () => {
                this.performSearch();
            });
        }

        // Search suggestions (optional enhancement)
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.showSearchSuggestions(e.target.value);
            }, 300);
        });
    }

    performSearch() {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value.trim();
        
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    }

    showSearchSuggestions(query) {
        if (!query || query.length < 2) return;

        const suggestions = searchProducts(query).slice(0, 5);
        // Implementation for search suggestions dropdown can be added here
    }

    // Utility functions
    capitalizeCategory(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Method to handle page visibility changes
    handleVisibilityChange() {
        if (document.hidden) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }
}

// Initialize the homepage functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const techPulseHome = new TechPulseHome();
    
    // Handle page visibility changes for auto-play
    document.addEventListener('visibilitychange', () => {
        techPulseHome.handleVisibilityChange();
    });

    // Add smooth scrolling class to html element
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add loading state management
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Global utility functions
window.TechPulseHome = TechPulseHome;
