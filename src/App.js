import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Insights from './components/Insights';
import Filters from './components/Filters';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState({
    category: '',
    startDate: '',
    endDate: '',
  });
  const filteredTransactions = transactions.filter((t) => {
    const matchesCategory = filter.category ? t.category === filter.category : true;
    const matchesStartDate = filter.startDate ? new Date(t.date) >= new Date(filter.startDate) : true;
    const matchesEndDate = filter.endDate ? new Date(t.date) <= new Date(filter.endDate) : true;
  
    return matchesCategory && matchesStartDate && matchesEndDate;
  });

  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem('budget');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('budget', budget);
  }, [transactions, budget]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };
  const uniqueCategories = [
    ...new Set(transactions.map((t) => t.category)),
  ];

  return (
    <div className="app">
      <Header budget={budget} setBudget={setBudget} transactions={transactions} />
      <Filters
        filter={filter}
        setFilter={setFilter}
        categories={uniqueCategories}
      />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
      <Insights transactions={transactions} />
    </div>
  );
}

export default App;
