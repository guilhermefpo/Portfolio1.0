particlesJS("particles-js", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    color: { value: "#1348f5" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: false,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

gsap.from(".titulo", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scale: 0,
});

gsap.from("header .lead", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".profile-img", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".sobre h2", {
  y: 100,
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".skill-card", {
  opacity: 0,
  y: 100,
  // duration: 1,
  stagger: 0.2,

  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    // toggleActions: "play reverse play reverse",
    scrub: 1,
    end: "top 10%",
  },
});
