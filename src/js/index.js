var $ = require('jquery');
window.jQuery = $; 
window.$ = $;

import EnergiaLimpa from "./pages/EnergiaLimpa.js";
import Geral from "./pages/Geral.js";
import Home from "./pages/Home.js";
import Iniciativas from "./pages/Iniciativas.js";
import Problema from "./pages/Problema.js";

new Geral();
new Problema();
new Iniciativas();
new EnergiaLimpa();
// new Home();
 