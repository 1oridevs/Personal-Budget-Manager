import React from 'react';

function Header({ budget, setBudget, transactions }) {
  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <header>
      <h1>Personal Budget Manager</h1>
      <div className="budget-summary">
        <div>
          <h3>Total Income:</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h3>Total Expenses:</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div>
          <h3>Remaining Budget:</h3>
          <p>${(budget - totalExpenses).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <label>
          Set Budget:
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </label>
      </div>
    </header>
  );
}

export default Header;
