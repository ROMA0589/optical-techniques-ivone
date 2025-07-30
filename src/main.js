// Main JavaScript file for Técnicas em Óptica website
// Author: GitHub Copilot
// Description: Interactive features and form handling

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileNavigation();
    initSmoothScrolling();
    initScrollEffects();
    initContactButtons();
    
    console.log('✅ Website initialized successfully');
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu-active');
        navToggle.classList.toggle('nav-toggle-active');
        
        // Add ARIA attributes for accessibility
        const isExpanded = navMenu.classList.contains('nav-menu-active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-menu-active');
            navToggle.classList.remove('nav-toggle-active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/**
 * Contact Buttons Handling
 */
function initContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Show notification based on button type
            if (this.classList.contains('whatsapp-btn')) {
                showNotification('Abrindo WhatsApp...', 'success');
            } else if (this.classList.contains('email-btn')) {
                showNotification('Abrindo cliente de email...', 'success');
            } else if (this.classList.contains('phone-btn')) {
                showNotification('Iniciando chamada...', 'success');
            }
        });
        
        // Add hover effect for better UX
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll effects and animations
 */
function initScrollEffects() {
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttled scroll event
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });
    
    // Initial call
    updateActiveNavLink();
    
    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

/**
 * Show notification messages
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: type === 'success' ? '#00a86b' : '#2c5aa0',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        zIndex: '10000',
        fontSize: '14px',
        maxWidth: '300px',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/**
 * Add CSS for mobile navigation states
 */
function addMobileNavStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                gap: 0;
                padding: 1rem 0;
                box-shadow: 0 4px 20px rgba(44, 90, 160, 0.15);
                transform: translateY(-20px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-menu.nav-menu-active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
                display: flex;
            }
            
            .nav-menu li {
                padding: 0.5rem 1rem;
            }
            
            .nav-menu a {
                display: block;
                padding: 0.5rem 0;
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.nav-toggle-active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
            
            .header-scrolled {
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
            }
        }
        
        .nav-menu a.active {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .nav-menu a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
}

// Add mobile navigation styles
addMobileNavStyles();
