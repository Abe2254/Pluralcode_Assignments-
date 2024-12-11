const balanceElement = document.getElementById('balance');
const incomeElement = document.getElementById('income');
const expensesElement = document.getElementById('expenses');
const transactionList = document.getElementById('transaction');
const form = document.getElementById('expense-form');

// Track totals
let totalBalance = 0;
let totalIncome = 0;
let totalExpenses = 0;

// Add event listener to form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // this would get the  input values
  const description = document.getElementById('description').value;
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (!description || !date || !time || isNaN(amount) || amount <= 0) {
    alert('Please fill in all fields with valid values.');
    return;
  }

  // Update totals based on type
  if (type === 'income') {
    totalIncome += amount;
    totalBalance += amount;
  } else if (type === 'expense') {
    totalExpenses += amount;
    totalBalance -= amount;
  }

  // this would  Update DOM
  balanceElement.textContent = `₦${totalBalance.toFixed(2)}`;
  incomeElement.textContent = `₦${totalIncome.toFixed(2)}`;
  expensesElement.textContent = `₦${totalExpenses.toFixed(2)}`;

  // this would Add transaction to history
  const transactionItem = document.createElement('li');
  transactionItem.innerHTML = `
    <strong>${type.toUpperCase()}</strong> - 
    <br>
    ₦${amount.toFixed(2)} <br>

     ${description} 
     <br>
    ${date}|| ${time}                   
  `;
  //this part is the color for the transaction history
  if (type === 'income') {
    transactionItem.style.color = 'green';
  } else {
    transactionItem.style.color = 'red';
  }

  transactionList.appendChild(transactionItem);

  // Clear form
  form.reset();
});
