
const toggle = document.getElementById('darkModeToggle');
const icon = document.querySelector('.switch .icon');
function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  icon.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
toggle.addEventListener('change', () => applyTheme(toggle.checked));
// Initialize
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  toggle.checked = true;
  applyTheme(true);
} else {
  applyTheme(false);
}

// Shrinking header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
