var options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();
