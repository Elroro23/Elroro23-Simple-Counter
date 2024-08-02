//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";

let seconds = 0; //Inicializamos "seconds" en 0;
//"setInterval" se utiliza para ejecutar una función de manera repetitiva en intervalos de tiempo específicos. En este caso, la función se ejecuta cada 1000 milisegundos (1 segundo).
setInterval(function () { //"function" es una función anónima dentro de "setInterval" para definir dos cosas:
    seconds++;//Aumentar el valor de seconds en 1 cada vez que la función se ejecuta.
    ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds} />); //Y renderizando "home" con "seconds como prop".
}, 1000); //1 segundo.

