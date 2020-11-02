var $ = require('jquery');
window.jQuery = $; 
window.$ = $;

import Hero from "./components/Hero.js";
import EnergiaLimpa from "./pages/EnergiaLimpa.js";
import Geral from "./pages/Geral.js";
import Home from "./pages/Home.js";
import Iniciativas from "./pages/Iniciativas.js";
import Problema from "./pages/Problema.js";

new Geral();
let mainClass = $("main").attr("class");

switch(mainClass){
    case 'home':
        new Home();
        break;
    case 'problema':
        new Problema();
        break;
    case 'iniciativas':
        new Iniciativas();
        break;
    case 'energia-limpa':
        new EnergiaLimpa();
        break;
    default:
        console.log("Ocorreu um erro inesperado")
}

// new Problema();
// new Iniciativas();
// new EnergiaLimpa();
// new Hero();
// new Home();
 