import ApexCharts from 'apexcharts';
import slick from 'slick-slider';
class Problema { 
    constructor() {
        this.maioresPoluentes();
        this.menuProblemas();
    }   
    menuProblemas() {
      $(".menu-problemas__wrapper").slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: true
                }
            }
        ]
      });
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
                position: "top", 
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
        
        var chart = new ApexCharts(document.querySelector("#maiores-poluentes"), options);
        chart.render();
    }
}
export default Problema;