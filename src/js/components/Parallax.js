class Parallax {
    constructor() {
        this.opts = {
            speed: 0.5
        }
        this.parallaxImage();
    }   
    parallaxImage() {
        $(window).scroll(() => {
            let scrollTop = $(window).scrollTop();
            let backgroundPosition = "50% " + (scrollTop * this.opts.speed) + "px";
            $(".home__hero").css("background-position", backgroundPosition);
        })
    }
}
export default Parallax;