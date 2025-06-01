// TechPulse Product Detail Page Functionality

class ProductDetailPage {
    constructor() {
        this.product = null;
        this.currentImageIndex = 0;
        this.quantity = 1;
        this.isZoomed = false;
        
        this.init();
    }

    init() {
        this.loadProduct();
        this.setupNavigation();
        this.setupEventListeners();
    }

    // Load product data from URL parameter
    loadProduct() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        if (!productId) {
            this.showError('Product not found. Invalid product ID.');
            return;
        }
        
        this.product = getProductById(productId);
        
        if (!this.product) {
            this.showError('Product not found. The requested product does not exist.');
            return;
        }
        
        this.displayProduct();
        this.loadRelatedProducts();
    }

    // Setup navigation (shared functionality)
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
    }

    // Setup all event listeners
    setupEventListeners() {
        // Quantity controls
        const decreaseBtn = document.getElementById('decrease-qty');
        const increaseBtn = document.getElementById('increase-qty');
        const quantityInput = document.getElementById('quantity-input');

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => this.updateQuantity(-1));
        }

        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => this.updateQuantity(1));
        }

        if (quantityInput) {
            quantityInput.addEventListener('change', (e) => {
                const newQuantity = parseInt(e.target.value) || 1;
                this.setQuantity(newQuantity);
            });
        }

        // Add to cart button
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => this.handleAddToCart());
        }

        // Wishlist button
        const wishlistBtn = document.getElementById('wishlist-btn');
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', () => this.toggleWishlist());
        }

        // Tab navigation
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Image zoom
        const mainImage = document.getElementById('main-product-image');
        const zoomOverlay = document.getElementById('zoom-overlay');

        if (mainImage && zoomOverlay) {
            mainImage.addEventListener('mouseenter', () => this.enableImageZoom());
            mainImage.addEventListener('mouseleave', () => this.disableImageZoom());
            mainImage.addEventListener('mousemove', (e) => this.handleImageZoom(e));
        }

        // Modal close
        const closeModal = document.getElementById('close-modal');
        const continueShoppingBtn = document.getElementById('continue-shopping');

        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeModal());
        }

        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', () => this.closeModal());
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchIcon = document.querySelector('.search-icon');

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }

        if (searchIcon) {
            searchIcon.addEventListener('click', () => this.handleSearch());
        }
    }

    // Display product information
    displayProduct() {
        if (!this.product) return;

        // Update page title
        document.title = `${this.product.name} - TechPulse`;

        // Update breadcrumb
        this.updateBreadcrumb();

        // Update product images
        this.setupProductImages();

        // Update product info
        document.getElementById('product-category').textContent = this.capitalizeCategory(this.product.category);
        document.getElementById('product-title').textContent = this.product.name;
        document.getElementById('current-price').textContent = `$${this.product.price.toFixed(2)}`;

        // Handle original price and discount
        const originalPriceEl = document.getElementById('original-price');
        const discountBadgeEl = document.getElementById('discount-badge');

        if (this.product.originalPrice && this.product.discount) {
            originalPriceEl.textContent = `$${this.product.originalPrice.toFixed(2)}`;
            originalPriceEl.style.display = 'inline';
            discountBadgeEl.textContent = `-${this.product.discount}%`;
            discountBadgeEl.style.display = 'inline';
        } else {
            originalPriceEl.style.display = 'none';
            discountBadgeEl.style.display = 'none';
        }

        // Update rating
        this.updateRating();

        // Update description
        document.getElementById('product-description').textContent = this.product.description;

        // Update specifications
        this.updateSpecifications();

        // Update tab content
        this.updateTabContent();
    }

    // Update breadcrumb navigation
    updateBreadcrumb() {
        document.getElementById('breadcrumb-category').textContent = this.capitalizeCategory(this.product.category);
        document.getElementById('breadcrumb-product').textContent = this.product.name;
    }

    // Setup product image gallery
    setupProductImages() {
        const mainImage = document.getElementById('main-product-image');
        const thumbnailContainer = document.getElementById('thumbnail-images');

        // Set main image
        mainImage.src = this.product.image;
        mainImage.alt = this.product.name;

        // Create thumbnails
        const images = this.product.images || [this.product.image];
        
        thumbnailContainer.innerHTML = images.map((image, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image-index="${index}">
                <img src="${image}" alt="${this.product.name} ${index + 1}">
            </div>
        `).join('');

        // Add thumbnail click handlers
        thumbnailContainer.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const imageIndex = parseInt(thumb.dataset.imageIndex);
                this.changeMainImage(imageIndex);
            });
        });
    }

    // Change main product image
    changeMainImage(index) {
        const images = this.product.images || [this.product.image];
        const mainImage = document.getElementById('main-product-image');
        
        if (index >= 0 && index < images.length) {
            this.currentImageIndex = index;
            mainImage.src = images[index];
            
            // Update thumbnail active state
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }
    }

    // Update product rating display
    updateRating() {
        const rating = this.product.rating || 4.5;
        const reviews = this.product.reviews || 0;
        
        const starsContainer = document.getElementById('product-stars');
        starsContainer.innerHTML = this.generateStarRating(rating);
        
        document.getElementById('rating-text').textContent = `(${rating}) ${reviews} reviews`;
    }

    // Generate star rating HTML
    generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHTML = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }

    // Update specifications section
    updateSpecifications() {
        const specsContainer = document.getElementById('product-specs');
        
        if (this.product.specifications) {
            const specsHTML = Object.entries(this.product.specifications)
                .map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('');
            
            specsContainer.innerHTML = specsHTML;
        }
    }

    // Update tab content
    updateTabContent() {
        // Detailed description
        const detailedDescription = document.getElementById('detailed-description');
        if (detailedDescription) {
            detailedDescription.innerHTML = `
                <p>${this.product.detailedDescription || this.product.description}</p>
            `;
        }

        // Detailed specifications
        const detailedSpecs = document.getElementById('detailed-specs');
        if (detailedSpecs && this.product.specifications) {
            const specsHTML = Object.entries(this.product.specifications)
                .map(([key, value]) => `
                    <div class="spec-row">
                        <div class="spec-label">${key}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('');
            
            detailedSpecs.innerHTML = `<div class="specs-table">${specsHTML}</div>`;
        }
    }

    // Handle quantity changes
    updateQuantity(change) {
        const newQuantity = this.quantity + change;
        this.setQuantity(newQuantity);
    }

    setQuantity(quantity) {
        const minQuantity = 1;
        const maxQuantity = 10;
        
        this.quantity = Math.max(minQuantity, Math.min(maxQuantity, quantity));
        
        const quantityInput = document.getElementById('quantity-input');
        if (quantityInput) {
            quantityInput.value = this.quantity;
        }
    }

    // Handle add to cart
    handleAddToCart() {
        if (!this.product) return;
        
        const success = addToCart(this.product.id, this.quantity);
        
        if (success) {
            this.showAddToCartModal();
        } else {
            alert('Failed to add product to cart. Please try again.');
        }
    }

    // Show add to cart success modal
    showAddToCartModal() {
        const modal = document.getElementById('add-to-cart-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('add-to-cart-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Toggle wishlist (placeholder functionality)
    toggleWishlist() {
        const wishlistBtn = document.getElementById('wishlist-btn');
        const icon = wishlistBtn.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            wishlistBtn.style.color = 'var(--accent-green)';
            this.showNotification('Added to wishlist!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            wishlistBtn.style.color = '';
            this.showNotification('Removed from wishlist!');
        }
    }

    // Switch between tabs
    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Update tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName}-tab`);
        });
    }

    // Image zoom functionality
    enableImageZoom() {
        this.isZoomed = true;
        const zoomOverlay = document.getElementById('zoom-overlay');
        if (zoomOverlay) {
            zoomOverlay.style.opacity = '1';
        }
    }

    disableImageZoom() {
        this.isZoomed = false;
        const zoomOverlay = document.getElementById('zoom-overlay');
        if (zoomOverlay) {
            zoomOverlay.style.opacity = '0';
        }
    }

    handleImageZoom(e) {
        if (!this.isZoomed) return;
        
        const mainImage = document.getElementById('main-product-image');
        const rect = mainImage.getBoundingClientRect();
        
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        mainImage.style.transformOrigin = `${x}% ${y}%`;
        mainImage.style.transform = 'scale(2)';
    }

    // Load related products
    loadRelatedProducts() {
        if (!this.product) return;
        
        const relatedProducts = getRelatedProducts(this.product.id, this.product.category, 4);
        const relatedGrid = document.getElementById('related-products-grid');
        
        if (!relatedGrid) return;
        
        if (relatedProducts.length === 0) {
            relatedGrid.innerHTML = '<p class="no-products">No related products found.</p>';
            return;
        }
        
        relatedGrid.innerHTML = relatedProducts.map(product => `
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
        
        // Add click handlers for related product cards
        relatedGrid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.add-to-cart-btn')) {
                    const productId = card.dataset.productId;
                    window.location.href = `product-detail.html?id=${productId}`;
                }
            });
        });
    }

    // Handle search
    handleSearch() {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value.trim();
        
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    }

    // Show notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-blue);
            color: var(--primary-white);
            padding: 1rem;
            border-radius: 8px;
            z-index: 1001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Show error message
    showError(message) {
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <div class="error-page">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>Error</h2>
                    <p>${message}</p>
                    <a href="products.html" class="cta-button">Browse Products</a>
                </div>
            `;
        }
    }

    // Utility function
    capitalizeCategory(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
}

// Initialize product detail page
document.addEventListener('DOMContentLoaded', () => {
    const productDetailPage = new ProductDetailPage();
    
    // Make it globally accessible for debugging
    window.productDetailPage = productDetailPage;
});

// Export for use in other scripts
window.ProductDetailPage = ProductDetailPage;
