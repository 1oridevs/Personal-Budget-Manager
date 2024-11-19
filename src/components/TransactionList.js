import React from 'react';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)} - {t.category} ({t.date})
            <button onClick={() => deleteTransaction(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
