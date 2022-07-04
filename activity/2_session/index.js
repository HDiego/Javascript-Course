// Ejercicio 1
let person = {
  name: "Diego",
  lastname: "Rocca",
  age: 31,
  profession: "Developer",
};

function arrayFromObject(theObject) {    
  return Object.values(theObject);
}

//console.log(arrayFromObject(person));

// Ejercicio 2

//Puede referirse al objeto global como windows si se encuentra en un navegador
//Puede referirse al objeto propietario si se encuentra en un metodo
//En un evento, refiere al elemento que recibe dicho evento

let sayName = {
  name: "Diego",
  useThis() {
      console.log(`My name is ${this.name}`)
  }
}
//sayName.useThis();


// Ejercicio 3

class InvertirCadena {
  
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
  }

  reverseCadena = () => {
    if(this.cadenaInvertir == "") {
      throw new Error("Cadena vacia");
    }
    console.log(this.cadenaInvertir.split("").reverse().join(""));
  }
}

//let invertirCadena = new InvertirCadena("Hola Mundo");
//invertirCadena.reverseCadena();

//invertirCadena.nuevoMetodo();

// Ejercicio 4

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login = () => {
    if(this.username == "admin" && this.password == "passwd") {
      alert("Usuario Logeado");
    }
    else {
      alert("El usuario o la contraseña son incorrectas")
    }
  }
}

let login = new Login("admin", "passwd");
//login.login();

let loginBad = new Login("juan", "passwd");
//loginBad.login();

// Ejercicio 5

const loginButton = document.getElementById("loginSuccess");
loginButton.addEventListener('click', event => {
  let login = new Login("admin", "passwd");
  login.login();
})

const loginButtonError = document.getElementById("loginFailure");
loginButtonError.addEventListener('click', event => {
  let login = new Login("juan", "passwd");
  login.login();
})

// Ejercicio 6

const loginSuccessAsync = document.getElementById("loginSuccessAsync");
loginSuccessAsync.addEventListener('click', event => {
  loginWithAsync("admin", "passwd");
})

const loginFailureAsync = document.getElementById("loginFailureAsync");
loginFailureAsync.addEventListener('click', event => {
  loginWithAsync("juan", "passwd");
})

let loginWithAsync = async (username, password) => {
  try
  {
    let promiseResponse = await loginWitUsername(username, password);
    console.log(promiseResponse);
  }
  catch(error)
  {
    console.log(error);
  }
}

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
