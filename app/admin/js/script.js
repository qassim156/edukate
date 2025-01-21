const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 5
    }]
  },
  options: {
    
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