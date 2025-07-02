
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('dark-theme') ? 'light' : 'dark';
    
    root.classList.toggle('dark-theme');
    localStorage.setItem('theme', currentTheme);
    updateToggleButton(currentTheme);
  }
  function updateToggleButton(theme) {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.innerHTML = theme === 'dark' ? '🌙' : '☀️';
  }
  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const root = document.documentElement;
    
    if (savedTheme === 'dark') {
        root.classList.add('dark-theme');
    }
    
    updateToggleButton(savedTheme);
  }
  document.addEventListener('DOMContentLoaded', setInitialTheme); 