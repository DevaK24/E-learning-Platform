document.addEventListener('DOMContentLoaded', () => {
  // Image switching for hero section
  let currentImage = 0;
  const heroImages = [
      'boy.jpg',
      'pexels-karolina-grabowska-7281589.jpg'
  ];

  function switchHeroImage() {
      console.log('Switching to image: ', heroImages[currentImage]);
      currentImage = (currentImage + 1) % heroImages.length;
      const imagePath = heroImages[currentImage];
      const image = new Image();
      image.src = imagePath;
      console.log('Trying to load image: ', imagePath);

      image.onload = () => {
          console.log('Image loaded successfully');
          document.getElementById('home').style.backgroundImage = `url(${imagePath})`;
      };

      image.onerror = () => {
          console.error('Failed to load image, using fallback');
          document.getElementById('home').style.backgroundImage = 'url(pexels-buro-millennial-636760-1438081.jpg)';
      };
  }

  setInterval(switchHeroImage, 3000); // Change image every 3 seconds

  // Smooth Scrolling for Navbar Links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = e.target.getAttribute('href');

      // Check if it's an internal link (not leading to a new page)
      if (!href.includes('.html')) {
        e.preventDefault();
        const targetId = href.slice(1); // Remove # from href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed navbar
            behavior: 'smooth'
          });
        }

        // Close mobile menu after click
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Back-to-Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.classList.add('back-to-top', 'btn', 'btn-primary');
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.display = 'none'; // Hidden initially
  backToTopBtn.style.zIndex = '1000';

  document.body.appendChild(backToTopBtn);

  // Show/Hide Back-to-Top Button on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Scroll to Top on Button Click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Animate Elements on Scroll
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50,
  });

  // Highlight Active Navbar Link on Scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // Offset for fixed navbar
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
