// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      /*event.preventDefault();*/
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Add effect to hero text
  const heroText = document.querySelector('.hero h2');
  let isGlowing = true;
  setInterval(() => {
    heroText.style.textShadow = isGlowing
      ? '0px 0px 20px #ffeb3b'
      : 'none';
    isGlowing = !isGlowing;
  }, 1000);
  
