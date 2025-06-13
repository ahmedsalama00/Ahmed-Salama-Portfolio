AOS.init();
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#00bfff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00bfff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }
    }
  },
  "retina_detect": true
});
