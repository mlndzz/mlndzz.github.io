
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}
