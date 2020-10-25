import Header from "../components/Header.js";
import Parallax from "../components/Parallax.js";
import Summary from "../components/Summary.js";

class Home { 
    constructor() {
        new Header();  
        new Summary();
        new Parallax();
    }   
}
export default Home;