const ctx = document.getElementById('chart');
const chartContainer = document.getElementById('chart-container'); 


const chartWidth = 400; 
const chartHeight = 400; 


ctx.width = chartWidth;
ctx.height = chartHeight;


const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: false, 
    maintainAspectRatio: false 
  }
});


chartContainer.style.width = chartWidth + 'px';
chartContainer.style.height = chartHeight + 'px';
