window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: (document.getElementById("loan-amount").value),
    years: (document.getElementById("loan-years").value),
    rate: (document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById('loan-amount');
  const years = document.getElementById('loan-years');
  const rate = document.getElementById('loan-rate');
  amount.value = 10000;
  years.value = 10;
  rate.value = 5;
  const payment = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(payment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const payment = calculateMonthlyPayment(currentValues);
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const array = Object.values(values);
  const amount = array.shift();
  const years = array.shift() * 12;
  const rate =(array.shift() / 100) / 12;
  const p1 = ((1+rate)**years)-1;
  const p2 = rate*((1+rate)**years);
  let payment = amount/(p1/p2);
  payment = payment.toFixed(2);
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');
  if(isNaN(monthly)){
    monthlyPayment.innerText = 'Invalid Rate';
  } 
  else{
    monthlyPayment.innerText = monthly;
  }
}
