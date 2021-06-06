google.charts.load('current', {
  'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawPortuguesChart);
google.charts.setOnLoadCallback(drawMatematicaChart);
google.charts.setOnLoadCallback(drawCienciasChart);
google.charts.setOnLoadCallback(drawHistoriaChart);

function drawPortuguesChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Completado', 20],
    ['Não Completado', 1]
  ]);

  var options = {
    pieHole: 0.4,
    pieStartAngle: 20,
    tooltip: {
      trigger: 'none',
      text: 'value'
    },
    slices: {
      0: {
        color: 'white'
      },
      1: {
        color: '#00ab9e'
      },


    },
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    pieSliceText: "none",


  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options);
}

function drawMatematicaChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Completado', 16],
    ['Não Completado', 2]
  ]);

  var options = {
    pieHole: 0.4,
    pieStartAngle: 40,
    tooltip: {
      trigger: 'none'
    },
    slices: {
      0: {
        color: 'white'
      },
      1: {
        color: '#00ab9e'
      },


    },
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    pieSliceText: "none"

  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
}

function drawCienciasChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Completado', 24],
    ['Não Completado', 1]
  ]);

  var options = {
    pieHole: 0.4,
    pieStartAngle: 10,
    tooltip: {
      trigger: 'none'
    },
    slices: {
      0: {
        color: 'white'
      },
      1: {
        color: '#00ab9e'
      },


    },
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    pieSliceText: "none"

  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart.draw(data, options);
}

function drawHistoriaChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Completado', 14],
    ['Não Completado', 2]
  ]);

  var options = {
    pieHole: 0.4,
    pieStartAngle: 40,
    tooltip: {
      trigger: 'none'
    },
    slices: {
      0: {
        color: 'white'
      },
      1: {
        color: '#00ab9e'
      },


    },
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    pieSliceText: "none"

  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart4'));
  chart.draw(data, options);
}