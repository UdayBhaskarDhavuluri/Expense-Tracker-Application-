import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function YearExpense({ expenses }) {
  const [chart, setChart] = useState(null);
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    if (expenses && expenses.length > 0) {
      const data = expenses.map((expense) => expense.total);

      if (chart) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.update();
      } else {
        const ctx = document.getElementById('myChart').getContext('2d');
        const newChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Total Expense',
                data: data,
                backgroundColor: data.map((total) => `rgba(79, 37, 90, ${total / 10000})`),
                borderColor: 'rgba(79, 37, 90, 1)',
                borderWidth: 3,
                borderRadius: 5,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 100,
                    max: 1000,
                    fontColor: 'purple',
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: 'white',
                  },
                },
              ],
            },
          },
        });
        setChart(newChart);
      }
    }
  }, [expenses, chart]);

  return <canvas id="myChart" />;
}

export default YearExpense;
