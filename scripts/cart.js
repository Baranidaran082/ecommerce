// // TechPulse Shopping Cart Functionality

// class ShoppingCart {
//     constructor() {
//         this.cart = this.loadCart();
//         this.updateCartIcon();
//     }

//     // Load cart from localStorage
//     loadCart() {
//         try {
//             const cartData = localStorage.getItem('techpulse_cart');
//             return cartData ? JSON.parse(cartData) : [];
//         } catch (error) {
//             console.error('Error loading cart:', error);
//             return [];
//         }
//     }

//     // Save cart to localStorage
//     saveCart() {
//         try {
//             localStorage.setItem('techpulse_cart', JSON.stringify(this.cart));
//             this.updateCartIcon();
//         } catch (error) {
//             console.error('Error saving cart:', error);
//         }
//     }

//     // Add product to cart
//     addToCart(productId, quantity = 1) {
//         const product = getProductById(productId);
//         if (!product) {
//             console.error('Product not found:', productId);
//             return false;
//         }

//         const existingItemIndex = this.cart.findIndex(item => item.id === productId);
        
//         if (existingItemIndex !== -1) {
//             // Update quantity if product already in cart
//             this.cart[existingItemIndex].quantity += quantity;
//         } else {
//             // Add new product to cart
//             const cartItem = {
//                 id: product.id,
//                 name: product.name,
//                 price: product.price,
//                 image: product.image,
//                 category: product.category,
//                 quantity: quantity
//             };
//             this.cart.push(cartItem);
//         }

//         this.saveCart();
//         this.showAddToCartFeedback(product.name);
//         return true;
//     }

//     // Remove product from cart
//     removeFromCart(productId) {
//         this.cart = this.cart.filter(item => item.id !== productId);
//         this.saveCart();
//     }

//     // Update quantity of item in cart
//     updateQuantity(productId, newQuantity) {
//         if (newQuantity <= 0) {
//             this.removeFromCart(productId);
//             return;
//         }

//         const itemIndex = this.cart.findIndex(item => item.id === productId);
//         if (itemIndex !== -1) {
//             this.cart[itemIndex].quantity = newQuantity;
//             this.saveCart();
//         }
//     }

//     // Clear entire cart
//     clearCart() {
//         this.cart = [];
//         this.saveCart();
//     }

//     // Get cart contents
//     getCart() {
//         return this.cart;
//     }

//     // Get total number of items in cart
//     getTotalItems() {
//         return this.cart.reduce((total, item) => total + item.quantity, 0);
//     }

//     // Get total price of items in cart
//     getTotalPrice() {
//         return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//     }

//     // Update cart icon with current count
//     updateCartIcon() {
//         const cartCountElement = document.getElementById('cart-count');
//         if (cartCountElement) {
//             const totalItems = this.getTotalItems();
//             cartCountElement.textContent = totalItems;
//             cartCountElement.style.display = totalItems > 0 ? 'block' : 'none';
//         }
//     }

//     // Show visual feedback when item is added to cart
//     showAddToCartFeedback(productName) {
//         // Create and show a temporary notification
//         const notification = document.createElement('div');
//         notification.className = 'cart-notification';
//         notification.innerHTML = `
//             <div class="notification-content">
//                 <i class="fas fa-check-circle"></i>
//                 <span>Added "${productName}" to cart!</span>
//             </div>
//         `;
        
//         // Add notification styles
//         notification.style.cssText = `
//             position: fixed;
//             top: 20px;
//             right: 20px;
//             background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-green) 100%);
//             color: var(--primary-white);
//             padding: 1rem 1.5rem;
//             border-radius: 8px;
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//             z-index: 1001;
//             transform: translateX(400px);
//             transition: transform 0.3s ease;
//             max-width: 300px;
//         `;

//         document.body.appendChild(notification);

//         // Animate in
//         setTimeout(() => {
//             notification.style.transform = 'translateX(0)';
//         }, 100);

//         // Remove after delay
//         setTimeout(() => {
//             notification.style.transform = 'translateX(400px)';
//             setTimeout(() => {
//                 if (notification.parentNode) {
//                     notification.parentNode.removeChild(notification);
//                 }
//             }, 300);
//         }, 3000);
//     }
// }

// // Initialize shopping cart
// const shoppingCart = new ShoppingCart();

// // Global functions for easy access
// function addToCart(productId, quantity = 1) {
//     return shoppingCart.addToCart(productId, quantity);
// }

// function removeFromCart(productId) {
//     shoppingCart.removeFromCart(productId);
//     // Trigger cart page reload if on cart page
//     if (window.location.pathname.includes('cart.html')) {
//         window.location.reload();
//     }
// }

// function updateCartQuantity(productId, quantity) {
//     shoppingCart.updateQuantity(productId, quantity);
// }

// function clearCart() {
//     shoppingCart.clearCart();
// }

// function getCart() {
//     return shoppingCart.getCart();
// }

// function getTotalItems() {
//     return shoppingCart.getTotalItems();
// }

// function getTotalPrice() {
//     return shoppingCart.getTotalPrice();
// }

// function saveCart(cart) {
//     shoppingCart.cart = cart;
//     shoppingCart.saveCart();
// }

// function updateCartIcon() {
//     shoppingCart.updateCartIcon();
// }

// // Cart icon click handler
// document.addEventListener('DOMContentLoaded', function() {
//     const cartIcon = document.getElementById('cart-icon');
//     if (cartIcon) {
//         cartIcon.addEventListener('click', function() {
//             window.location.href = 'cart.html';
//         });
//     }
// });

// // Add event listeners for add to cart buttons
// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
//         e.preventDefault();
        
//         const button = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
//         const productCard = button.closest('.product-card');
        
//         if (productCard) {
//             const productId = parseInt(productCard.dataset.productId);
//             if (productId) {
//                 addToCart(productId);
//             }
//         }
//     }
// });

// // Export cart functionality
// window.shoppingCart = shoppingCart;
// window.addToCart = addToCart;
// window.removeFromCart = removeFromCart;
// window.updateCartQuantity = updateCartQuantity;
// window.clearCart = clearCart;
// window.getCart = getCart;
// window.getTotalItems = getTotalItems;
// window.getTotalPrice = getTotalPrice;
// window.saveCart = saveCart;
// window.updateCartIcon = updateCartIcon;
