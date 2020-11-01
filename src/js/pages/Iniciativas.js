import slick from 'slick-slider';

class Iniciativas { 
    constructor() {
        this.iniciativasSlider();
    }   
    iniciativasSlider() {
        $(".iniciativas .iniciativas__list").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.iniciativas__slider .prev-slider'),
            nextArrow: $('.iniciativas__slider .next-slider'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
          });
    }
}
export default Iniciativas;