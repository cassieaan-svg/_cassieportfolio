// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
  document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
    document.body.style.overflow = '';
  });
});

// Experience tabs
function showTab(id, btn) {
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.exp-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// Project pane toggle
function switchPane(type, btn) {
  document.querySelectorAll('.tog-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.projects-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pane-' + type).classList.add('active');
}
