import React from 'react';

import { Bar, Chart } from 'react-chartjs-2';

import './BarChart.css';

const Barchart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        beginAtZero: true
                    }
                }],
        },          
    };


    return (
        <div className="d-flex justify-content-around align-items-center barchart-container">
            <Bar data={data}  options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Gesamtinvestment seit Beginn",
                        font: {size: 18, style: 'normal', weight: 'normal'},
                        color: 'white'
                    }
                }
            }} style={{"maxHeight": "100%", "maxWidth": "100%"}}/>
        </div>
    );
}

export default Barchart;
