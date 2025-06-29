// script.js
const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
const chartCanvas = document.getElementById('expense-chart');
let expenses = [];
let chart;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  if (!description || isNaN(amount) || amount <= 0 || !category) return;

  const expense = { description, amount, category };
  expenses.push(expense);

  updateList();
  updateChart();
  form.reset();
});

function updateList() {
  list.innerHTML = '';
  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.textContent = `${expense.description} - $${expense.amount.toFixed(2)} (${expense.category})`;
    list.appendChild(li);
  });
}

function updateChart() {
  const categoryTotals = {};

  expenses.forEach(exp => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
  });

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(chartCanvas, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Expenses',
        data: data,
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
    }
}
  });
}
