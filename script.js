
const balanceElement = document.getElementById('balance');
const incomeElement = document.getElementById('income');
const expensesElement = document.getElementById('expenses');
const transactionList = document.getElementById('transaction');
const form = document.getElementById('expense-form');


let totalBalance = 0;
let totalIncome = 0;
let totalExpenses = 0;


form.addEventListener('submit', (event) => {
  event.preventDefault();


  const description = document.getElementById('description').value.trim();
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const amount = parseFloat(document.getElementById('amount').value);

 
  if (!description || !date || !time || isNaN(amount) || amount <= 0) {
    alert('Please fill in all fields with valid values.');
    return;
  }


  if (type === 'income') {
    totalIncome += amount;
    totalBalance += amount;
  } else if (type === 'expense') {
    totalExpenses += amount;
    totalBalance -= amount;
  }


  balanceElement.textContent = `₦${totalBalance.toFixed(2)}`;
  incomeElement.textContent = `₦${totalIncome.toFixed(2)}`;
  expensesElement.textContent = `₦${totalExpenses.toFixed(2)}`;


  const transactionItem = document.createElement('li');
  transactionItem.innerHTML = `
    <strong>${type.toUpperCase()}</strong> - 
    ₦${amount.toFixed(2)} <br>
    ${description} <br>
    ${date} || ${time}
  `;

  
  transactionItem.style.color = type === 'income' ? 'green' : 'red';

  transactionList.appendChild(transactionItem);

  
  form.reset();
});


if (transactionList.children.length === 0) {
  transactionList.innerHTML = '<li>No record</li>';
}