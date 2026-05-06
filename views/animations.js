document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        
        // Trigger specific anime.js animations if needed
        if (entry.target.dataset.anime === 'danger-index') {
          animateDangerIndex();
          // Unobserve so it doesn't re-trigger when scrolling back up
          revealObserver.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Add click listener to re-trigger animation manually
  const dangerIndexSection = document.querySelector('[data-anime="danger-index"]');
  if (dangerIndexSection) {
    dangerIndexSection.style.cursor = 'pointer';
    dangerIndexSection.addEventListener('click', () => {
      animateDangerIndex();
    });
  }

  // Anime.js Animations
  function animateDangerIndex() {
    if (typeof anime === 'undefined') return;

    // Reset values before animating to ensure a fresh start on click
    const scoreElement = document.querySelector('.circular-progress-score');
    if (scoreElement) {
      const obj = { value: 0 };
      anime({
        targets: obj,
        value: 2.4,
        round: 10,
        easing: 'easeOutQuad',
        duration: 2000,
        update: function() {
          scoreElement.innerHTML = obj.value.toFixed(1);
        }
      });
    }

    // Animate progress bars - reset width first
    const bars = document.querySelectorAll('.progress-fill-low, .progress-fill-medium, .progress-fill-high');
    bars.forEach(bar => bar.style.width = '0%');
    
    anime({
      targets: '.progress-fill-low, .progress-fill-medium, .progress-fill-high',
      width: (el) => el.dataset.width + '%',
      easing: 'easeOutQuart',
      duration: 1500,
      delay: anime.stagger(200)
    });
  }

  // Satellite Coordinates "Decryption" Effect
  const coordElement = document.getElementById('coord-card');
  if (coordElement && typeof anime !== 'undefined') {
    const finalCoords = coordElement.innerText;
    const chars = "0123456789. °NSEW";
    let iterations = 0;
    
    const interval = setInterval(() => {
      coordElement.innerText = finalCoords
        .split("")
        .map((char, index) => {
          if (index < iterations) return finalCoords[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      if (iterations >= finalCoords.length) clearInterval(interval);
      iterations += 1/3;
    }, 30);
  }
});
