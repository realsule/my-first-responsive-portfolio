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

  // Cleanup on page unload (important for smooth reloads)
  window.addEventListener("beforeunload", () => {
    Object.values(vantaEffects).forEach(effect => effect.destroy());
  });
});
