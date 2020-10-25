import Overlay from "./Overlay";

class Header {
    constructor() {
        this.overlay = new Overlay(".header__nav");
        this.selectors();
        this.events();
        
    }   
    selectors(){
        this.headerFixo = $(".header.fixed");
        this.btnMenuMobile = $(".header__nav__mobile button");
        this.navWrapper = $(".header__nav__wrapper");
        this.overlayMenu = $(".header__nav .overlay");
    }
    events(){
        $(window).scroll(this.scrollFixedHeader.bind(this));
        this.btnMenuMobile.click(this.toggleMenuMobile.bind(this));
        this.overlayMenu.click(this.closeOverlayAndMenu.bind(this));
    }
    closeOverlayAndMenu(){
        this.navWrapper.removeClass("open");
        this.overlay.hide()
    }
    toggleMenuMobile(){
        this.navWrapper.toggleClass("open");
        this.overlay.toggle();
    }
    scrollFixedHeader(e){
        console.log($(e.target).scrollTop())
        let scrollTop = $(e.target).scrollTop();
        if(scrollTop > 5){
            this.headerFixo.addClass('active');
        }else{
            this.headerFixo.removeClass('active');
        }
    }
}
export default Header;