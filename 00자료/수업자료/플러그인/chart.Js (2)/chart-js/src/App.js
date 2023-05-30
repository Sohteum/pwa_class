import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function App() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'myGraph',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2,
    }]
  }
  const options ={
    scales: {
      y: {
        beginAtZero: true,
        min: -100,
        max: 100,
        stepSize:10,
        grid: {
          display: false,
        },
        ticks: {
          stepSize:10,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'rgb(255, 99, 132)'
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
  return (
    <>
      <Chart style={{width:'100%',height:'500px'}} type='line' data={data} options={options} />
    </>
  );
}

export default App;
