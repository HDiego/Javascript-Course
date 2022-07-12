// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

let arrowFunction = (person: Person): Array<string | number> => {
    let ret : (string | number)[] = [person.name, person.age, person.profession];
    
    return ret;
  }

// Ejercicio 2
let sumOrConcatenate = (firstArgument: any, secondArgument: any) => {
    if(typeof firstArgument === "number" && typeof secondArgument === "number") {
        return firstArgument + secondArgument;
    }
    if(typeof firstArgument === "string" && typeof secondArgument === "string") {
        return firstArgument + "-"+ secondArgument;
    }
    return firstArgument + ":"+ secondArgument;
}

// Ejercicio 3
interface Car {
    tires: number;
    turnOnEngine:()=> void;
    pressPedal:()=> void;
}

interface Motorcycle {
    tires: number;
    turnOnEngine:()=>void;
    openThrottle:()=>void;
}

function vehicleFunction(firstArgument: Car | Motorcycle): firstArgument is Car {
    return (firstArgument as Car).pressPedal !== undefined;
}

function callFunctions(firstArgument: Car | Motorcycle): void {
    firstArgument.turnOnEngine();
    if(vehicleFunction(firstArgument)) {
        firstArgument.pressPedal();
    }
    else{
        firstArgument.openThrottle();
    }
}

// Ejercicio 4
function removeFirstEntry<T extends string | number>(firstArgument: T[]): T[] {
    return firstArgument.shift()!== undefined ? firstArgument : [] ;
}

