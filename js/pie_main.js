var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Drought', 2.70],
        ['Flooding', 3.80],
        ['Freeze', .10],
        ['Severe Storm', 13.90],
        ['Tropical Cyclone', 65.00],
        ['Wildfire', 10.80],
        ['Winter Storm', 3.70]
      ]
    }
});

var chart2 = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['Drought', 2.70],
            ['Flooding', 3.80],
            ['Freeze', .10],
            ['Severe Storm', 13.90],
            ['Tropical Cyclone', 65.00],
            ['Wildfire', 10.80],
            ['Winter Storm', 3.70]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});