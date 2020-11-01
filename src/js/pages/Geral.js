import BackToTop from "../components/BackToTop.js";
import Header from "../components/Header.js";
import Parallax from "../components/Parallax.js";
import Summary from "../components/Summary.js";

class Geral { 
    constructor() {
        new Header();  
        new Summary();
        new Parallax();
        new BackToTop();
    }   
}
export default Geral;