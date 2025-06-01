// TechPulse Products Page Functionality

class ProductsPage {
    constructor() {
        this.currentProducts = [];
        this.filteredProducts = [];
        this.currentView = 'grid';
        this.currentFilters = {
            categories: ['all'],
            minPrice: null,
            maxPrice: null,
            sortBy: 'featured'
        };
        this.searchQuery = '';
        
        this.init();
    }

    init() {
        this.parseURLParameters();
        this.loadProducts();
        this.setupEventListeners();
        this.setupViewToggle();
        this.applyFiltersAndSort();
    }

    // Parse URL parameters for initial filters
    parseURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Check for category parameter
        const category = urlParams.get('category');
        if (category) {
            this.currentFilters.categories = [category];
            this.updateCategoryCheckboxes();
        }

        // Check for search parameter
        const search = urlParams.get('search');
        if (search) {
            this.searchQuery = search;
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = search;
            }
        }
    }

    // Load initial products
    loadProducts() {
        this.showLoading(true);
        
        try {
            // Simulate loading delay for better UX
            setTimeout(() => {
                if (this.searchQuery) {
                    this.currentProducts = searchProducts(this.searchQuery);
                } else {
                    this.currentProducts = [...products];
                }
                
                this.applyFiltersAndSort();
                this.showLoading(false);
            }, 800);
        } catch (error) {
            console.error('Error loading products:', error);
            this.showError('Failed to load products. Please try again.');
            this.showLoading(false);
        }
    }

    // Setup all event listeners
    setupEventListeners() {
        // Category filters
        const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.handleCategoryFilter());
        });

        // Price range filter
        const applyPriceBtn = document.getElementById('apply-price');
        if (applyPriceBtn) {
            applyPriceBtn.addEventListener('click', () => this.handlePriceFilter());
        }

        // Price inputs - apply on Enter
        const priceInputs = document.querySelectorAll('#min-price, #max-price');
        priceInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handlePriceFilter();
                }
            });
        });

        // Sort dropdown
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentFilters.sortBy = e.target.value;
                this.applyFiltersAndSort();
            });
        }

        // Clear filters button
        const clearFiltersBtn = document.getElementById('clear-filters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => this.clearAllFilters());
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }

        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.addEventListener('click', () => this.handleSearch());
        }
    }

    // Setup view toggle (grid/list)
    setupViewToggle() {
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                this.switchView(view);
                
                // Update active button
                viewButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Handle category filter changes
    handleCategoryFilter() {
        const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
        const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
        
        if (selectedCategories.length === 0 || selectedCategories.includes('all')) {
            this.currentFilters.categories = ['all'];
            // Uncheck other categories if 'all' is selected
            if (selectedCategories.includes('all')) {
                document.querySelectorAll('input[name="category"]').forEach(cb => {
                    cb.checked = cb.value === 'all';
                });
            }
        } else {
            this.currentFilters.categories = selectedCategories;
            // Uncheck 'all' if other categories are selected
            const allCheckbox = document.querySelector('input[name="category"][value="all"]');
            if (allCheckbox) {
                allCheckbox.checked = false;
            }
        }
        
        this.applyFiltersAndSort();
    }

    // Handle price filter
    handlePriceFilter() {
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        
        const minPrice = parseFloat(minPriceInput.value) || null;
        const maxPrice = parseFloat(maxPriceInput.value) || null;
        
        if (minPrice !== null && maxPrice !== null && minPrice > maxPrice) {
            alert('Minimum price cannot be greater than maximum price.');
            return;
        }
        
        this.currentFilters.minPrice = minPrice;
        this.currentFilters.maxPrice = maxPrice;
        this.applyFiltersAndSort();
    }

    // Handle search
    handleSearch() {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value.trim();
        
        this.searchQuery = query;
        
        if (query) {
            this.currentProducts = searchProducts(query);
        } else {
            this.currentProducts = [...products];
        }
        
        this.applyFiltersAndSort();
    }

    // Apply all filters and sorting
    applyFiltersAndSort() {
        let filtered = [...this.currentProducts];
        
        // Apply category filter
        if (!this.currentFilters.categories.includes('all')) {
            filtered = filtered.filter(product => 
                this.currentFilters.categories.includes(product.category)
            );
        }
        
        // Apply price filter
        if (this.currentFilters.minPrice !== null || this.currentFilters.maxPrice !== null) {
            filtered = filterProductsByPrice(
                filtered, 
                this.currentFilters.minPrice, 
                this.currentFilters.maxPrice
            );
        }
        
        // Apply sorting
        filtered = sortProducts(filtered, this.currentFilters.sortBy);
        
        this.filteredProducts = filtered;
        this.displayProducts();
        this.updateResultsCount();
    }

    // Display products in the grid
    displayProducts() {
        const productsGrid = document.getElementById('products-grid');
        const noResults = document.getElementById('no-results');
        
        if (!productsGrid) return;
        
        if (this.filteredProducts.length === 0) {
            productsGrid.style.display = 'none';
            if (noResults) {
                noResults.style.display = 'block';
            }
            return;
        }
        
        productsGrid.style.display = 'grid';
        if (noResults) {
            noResults.style.display = 'none';
        }
        
        // Set grid class based on current view
        productsGrid.className = `products-grid ${this.currentView}-view`;
        
        productsGrid.innerHTML = this.filteredProducts.map(product => 
            this.createProductCard(product)
        ).join('');
        
        // Add click handlers for product cards
        this.attachProductCardListeners();
    }

    // Create product card HTML
    createProductCard(product) {
        const discountBadge = product.discount 
            ? `<span class="product-badge">-${product.discount}%</span>` 
            : '';
            
        const originalPrice = product.originalPrice 
            ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` 
            : '';
            
        const discountTag = product.discount 
            ? `<span class="discount">-${product.discount}%</span>` 
            : '';

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <div class="product-category">${this.capitalizeCategory(product.category)}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${this.generateStarRating(product.rating || 4.5)}
                        <span class="rating-count">(${product.reviews || 0})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${originalPrice}
                        ${discountTag}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    // Generate star rating HTML
    generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return `<div class="stars">${starsHTML}</div>`;
    }

    // Attach event listeners to product cards
    attachProductCardListeners() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.add-to-cart-btn')) {
                    const productId = card.dataset.productId;
                    window.location.href = `product-detail.html?id=${productId}`;
                }
            });
        });
    }

    // Switch between grid and list view
    switchView(view) {
        this.currentView = view;
        this.displayProducts();
    }

    // Update results count display
    updateResultsCount() {
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            const count = this.filteredProducts.length;
            const searchText = this.searchQuery ? ` for "${this.searchQuery}"` : '';
            resultsCount.textContent = `${count} product${count !== 1 ? 's' : ''} found${searchText}`;
        }
    }

    // Clear all filters
    clearAllFilters() {
        // Reset filter values
        this.currentFilters = {
            categories: ['all'],
            minPrice: null,
            maxPrice: null,
            sortBy: 'featured'
        };
        
        // Reset UI elements
        document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.checked = cb.value === 'all';
        });
        
        document.getElementById('min-price').value = '';
        document.getElementById('max-price').value = '';
        document.getElementById('sort-select').value = 'featured';
        
        // Reset search
        this.searchQuery = '';
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = '';
        }
        
        // Reload products
        this.currentProducts = [...products];
        this.applyFiltersAndSort();
        
        // Update URL
        window.history.replaceState({}, '', 'products.html');
    }

    // Update category checkboxes based on current filters
    updateCategoryCheckboxes() {
        document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.checked = this.currentFilters.categories.includes(cb.value);
        });
    }

    // Show/hide loading state
    showLoading(show) {
        const loading = document.getElementById('loading');
        const productsGrid = document.getElementById('products-grid');
        
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
        }
        
        if (productsGrid) {
            productsGrid.style.display = show ? 'none' : 'grid';
        }
    }

    // Show error message
    showError(message) {
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
            productsGrid.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Error</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="retry-btn">Try Again</button>
                </div>
            `;
        }
    }

    // Utility function to capitalize category names
    capitalizeCategory(category) {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
}

// Initialize products page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation functionality (shared with main.js)
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

    // Initialize products page
    const productsPage = new ProductsPage();
    
    // Make it globally accessible for debugging
    window.productsPage = productsPage;
});

// Export for use in other scripts
window.ProductsPage = ProductsPage;
