// Auto-tag sections/cards for scroll-reveal so no HTML edits were needed per page
document.addEventListener('DOMContentLoaded', function(){

  // Mark elements to reveal
  document.querySelectorAll('.pagehead, .section').forEach(function(el){
    el.classList.add('reveal');
  });
  document.querySelectorAll('.service-grid, .review-scroll, .contact-list').forEach(function(el){
    el.classList.add('reveal-group');
  });

  // Reveal immediately if already in view (e.g. above the fold), else on scroll
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-group').forEach(function(el){
    io.observe(el);
  });

  // Nav menu toggle icon rotation sync (works alongside existing inline onclick)
  const toggle = document.querySelector('.menu-toggle');
  const links = document.getElementById('navlinks');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      toggle.classList.toggle('open', links.classList.contains('open'));
    });
  }

  // Animate tracker fill from 0 on load (if present)
  const fill = document.querySelector('.stamp-fill');
  if(fill){
    const target = fill.style.height;
    fill.style.height = '0%';
    requestAnimationFrame(function(){
      setTimeout(function(){ fill.style.height = target; }, 150);
    });
  }
});
