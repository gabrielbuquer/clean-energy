class Hero {
    constructor() {
        this.selectors();
        this.fadeText();
        this.fadeBanner();
    }

    selectors() {
        this.titlePage = $(".hero__content h1");
        this.heroOverlay = $(".hero__overlay");
    }

    fadeText() {
        $(window).scroll((e) => {
            let value = ($(e.target).scrollTop()/1000)*2;
            if(value>=0 && value<=1){
                this.titlePage.css('opacity', (1-value));
            }
        })
    }

    fadeBanner() {
        $(window).scroll((e) => {
            let value = (($(e.target).scrollTop()/1000)*1.4) + 0.2;
            if(value>=0 && value<=1){
                this.heroOverlay.css('background-color', `rgba(0,0,0,${(value)})`);
            }
        })
    }

}
export default Hero;