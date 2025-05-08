// Import styles
import '../styles/main.scss';

// Import assets
import guitarSvg from '../assets/images/cguitar_cleaned.svg';
import mugImg from '../assets/images/mug.png';

// Load the guitar SVG into the DOM when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Guitar logo injection
  const logoContainer = document.querySelector('.logo');
  if (logoContainer) {
    // Create an img element for the SVG
    const img = document.createElement('img');
    img.src = guitarSvg;
    img.alt = 'Justin Taylor Music Guitar Logo';
    img.className = 'guitar-logo';

    // Append to the logo container
    logoContainer.appendChild(img);
  }

  // Mug image injection
  const mugImage = document.querySelector('.mug-image');
  if (mugImage) {
    mugImage.src = mugImg;
  }
  
  // Contact form functionality
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create the mailto URL with the form data
      const mailtoUrl = `mailto:justintaylormusic888@gmail.com?subject=Message from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      
      // Open the user's email client
      window.location.href = mailtoUrl;
      
      // Reset the form
      contactForm.reset();
    });
  }
  
  // Navigation functionality
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  // Set active link on page load
  setActiveNavLink();
  
  // Update active link on scroll
  window.addEventListener("scroll", setActiveNavLink);
  
  // Add smooth scrolling to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Function to set active nav link
  function setActiveNavLink() {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }
});