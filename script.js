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


  // Cleanup on page unload (important for smooth reloads)
  window.addEventListener("beforeunload", () => {
    Object.values(vantaEffects).forEach(effect => effect.destroy());
  });
});
