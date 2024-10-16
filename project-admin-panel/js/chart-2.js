var options = {
  series: [40, 33, 13, 25],
  chart: {
  width: 300,
  type: 'donut',
},
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 100
    },
  }
}],

};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();


