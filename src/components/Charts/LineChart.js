import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import styles from './line-chart.module.css';

const LineChart = ({ weatherForecast }) => {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [{
      label: 'Temperature',
      data: [],
      borderColor: '#000066',
      backgroundColor: '#CCCCCC'
    }]
  });

  useEffect(() => {
    const chartLabels = [];
    const chartData = [];

    for (let i = 0; i < 8; i++) {
      chartData.push((weatherForecast.list[i].main.feels_like - 273.15).toFixed());
      const time = (parseInt(weatherForecast.list[i].dt_txt.substring(11, 13)) + 5 )%24;
      chartLabels.push(time+":30");
    }

    setDataSet({
      labels: chartLabels,
      datasets: [{
        label: 'Temperature',
        data: chartData,
        borderColor: '#000066',
        backgroundColor: '#CCCCCC'
      }]
    });
  }, [weatherForecast]);

  return <div className={styles['chart-container']}>
    <div className={styles['chart-heading']}>Todays Temperature °C</div>
    <div className={styles['chart']}>
      <Line data={dataSet} options={
        { maintainAspectRatio: false }
      } />
    </div>
  </div>

}

export default LineChart;