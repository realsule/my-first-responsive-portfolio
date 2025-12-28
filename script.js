
 // Optimized JavaScript: Enhances UX with subtle interactions
        // No heavy libraries; vanilla JS for performance

document.addEventListener('DOMContentLoaded', function() {
            const socialLinks = document.querySelectorAll('.social-link');
            const card = document.querySelector('.contact-card');
            // Staggered entrance animation trigger (enhances CSS animation)
            socialLinks.forEach((link, index) => {
                link.style.animationPlayState = 'running';
            });
            // Add click ripple effect for "crazy" feedback (subtle, performant)
            socialLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Create ripple element
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        pointer-events: none;
                    `;
                    this.style.position = 'relative';
                    this.appendChild(ripple);
                    // Clean up after animation
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
                // Keyboard accessibility: Add visual feedback
                link.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.click();
                    }
                });
            });
              // Parallax tilt effect on card hover (simple JS for 3D "crazy" feel)
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                this.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    scale(1.02)
                `;
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
        });
           // CSS for ripple animation (injected via JS)
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);


                // Optimized JavaScript: Animates progress bars and counters for "crazy" UX
        // Vanilla JS only; performant with Intersection Observer for scroll-triggered animations
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-bar');
            const items = document.querySelectorAll('.experience-item');
            // Staggered entrance animation trigger
            items.forEach((item, index) => {
                item.style.animationPlayState = 'running';
            });
            // Animate progress bars on scroll into view (using Intersection Observer for efficiency)
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px'
            };
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const percent = parseInt(bar.dataset.percent);
                        bar.style.width = percent + '%';
                        bar.classList.add('animate');
                        bar.setAttribute('aria-valuenow', percent);
                        // Optional: Counter animation for percentage text (subtle "crazy" pulse)
                        const counter = bar.querySelector('::after'); // Pseudo-element, but we can simulate with JS if needed
                        // For more "crazy": Add a quick scale pulse on complete
                        bar.style.transition = 'width 1.5s ease-out, transform 0.2s ease';
                        setTimeout(() => {
                            bar.style.transform = 'scaleX(1.05)';
                            setTimeout(() => {
                                bar.style.transform = 'scaleX(1)';
                            }, 200);
                        }, 1500);
                        observer.unobserve(bar); // Animate only once
                    }
                });
            }, observerOptions);
             progressBars.forEach(bar => {
                observer.observe(bar);
            });
            // Hover enhancements: Add a "sparkle" effect on item hover (simple JS particles for "crazy" flair)
            items.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    createSparkles(this);
                });
                // Keyboard support for accessibility
                item.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.focus(); // Trigger hover-like state if needed
                    }
                });
            });
          // Function to create subtle sparkles (performant, limited particles)
            function createSparkles(element) {
                for (let i = 0; i < 5; i++) { // Limit to 5 for performance
                    const sparkle = document.createElement('div');
                    sparkle.style.cssText = `
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        background: #2a5298;
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 10;
                        animation: sparkle 0.8s ease-out forwards;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                    `;
                    element.appendChild(sparkle);
                    setTimeout(() => {
                        sparkle.remove();
                    }, 800);
                }
            }
        });
          // CSS for sparkle animation (injected via JS for modularity)
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkle {
                0% {
                    opacity: 1;
                    transform: scale(0) translateY(0);
                }
                50% {
                    opacity: 0.8;
                    transform: scale(1) translateY(-10px);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(sparkleStyle);
