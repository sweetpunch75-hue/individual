// --- EXERCISE 1: Counter (Stops at 0) ---
const counterValue = document.getElementById('counterValue');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');

let count = 0;

function updateCounter() {
  counterValue.textContent = count;
  if (count > 0) {
    counterValue.style.color = '#2e7d32'; // Green for positive
  } else {
    counterValue.style.color = '#333333'; // Default for zero
  }
}

incrementBtn.addEventListener('click', () => { 
  count++; 
  updateCounter(); 
});

decrementBtn.addEventListener('click', () => { 
  // Only decrease if count is greater than 0
  if (count > 0) {
    count--; 
    updateCounter(); 
  }
});

resetBtn.addEventListener('click', () => { 
  count = 0; 
  updateCounter(); 
});