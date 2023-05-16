import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ExpenseItemStyles.css'
import {Chart, ArcElement, Legend, Tooltip, DoughnutController, PieController, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'
Chart.register(ArcElement, Legend, Tooltip, DoughnutController, PieController, CategoryScale, LinearScale, PointElement, LineElement);


function ExpensesPieChart({data}) {
    console.log(" props ", data)
  const pieData = {
    labels: data.map(product => product.productname),
    datasets: [
      {
        data: data.map(product => product.productprice),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8BC34A',
          '#9C27B0',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8BC34A',
          '#9C27B0',
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + ' votes';
          },
        },
      },
      datalabels: {
        color: 'blue',
        display: true,
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex] + ': ' + value;
        }
      }
    },
  };


  return (
    <div className='pieContainer'>
      <h2 className='heading'>Expenses in Pie Chart</h2>
    <Pie  data={pieData} options =  {options} />
    </div>
  );
}

export default ExpensesPieChart;
