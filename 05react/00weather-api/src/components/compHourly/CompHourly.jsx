import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompLoader from '../compLoader/CompLoader';
import CompHourlyLi from './CompHourlyLi';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const CompHourly = () => {

  const { _weatherData } = useContext(AppContext)

  let hourlyData
  let chartArr//chartData dataset data값
  let chartData//chart엘리먼트 Data속성값
  let chartOptions//chart엘리먼트 options속성값
  if (_weatherData) {
    hourlyData = _weatherData.hourly //배열에서 hourly만 꺼내 사용예정
    //chartJs 기본데이터
    chartArr = hourlyData.map(v => parseFloat((v.temp - 273.15).toFixed(1)))  //차트의온도를 그리는 배열
    //데이터초기화
    chartData = {
      labels: new Array(48).fill(''),
      datasets: [{
        label: 'myGraph',
        data: chartArr,
        borderWidth: 1,
        fill: false,
        borderColor: '#4378a3',
        tension: 0.2,
      }]
    }
    //chartJs옵션
    chartOptions = {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: true,
          beginAtZero: true,
          min: -50,
          max: 50,
          stepSize: 10, //10씩 단위 끊어서 표시해준다는거
          grid: {
            color: '#8ed1f1'
          },
          ticks: {
            display: true,
            color: "#8ed1f1",
            border: 0,
          },
        },
      },
      plugins: {
        legend: {
          display: false,//수정
          position: 'top',
          labels: {
            color: '#FFF'
          }
        },//legend
        datalabels: {
          display: true,
          color: "#4378a3",
          align: 'top',
        },//데이터값표시하는거
      },//plguins
      responsive: true,
      maintainAspectRatio: false,
    }
  }//if

  return (
    <section className="comp-hourly">
      <div className="section-inner">
        <h2>Hourly</h2>
        {
          (_weatherData)
            ?
            <div className="wrap">
              <ul>
                {
                  hourlyData.map(v => <CompHourlyLi key={v.dt} data={v} />)
                }
              </ul>
              <div className="chart-wrap">
                <Chart type='line' data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
              </div>
            </div>
            :
            <CompLoader />
        }
      </div>
    </section>
  );
};

export default CompHourly;