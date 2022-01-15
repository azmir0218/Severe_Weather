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





    //     let labels2 = deaths_array
    //     let data2 = event_array, damage_array
    //     let colors2 = '#49a9ea'

    //     let myChart2 = document.getElementById("myChart2").getContext('2d');

    //     let chart2 = new Chart(myChart2, {
    //         type: 'bar',
    //         data: {
    //             labels: labels2,
    //             datasets: [{
    //                 data: data2,
    //                 backgroundColor: colors2
    //             }]
    //         },
    //         options: {
    //             title: {
    //                 text: "Number of passengers carried in 2017 (in mio.)",
    //                 display: true
    //             },
    //             legend: {
    //                 display: true
    //             }
    //         }
    //     })

})
