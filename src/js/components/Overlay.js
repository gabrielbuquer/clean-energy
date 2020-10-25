class Overlay {
    constructor(element = "body") {
        this.desenhar(element);
    }   
    desenhar(element) {
        this.overlay = $("<div />", {
            class: "overlay"
        }).appendTo($(element))
    }
    show() {
        this.overlay.addClass("show");
    }
    hide() {
        this.overlay.removeClass("show");
    }
    toggle() {
        this.overlay.toggleClass("show");
    }
}
export default Overlay;