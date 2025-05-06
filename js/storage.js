/**
 * Handles localStorage operations for todos and theme.
 * Functions are globally available to app.js.
 */

// Load todos from localStorage
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
  
  // Save todos to localStorage
  function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // Get theme from localStorage
  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }
  
  // Save theme to localStorage
  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }