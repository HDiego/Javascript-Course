var arrowFunction = function (person) {
    var ret = [person.name, person.age, person.profession];
    return ret;
};
// Ejercicio 2
var sumOrConcatenate = function (firstArgument, secondArgument) {
    if (typeof firstArgument === "number" && typeof secondArgument === "number") {
        return firstArgument + secondArgument;
    }
    if (typeof firstArgument === "string" && typeof secondArgument === "string") {
        return firstArgument + "-" + secondArgument;
    }
    return firstArgument + ":" + secondArgument;
};
function vehicleFunction(firstArgument) {
    return firstArgument.pressPedal !== undefined;
}
function callFunctions(firstArgument) {
    firstArgument.turnOnEngine();
    if (vehicleFunction(firstArgument)) {
        firstArgument.pressPedal();
    }
    else {
        firstArgument.openThrottle();
    }
}
// Ejercicio 4
function removeFirstEntry(firstArgument) {
    return firstArgument.shift() !== undefined ? firstArgument : [];
}
