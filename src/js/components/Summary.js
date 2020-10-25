import $ from 'jquery'
class Summary {
    constructor() { 
        this.selectors();
        this.events();
    }   
    selectors(){
        this.menu = $(".summary__menu");
        this.summaryContent = $(".summary__content");
    }
    events(){
        this.menu.find("li").click(this.toggleSummaryContent.bind(this))
    }

    toggleSummaryContent(e){
        let btnMenu = $(e.target).parent();
        let contentId = btnMenu.data('choice');
        this.menu.find('.active').removeClass('active');
        this.summaryContent.find('.active').removeClass('active');

        btnMenu.addClass('active');
        this.summaryContent.find(`#${contentId}`).addClass('active');
    
    }
}
export default Summary;