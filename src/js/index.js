// Import styles
import '../styles/main.scss';

// Import assets
import guitarSvg from '../assets/images/cguitar_cleaned.svg';
import mugImg from '../assets/images/mug.png';

document.addEventListener('DOMContentLoaded', () => {
  // Inject guitar logo
  const logoContainer = document.querySelector('.logo');
  if (logoContainer) {
    const img = document.createElement('img');
    img.src = guitarSvg;
    img.alt = 'Justin Taylor Music Guitar Logo';
    img.className = 'guitar-logo';
    logoContainer.appendChild(img);
  }

  // Inject mug image
  const mugImage = document.querySelector('.mug-image');
  if (mugImage) {
    mugImage.src = mugImg;
  }

  // Handle contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const mailtoUrl = `mailto:justintaylormusic888@gmail.com?subject=Message from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      window.location.href = mailtoUrl;
      contactForm.reset();
    });
  }

  // Navigation logic
  const container = document.querySelector('.container');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  let isScrolling = false;

  // Debounce function to prevent excessive firing
  function debounce(fn, delay) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(context, args), delay);
    };
  }

  // Set the active nav link based on scroll position
  function setActiveNavLink() {
    // Critical fix: Don't update nav highlighting during programmatic scrolling
    if (isScrolling) return;

    let current = '';
    const scrollY = container.scrollTop;
    const offset = window.innerWidth <= 768 ? 150 : 100; // Larger offset for mobile

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - offset) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Use debounced scroll listener
  container.addEventListener('scroll', debounce(setActiveNavLink, 150));

  // Click listener for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Immediate visual feedback
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      isScrolling = true;

      container.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });

      // Use a slightly longer timeout to ensure scroll completes
      setTimeout(() => {
        isScrolling = false;
        setActiveNavLink(); // Final update after scroll completes
      }, 650); // Slightly longer than typical smooth scroll time
    });
  });

  // Initial activation on load with a small delay
  setTimeout(() => {
    setActiveNavLink();
  }, 100);
});