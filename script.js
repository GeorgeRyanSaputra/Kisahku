// 1. Intersection Observer for Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Trigger Landing Page Animations on Load
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal-landing').forEach(el => {
    el.classList.add('visible');
  });
});

// 3. Navigation Scroll Effect
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { nav.classList.add('scrolled'); } 
    else { nav.classList.remove('scrolled'); }
  });
}

// 4. Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// 5. Auto Print/Save as PDF (Captures ENTIRE page now)
function generatePDF() {
  alert('TIPS PENTING SAAT SAVE PDF:\n\n1. Tujuan: "Save as PDF"\n2. CENTANG "Background graphics"\n3. Margin: "None"\n\nAgar warna Crimson & Gambarnya keluar semua!');
  window.print();
}