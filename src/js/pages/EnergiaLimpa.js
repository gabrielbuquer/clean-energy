import ApexCharts from 'apexcharts';

class EnergiaLimpa { 
    constructor() {
        this.selectors();
        this.matrizesEnergeticas();
        this.events();
    }
    selectors() {
        this.controlChart = $(".control-chart");
    }
    events() {
        this.controlChart.click((e) => {
            if(!$(e.target).hasClass('active')){
                this.controlChart.find('a').removeClass('active');
                $(e.target).addClass('active');
                switch($(e.target).attr("id")){
                    case 'brasil':
                        this.updateBrasil();
                        break;
                    case 'mundo':
                        this.updateMundo();
                        break;
                    default:
                        console.log('Houve um erro inesperado.')
                }
            }
        })
    }
    matrizesEnergeticas (){
        var options = {
            series: [38.5, 5.6, 2.3, 16.6, 10.4, 23.1, 3.7],
            labels: ['Carvão', 'Solar, eólica, geotérmica e maré', 'Biomassa', 'Hidraúlica', 'Nuclear', 'Gás Natural', 'Petróleo e derivados'],
            chart: {
            id: 'matrizes-energeticas',
            width: 500,
            type: 'pie',
          },
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
           
          },
          fill: {
            type: 'image',
            opacity: 0.85,
            image: {
               src: ['../img/carvao.jpg', '../img/solar.jpg', '../img/biomassa.jpg', '../img/agua.jpg', '../img/nuclear.jpg', '../img/gas-natural.jpg', '../img/solar.jpg'],
                width: 25,
                imagedHeight: 25
            },
          }          
          };
  
          this.chart = new ApexCharts(document.querySelector("#matrizes-energeticas"), options);
          this.chart.render();
          
    }
    updateMundo() {
        $.ajax({
            dataType: "json",
            url: './json/matriz-energetica-mundo.json'
        }).done((data) => {
            console.log(data.series)
            console.log(data.label)
            ApexCharts.exec('matrizes-energeticas', 'updateOptions', {
                label: data.label,
                series: data.series
              }, false, true);
        });
    }
    updateBrasil() {
        console.log(this.chart.w.globals.series.slice());
        
        $.ajax({
            dataType: "json",
            url: './json/matriz-energetica-brasil.json'
        }).done((data) => {
            console.log(data.series)
            console.log(data.label)
            ApexCharts.exec('matrizes-energeticas', 'updateOptions', {
                label: data.label,
                series: data.series
              }, false, true);
        });
    }
}
export default EnergiaLimpa;