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

    const circumference = 691; // 2 * PI * 110
    const scoreValue = 2.4;
    const maxScore = 4.0;
    const percentage = scoreValue / maxScore;
    const targetOffset = circumference * (1 - percentage);

    const levelElement = document.getElementById('hazard-level-label');
    const scoreElement = document.querySelector('.circular-progress-score');

    // Mapping function
    const getLevelInfo = (score) => {
      if (score >= 3.0) return { name: 'Critical', class: 'text-hazard-high', color: '#FF3366' }; // Using high for critical
      if (score >= 2.0) return { name: 'High', class: 'text-hazard-high', color: '#FF3366' };
      if (score >= 1.2) return { name: 'Medium', class: 'text-hazard-medium', color: '#FFB020' };
      return { name: 'Low', class: 'text-hazard-low', color: '#10B981' };
    };

    // Animate the number and label
    if (scoreElement) {
      const obj = { value: 0 };
      anime({
        targets: obj,
        value: scoreValue,
        round: 10,
        easing: 'easeOutQuad',
        duration: 2000,
        update: function() {
          const currentScore = obj.value;
          scoreElement.innerHTML = currentScore.toFixed(1);
          
          if (levelElement) {
            const info = getLevelInfo(currentScore);
            levelElement.innerHTML = info.name;
            // Update color directly for smooth transition if needed, or just classes
            levelElement.style.color = info.color;
          }
        }
      });
    }

    // Animate the circle
    anime({
      targets: '.circular-progress-value',
      strokeDashoffset: [circumference, targetOffset],
      easing: 'easeInOutQuart',
      duration: 2000,
      update: function(anim) {
        // Optional: change circle color based on progress
        const currentOffset = parseFloat(anim.animations[0].currentValue);
        const currentPercent = 1 - (currentOffset / circumference);
        const currentScore = currentPercent * maxScore;
        const info = getLevelInfo(currentScore);
        const circle = document.querySelector('.circular-progress-value');
        if (circle) circle.style.color = info.color;
      }
    });

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
