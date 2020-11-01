class BackToTop {
    constructor() {
        this.desenhar();
        this.toggleVisibility();
        this.backTop();
    }

    backTop() {
        $(".back-to-top").click(function() {
            $("html").animate({scrollTop: 0}, 0);
        })
    }

    toggleVisibility(){
        $(window).scroll(function() {
            if($(window).scrollTop() > 100){
                $(".back-to-top").addClass('visible');
            }else{
                $(".back-to-top").removeClass('visible');
            }
        })
    }

    desenhar() {
        $("body").append(`
            <div class="back-to-top">
                <i class="fa fa-chevron-up"></i>
            </div>
        `)
    }
}
export default BackToTop;