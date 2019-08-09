// const  = require('./path0')
require(['path0'], function (path0) {
  //foo is now loaded.

  const ctx = document.getElementById("myChart");
  const chartData = path0.data
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        data: chartData,
        "fill": false,
        "borderColor": "rgb(75, 192, 192)",
        "lineTension": 0.1,
        "pointBackgroundColor": "rgb(75, 192, 192)",
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  });

  console.log(chartData)
});
myChart(ctx)

// const data200 = require('./path1')
// const data500 = require('./path2')


