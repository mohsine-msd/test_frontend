
import { Bar } from 'react-chartjs-2';
import React, { useEffect, useState , useContext } from 'react';
import { ArticleContext } from './App';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart_PR = () => {
  const { articles } = useContext(ArticleContext); 

  return (
    <div>
      <Bar 
        data={{ 
          labels: articles.map((article) => article.prix_route ) , 
          datasets: [
            {
              label: 'Revenue P*Qte',
              data: articles.map((article) => article.quantite ), 
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
                'rgba(153, 102, 255, 0.6)', 
                'rgba(255, 159, 64, 0.6)', 
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
              ],
            },
          ],
        }}
        options={{
          responsive: true, 
          plugins: {
            legend: {
              position: 'top', 
            },
            title: {
              display: true,
              text: 'Revenue Pv*qte', 
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'PV ($)', 
              },
            },
            y: {
              title: {
                display: true,
                text: 'Qte', 
              },
              min: 0, 
              max: 100, 
            },
          },
        }} 
      />
      
    </div>
  );
};

export default BarChart_PR;
