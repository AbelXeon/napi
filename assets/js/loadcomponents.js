document.addEventListener('DOMContentLoaded', function () {
  // Load navbar
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // After navbar is loaded, run navbar-related logic
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
          this.classList.toggle('open');
          navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a, .mobile-connect').forEach(link => {
          link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('active');
          });
        });
      }
    });

  // Load footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  // GSAP connect button hover animation
  const connectButtons = document.querySelectorAll('.connect-btn');
  connectButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button.querySelector('.arrow'), { x: 5, duration: 0.3 });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button.querySelector('.arrow'), { x: 0, duration: 0.3 });
    });
  });

  // Dynamic text color based on background
  function updateTextColorBasedOnBackground() {
    const bgColor = getComputedStyle(document.body).backgroundColor;
    const rgb = bgColor.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
      const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
      const isDark = brightness < 128;

      document.documentElement.style.setProperty('--text-color', isDark ? '#ffffff' : '#000000');
      document.documentElement.style.setProperty('--hover-color', isDark ? '#dddddd' : '#555555');
      document.documentElement.style.setProperty('--button-bg', isDark ? '#ffffff' : '#000000');
      document.documentElement.style.setProperty('--button-text', isDark ? '#000000' : '#ffffff');
    }
  }

  updateTextColorBasedOnBackground();
});
