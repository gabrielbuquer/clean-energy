class Parallax {
    constructor(element, speed) {
        this.opts = {
            speed: speed
        }
        this.parallaxImage(element);
    }   
    parallaxImage(element) {
        $(window).scroll(() => {
            let scrollTop = $(window).scrollTop();
            let backgroundPosition = "50% " + (scrollTop * this.opts.speed) + "px";
            $(element).css("background-position", backgroundPosition);
        })
    }
}
export default Parallax;