const { DateTime } = luxon;
  
  // Store selected date at higher scope
  let selectedBirthDate = null;

  // Initialize date picker
  document.getElementById("myDatePicker").addEventListener('change', function() {
    selectedBirthDate = this.value; // Updates the shared variable
    console.log("Date selected:", selectedBirthDate);
  });

  // Age calculation function
  function calculateAge() {
    if (!selectedBirthDate) {
      alert("Please select a birth date first!");
      return;
    }

    const now = DateTime.now();
    const birth = DateTime.fromISO(selectedBirthDate);
    const age = now.diff(birth, ['years', 'months']).toObject();
    
   const result =  `You are ${age.years} years ${Math.floor(age.months)} months old`; 
    document.getElementById("exact-age").textContent = result;
    
    return {
      years: age.years,
      months: age.months,
      exact: result
    };
  }

// Usage
const age = calculateAge();
console.log(age.exact)
