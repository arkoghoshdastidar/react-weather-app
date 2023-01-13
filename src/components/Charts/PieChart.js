import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart } from 'chart.js/auto';
import styles from './pie-chart.module.css';

const aqi = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

const PieChart = ({ gasConcentration }) => {
    const aqiIndex = gasConcentration.list[0]['main']['aqi'] - 1;

    const [dataSet, setDataSet] = useState({
        labels: ['NH3', 'NO', 'NO2', 'O3', 'SO2'],
        datasets: [{
            label: 'Concentration (μh/m³)',
            data: [],
            backgroundColor: []
        }]
    })

    useEffect(() => {
        const list = gasConcentration.list[0]['components'];
        const currConc = [];
        for(let gas in list) {
            if(gas === 'nh3' || gas === 'no' || gas === 'no2' || gas === 'o3' || gas === 'so2') {
                currConc.push(list[gas]);
            }
        }
        setDataSet({
            labels: ['NH3', 'NO', 'NO2', 'O3', 'SO2'],
            datasets: [{
                label: 'Concentration (μh/m³)',
                data: currConc,
                backgroundColor: ['#F43CF7', '#9B3CF7', '#097BEA', '#F7AF3C', 'cyan']
            }]
        })
        // eslint-disable-next-line
    }, []);

    return (<div className={styles['chart-container']}>
        <div className={"fluid"}>
            {`Air Quality - ${aqi[aqiIndex]}`}
        </div>
        <div className={styles['chart']}>
            <Pie data={dataSet}
                options={
                    { maintainAspectRatio: false }
                }
            />
        </div>
    </div>)
}

export default PieChart;