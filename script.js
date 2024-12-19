function calculateLactulose() {
  // Отримання значень із полей вводу
  const term = parseFloat(document.getElementById('storageTerm').value);

  // Перевірка коректності вводу
  if (isNaN(term) || term <= 0) {
    alert('Будь ласка, введіть коректне значення для відсотку лактулози.');
    return;
  }

  // Формули для розрахунку
  const acidity = 100.0 * Math.pow(term, 2) - 21.0 * term + 21.05; // y1
  const pH = -5.0 * Math.pow(term, 2) + 0.45 * term + 6.65;         // y2
  const density = 100.0 * Math.pow(term, 2) - 29.0 * term + 1028.95; // y3
  const protein = -10.0 * Math.pow(term, 2) + 2.10 * term + 2.70;    // y4

  // Додавання результатів в таблицю
  const table = document.getElementById('resultsTable');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${term.toFixed(2)}</td>
    <td>${acidity.toFixed(2)}</td>
    <td>${pH.toFixed(2)}</td>
    <td>${density.toFixed(2)}</td>
    <td>${protein.toFixed(2)}</td>
  `;
  table.appendChild(row);
}