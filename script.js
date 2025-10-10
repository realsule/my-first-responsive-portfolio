document.addEventListener("DOMContentLoaded", () => {
  let vantaEffects = {};

  // Function to safely apply an effect to a section
  function applyVantaEffect(effectName, selector, options) {
    const element = document.querySelector(selector);
    if (!element) return;

    if (vantaEffects[selector]) vantaEffects[selector].destroy(); // Clean previous effect

    switch (effectName) {
      case "GLOBE":
        vantaEffects[selector] = VANTA.GLOBE({ el: selector, ...options });
        break;
      case "WAVES":
        vantaEffects[selector] = VANTA.WAVES({ el: selector, ...options });
        break;
      case "NET":
        vantaEffects[selector] = VANTA.NET({ el: selector, ...options });
        break;
      case "BIRDS":
        vantaEffects[selector] = VANTA.BIRDS({ el: selector, ...options });
        break;
      case "CELLS":
        vantaEffects[selector] = VANTA.CELLS({ el: selector, ...options });
        break;  
      default:
        console.warn("Unknown VANTA effect:", effectName);

    }
  }

  // 🎨 HOME SECTION - Globe effect
  applyVantaEffect("GLOBE", "#home", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xff0055,
    backgroundColor: 0x0d1117,
  });

  // 🌊 ABOUT SECTION - Waves effect
  applyVantaEffect("WAVES", "#About", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x0077ff,
    shininess: 35,
    waveHeight: 20,
    waveSpeed: 1.2,
    zoom: 0.9,
    backgroundColor: 0x000000,
  });

  // 🕸️ PROJECTS SECTION - Net effect
  applyVantaEffect("NET", "#project", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xffffff,
    backgroundColor: 0x0d1117,
    points: 12.0,
    maxDistance: 25.0,
    spacing: 15.0,
  });

   applyVantaEffect("BIRDS", "#hobbies", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x07192f,
    backgroundAlpha: 1.0,
    color1: 0xff0000,
    color2: 0x0d1ff,
    colorMode: "varianceGradient",
    quantity: 5,
    birdSize: 1.0,
    wingSpan: 30,
    speedLimit: 5,
    separation: 20,
    alignment: 20,
    cohesion: 20,
  });


  applyVantaEffect("CELLS", "#skills", {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,

    // 💡 Custom settings
    color1: 0x008c8c,
    color2: 0xf2e735,
    size: 1.5,
    speed: 1,
  });

  VANTA.RINGS({
  el: "#contact-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x222222,
  color: 0xff8820,
  color2: 0xff8820,
  size: 3.00,
  spacing: 35.00,
  showLines: true
})


  // Cleanup on page unload (important for smooth reloads)
  window.addEventListener("beforeunload", () => {
    Object.values(vantaEffects).forEach(effect => effect.destroy());
  });
});

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