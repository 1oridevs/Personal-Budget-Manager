import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

function Insights({ transactions }) {
  const expenseData = transactions.filter((t) => t.type === 'expense');
  const categories = [...new Set(expenseData.map((t) => t.category))];
  const data = categories.map((category) =>
    expenseData
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        data,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
      },
    ],
  };

  return (
    <div>
      <h2>Insights</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default Insights;
