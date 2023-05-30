const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'myGraph',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: -100,
        max: 100,
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
})