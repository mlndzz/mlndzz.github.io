
const toggle = document.getElementById('darkModeToggle');
const icon = document.querySelector('.switch .icon');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  icon.textContent = toggle.checked ? '🌙' : '☀️';
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
  icon.textContent = '🌙';
} else {
  icon.textContent = '☀️';
}
