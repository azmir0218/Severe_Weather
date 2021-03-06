var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Drought Count', 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
            ['Flooding Count', 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 2, 0, 2, 1, 2, 4, 2, 0, 3, 0, 2],
            ['Freeze Count', 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            ['Severe Storm Count', 0, 1, 2, 0, 2, 0, 1, 0, 0, 1, 1, 1, 4, 1, 1, 1, 0, 1, 3, 1, 1, 1, 2, 4, 1, 1, 4, 1, 6, 6, 4, 9, 7, 7, 6, 6, 8, 8, 8, 8, 13, 11],
            ['Tropical Cyclone Count', 1, 0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 1, 2, 0, 1, 3, 1, 0, 3, 1, 0, 1, 2, 1, 4, 4, 0, 0, 3, 0, 0, 2, 2, 0, 0, 0, 1, 3, 2, 2, 7, 4],
            ['Wildfire Count', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            ['Winter Storm Count', 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 2, 0, 1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 1],
            ['Cost', 40.4, 3.1, 4.8, 31.5, 2.8, 18.6, 5.9, 0, 48, 35.1, 11.4, 17.4, 71.8, 58.1, 14.8, 30.7, 19.4, 13.4, 34.2, 21.8, 13.8, 18.4, 24.1, 34.3, 82.2, 244.3, 21.3, 16.7, 85.2, 16.5, 17.9, 85.6, 142.4, 28.6, 21.8, 27.5, 54, 346.1, 100.1, 48.9, 102, 145]
            // ['2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01']
        ],
        type: 'bar',
        types: {
            Cost: 'area',
        },
        groups: [
            ['Drought Count', 'Flooding Count', 'Freeze Count', 'Severe Storm Count', 'Tropical Cyclone Count', 'Wildfire Count', 'Winter Storm Count']
        ],
        axes: {
            data1: 'y',
            Cost: 'y2'
        }
    },
    axis: {
        x: {
            label: {
                text: 'Year',
                position: 'outer-center'
            },
            type: 'category',
            categories: ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],

            tick: {
                rotate: 75,
                multiline: false
            },
            height: 130
        },
        y: {
            label: {
                text: 'Number of Disaster Events',
                position: 'outer-middle'
            }
        },
        y2: {
            show: true,
            label: {
                text: 'Cost of Disaster in Billions (US$)',
                position: 'outer-middle'
            }
        }
    }
});