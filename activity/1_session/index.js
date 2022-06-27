// Ejercicio 1
import {showAboutMe} from "./aboutme.js";
showAboutMe();
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
function divisibleSeven() {
    for(let i=1; i<=100; i++) {
        if(i % 7 == 0) {
            console.log(i);
        }
    }
}
divisibleSeven();

// Ejercicio 5

// Ejercicio 6

class Formatter {
    constructor(){
        this.prefix = "Hello";
    };

    append(text) {
        console.log(`${this.prefix} ${text}`);
    }
}
let formatter = new Formatter();
formatter.append("World");

Formatter.prototype.inLowerCase = function(text) {
    console.log(text.toLowerCase());
}
formatter.inLowerCase("I'am Diego");
