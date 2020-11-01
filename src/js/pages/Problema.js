import ApexCharts from 'apexcharts';

class Problema { 
    constructor() {
        this.maioresPoluentes();
    }   
    maioresPoluentes() {
        let options = {
          series: [
            {
              name: "Toneladas de CO2",
              data: [12700, 6570, 2870, 2670, 1310, 1050, 918, 876, 732, 718],
            },
          ],
          chart: {
            height: 350,
            type: "bar",
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top", // top, center, bottom
              },
            },
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"],
            },
          },
          fill: {
            colors: ['#e8b61c']
          },

          xaxis: {
            categories: [
              "China",
              "EUA",
              "Índia",
              "Rússia",
              "Japão",
              "Brasil",
              "Alemanha",
              "Irã",
              "Coreia do Sul",
              "México",
            ],
            position: "top",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#e8b61c",
                  colorTo: "#d5a30a",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val;
              },
            },
          },
        };
        

        var chart = new ApexCharts(document.querySelector("#maiores-poluentes"), options)
        chart.render()
    }
}
export default Problema;