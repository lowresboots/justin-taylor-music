// Import styles
import '../styles/main.scss';

// Import assets
import guitarSvg from '../assets/images/cguitar_cleaned.svg';
import mugImg from '../assets/images/mug.png';

// Load the guitar SVG into the DOM when the page loads
document.addEventListener('DOMContentLoaded', () => {
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

  const mugImage = document.querySelector('.mug-image');
  if (mugImage) {
    mugImage.src = mugImg;
  }
});