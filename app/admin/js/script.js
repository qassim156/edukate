const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Male Students', 'Female Students'],
    datasets: [{
      label: 'Number in Total',
      data: [1900, 909],
      borderWidth: 2,
      backgroundColor: [
        'rgba(0, 105, 217, 0.39)',
        'rgba(0, 157, 255, 0.32)'
      ],
    }]
  },
  options: {
    scales: {
      y: {
        data: [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000],
        beginAtZero: true 
      }
    }
  }
});

const ctx2 = document.getElementById('myChart-1');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Students',
      data: [12, 19, 33, 5, 92, 93],
      borderWidth: 5
    }]
  },
  options: {
    
  }
});