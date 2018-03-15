
Plotly.d3.csv('https://raw.githubusercontent.com/LindsayRichman/D3/master/world.csv', function(data, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
  
  var data = [{
        type: 'choropleth',
	     locationmode: 'country names',
        locations: unpack(rows, 'COUNTRY'),
        z: unpack(rows, 'NUMBER'),
        autocolorscale: false,
        reversescale: true,
        colorscale: 'Portland', 
        transforms: [{
          type: 'aggregate',
          groups: unpack(rows, 'COUNTRY'),
          aggregations: [
            {target: 'z', func: 'avg', enabled: true},
        ]
    }]
   }];

    var layout = {
      title: '<b>Participants By Country</b>',
      geo: {
          showframe: false,
          showcoastlines: true,
			 showocean: false,
			 showland: false,
          projection:{
             type: 'orthographic'
          }
      },
      updatemenus: [{
        x: 0.85,
        y: 1.15,
        xref: 'paper',
        yref: 'paper',
        yanchor: 'top',
        active: 0,
        showactive: true,
        buttons: [{
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'avg'], 
            label: 'Avg'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'sum'],
            label: 'Sum'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'min'], 
            label: 'Min' 
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'max'],
            label: 'Max'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'mode'],
            label: 'Mode'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'median'],
            label: 'Median'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'first'],
            label: 'First'
        }, {
            method: 'restyle',
            args: ['transforms[0].aggregations[0].func', 'last'],
            label: 'Last'
        }]
  }]
    };

    Plotly.plot('graph', data, layout);

});