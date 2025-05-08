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

  function setActiveNavLink() {
    let current = '';
    const scrollY = container.scrollTop;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
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

  // Set up scroll event listener
  container.addEventListener('scroll', setActiveNavLink);

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      container.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // Initialize active state with a small delay to ensure DOM is ready
  setTimeout(() => {
    setActiveNavLink();
  }, 100);
});