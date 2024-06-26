// Dark mode attempt 2
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
//   Remember the user's preference
function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  // On page load
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  });
  