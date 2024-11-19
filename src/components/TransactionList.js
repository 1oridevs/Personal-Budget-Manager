import React from 'react';

function TransactionList({ transactions, deleteTransaction }) {
    return (
      <div>
        <h2>Transaction List</h2>
        <ul className="transaction-list">
          {transactions.length === 0 ? (
            <p>No transactions found</p>
          ) : (
            transactions.map((t) => (
              <li key={t.id}>
                <span>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)} - {t.category} ({t.date})
                </span>
                <button onClick={() => deleteTransaction(t.id)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
  
export default TransactionList;
