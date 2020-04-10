<template>
    <div class="chartElem">
        <div class="row">
            <highcharts class="chart" :options="histogramChartOptions" :callback="ready"></highcharts>
            <highcharts class="chart" :options="lineChartOptions" :callback="ready"></highcharts>
            <highcharts class="chart" :options="lineChartOptionsTwo" :callback="ready"></highcharts>

        </div>
        <button id="changeWidth" v-on:click="changeContainerWidth()">Change container width</button>
        <button id="reflow">Reflow Chart</button>
    </div>
</template>

<script>
    import Highcharts from "highcharts";
export default {
    data() {
        return {
            hcInstance: Highcharts,
            histogramChartOptions: {
                title: {
                    text: 'Histogram using a column chart'
                },
                chart: {
                    type: 'column'
                },
                series: [{
                    name: 'YOUR DATA TITLE',
                    data: [["YOU CAN WRITE THE NAME", 49.9], ["AND HERE",71.5], 106.4, ["YOU CAN WRITE THE NAME", 129.2], 144.0, 176.0, 135.6, 124.1, 95.6, 54.4]

                }],
                yAxis: {
                    labels: {
                        formatter: function() {
                            return this.axis.defaultLabelFormatter.call(this);
                        }
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        groupPadding: 0,
                        shadow: false
                    }
                },
                colors: ['#f1ca2e', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
                    '#FF9655', '#FFF263', '#6AF9C4'],
            },
            lineChartOptions: {
                title: {
                    text: 'Line chart',
                    style: {
                        color: '#ce3223',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                chart: {
                    type: "spline",
                    backgroundColor: {
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                        ]
                    },
                },
                series: [{
                    name: 'Data',
                    data: [["YOU CAN WRITE NAME", 49.9], ["AND HERE",71.5], 106.4, 129.2, 144.0, 176.0, 135.6, 124.1, 95.6, 54.4]

                }],
                yAxis: {
                    labels: {
                        formatter: function() {
                            return this.axis.defaultLabelFormatter.call(this);
                        }
                    }
                },
                colors: ['#f1ca2e'],
            },
            lineChartOptionsTwo: {
                title: {
                    text: 'Line chart',
                    style: {
                        color: '#747ece',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                chart: {
                    backgroundColor: {
                        linearGradient: [0, 70, 50, 50],
                        stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                        ]
                    },
                },
                series: [{
                    name: 'Data',
                    data: [["YOU CAN WRITE NAME", 49.9], ["AND HERE",71.5], 106.4, 129.2, 144.0, 176.0, 135.6, 124.1, 95.6, 54.4]

                }],
                yAxis: {
                    labels: {
                        formatter: function() {
                            return this.axis.defaultLabelFormatter.call(this);
                        }
                    }
                },
                colors: ['#c7332a'],
            }
        };
    },
    methods: {
        changeContainerWidth() {
            console.log(this);
        },
        ready() {
            console.log("ready!")
        }
    },
    created() {
        console.log(this);
        let i = document.createElement("input");
        i.setAttribute("type", "color");
        i.type === "color"
            ? (this.colorInputIsSupported = true)
            : (this.colorInputIsSupported = false);
    },
    watch: {
        title(newValue) {
            this.chartOptions.title.text = newValue;
        },
        points(newValue) {
            this.chartOptions.series[0].data = newValue;
        },
        chartType(newValue) {
            this.chartOptions.chart.type = newValue.toLowerCase();
        },
        seriesColor(newValue) {
            this.chartOptions.series[0].color = newValue.toLowerCase();
        },
        animationDuration(newValue) {
            this.updateArgs[2].duration = Number(newValue);
        }
    }
};
</script>

<style scoped>
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    #colorPicker {
        border: 0;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
    }
    .numberInput {
        width: 30px;
    }
    .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .chart {
        margin: 20px;
    }
</style>
