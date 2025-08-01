const toggle = document.getElementById('darkModeToggle');
const icon = document.querySelector('.switch .icon');

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  icon.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

toggle.addEventListener('change', () => applyTheme(toggle.checked));

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  toggle.checked = true;
  applyTheme(true);
} else {
  applyTheme(false);
}

// Move toggle above footer when near bottom
window.addEventListener('scroll', () => {
  const toggleSwitch = document.querySelector('.toggle-switch');
  const footer = document.querySelector('footer');
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (footerRect.top < windowHeight - 80) {
    toggleSwitch.style.bottom = `${windowHeight - footerRect.top + 20}px`;
  } else {
    toggleSwitch.style.bottom = '20px';
  }
});
