function toggleTheme() {
  var html = document.documentElement;
  var isDark = html.dataset.theme
    ? html.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  var next = isDark ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
  updateToggleLabel();
}

function updateToggleLabel() {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var isDark = html.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  btn.textContent = isDark ? 'light' : 'dark';
}

var html = document.documentElement;
document.addEventListener('DOMContentLoaded', updateToggleLabel);
