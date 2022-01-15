console.log("Here is app.js")

const url = "samples1.json";

// function optionChanged(id) {
//     updatePlotly(id);
// };
// function weather(id) {}
// Fetch the JSON data and console log it
d3.json("samples1.json").then((Newdata) => {
    features = Newdata.features

    // console.log("features")
    console.log(features)

    state_array = []
    event_array = []
    year_array = []
    damage_array = []
    deaths_array = []


    for (var i = 0; i < features.length; i++) {
        var state = features[i].properties["State"]

        if (state_array.indexOf(state) === -1) {
            state_array.push(state)
        }
        var event = features[i].properties["Disaster"]

        if (event == null) {
            event_array.push(0)
        }
        else {
            event_array.push(event)
        }

        var year = features[i].properties["Year_start"]

        if (year == null) {
            year_array.push(0)
        }
        else {
            year_array.push(year)
        }
        var damage = features[i].properties["Total_dam"]

        if (damage == null) {
            damage_array.push(0)
        }
        else {
            damage_array.push(damage)
        }
        var death = features[i].properties["Deaths"]

        if (death == null) {
            deaths_array.push(0)
        }
        else {
            deaths_array.push(death)

        }

    }
    // console.log("event_array")
    console.log(state_array)
    console.log(event_array)
    console.log(year_array)
    console.log(damage_array)
    console.log(deaths_array)


    let drop_down_id = state_array

    drop_down_id.forEach((id) => {
        d3.select('#selDataset').append('option').text(id);


        // });
    });
    //     // Initializes the page with a default plot

    let bar_chart = [{

        x: deaths_array,
        y: event_array,
        // labels: state_array,
        type: "bar",
        // color: winter_storm_array,
        orientation: "h",
    }
    ];
    let layout = {
        title: "Storm Events",

    }
    Plotly.newPlot("bar", bar_chart, layout);

    let bubble_chart = [{
        x: deaths_array,
        y: event_array,
        // labels: name_array,
        mode: 'markers',
        marker: {
            color: event_array,
            size: deaths_array,
        }

    }
    ];
    let layout1 = {
        title: "Event Total vs State"
    }
    //show the bubble plot 
    Plotly.newPlot("bubble", bubble_chart, layout1);

    //     //     //https://plotly.com/javascript/gauge-charts/

    // // Display each key-value pair from the metadata JSON object

    // updated_state = Newdata.features.filter(properties => properties.State === "AL")[0];

    Object.entries().forEach(
        ([key, value]) => d3.select("#sample-metadata").append("p").text(`${key}: ${value}`));

    // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updatePlotly);

    // // This function is called when a dropdown menu item is selected
    function updatePlotly() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");

        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");
        console.log(dataset)
        //restyle the bar chart once new id value is selected
        Plotly.restyle("bar", "x", [deaths_array]);
        Plotly.restyle("bar", "y", [event_array]);
        // Plotly.restyle("bar", "text", [bar_text]);

        //         // //run the below in the local directory where the code is located
        //         // //Python -m http.server
        // }


    }
})


