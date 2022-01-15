console.log("Here is app.js")

const url = "samples1.json";

var event_array = []
var windspeed_array = []
var dict = {}

// Fetch the JSON data and console log it
d3.json("samples1.json").then((Newdata) => {
    features = Newdata.features
    // console.log("features")
    // console.log(features)

    for (var i = 0; i < features.length; i++) {
        let event_category = features[i].properties.Disaster

        if (event_array.indexOf(event_category) === -1) {
            event_array.push(event_category)
            dict[event_category] = 0
        }

        dict[event_category] = dict[event_category] + 1
    }
    console.log(features)
    // console.log("event_array")
    // console.log(event_array)
})
var eventTag = d3.select('#selDataset');

eventTag
    .append("option")
    .property("value", "")
    .text("Select Event");

event_array.map((event_category) => {
    eventTag
        .append("option")
        .property("value", event_category)
        .text(event_category);
});

x_array = []
y_array = []

Object.entries(dict).forEach(([key, value]) => {
    // console.log(key)
    // console.log(value)

    x_array.push(value)
    y_array.push(key)
});

// x_array.sort()
// y_array.sort()

// console.log("x_array")
// console.log(x_array)
// console.log("y_array")
// console.log(y_array)

var bar_chart = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: x_array,
            y: y_array,
            r: 10

        }],
        backgroundColor: '#00FFFF'
    }]
}
const config = {
    type: 'bubble',
    data: data,
    options: {}
};

//     var bar_chart = [{
//         x: x_array,
//         y: y_array,
//         type: "bar",
//         orientation: "h",

//     }
//     ];

//     var layout = {
//         title: "Event Category",
//         margin: { t: 30, l: 150 },

//     }
//     Plotly.newPlot("bar", bar_chart, layout);
// });

var tbody = d3.select("tbody");

function optionChanged(selected_event) {
    console.log("selected_event=", selected_event);

    d3.json("samples.json").then((data) => {
        features = data.features
        console.log("features")
        console.log(features)

        tbody.html("");

        const tbl_header = tbody.append("tr");
        let header = tbl_header.append("th");
        header.text("Disaster");
        header = tbl_header.append("th");
        header.text("Name");
        header = tbl_header.append("th");
        header.text("Year_start");
        header = tbl_header.append("th");
        header.text("Total_dam(millions)");
        header = tbl_header.append("th");
        header.text("Deaths");

        for (var i = 0; i < features.length; i++) {
            if (features[i].properties.Disaster === selected_event) {
                const tbl_data = tbody.append("tr");
                let cell = tbl_data.append("td");
                cell.text(features[i].properties.Disaster);
                cell = tbl_data.append("td");
                cell.text(features[i].properties.Name);
                cell = tbl_data.append("td");
                cell.text(features[i].properties.Year_start);
                cell = tbl_data.append("td");
                // cell.text(features[i].properties.Disaster);
                // cell = tbl_data.append("td");
                cell.text(features[i].properties.Total_dam);
                cell = tbl_data.append("td");
                cell.text(features[i].properties.Deaths);
            }
        }
    });
}
