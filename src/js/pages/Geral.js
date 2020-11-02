import BackToTop from "../components/BackToTop.js";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Parallax from "../components/Parallax.js";
import Summary from "../components/Summary.js";

class Geral { 
    constructor() {
        new Header();  
        new Hero();
        new Summary();
        new Parallax(".hero", 0.5);
        new Parallax(".stats", 0.7);
        new BackToTop();
    }   
}
export default Geral;