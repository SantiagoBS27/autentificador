class Usuario {
    constructor(nombre, email, password){
        this.nombre = nombre; 
        this.email = email; 
        this.password = password; 
    }
}

function register(name, email, pass){
    let user = new Usuario(name, email, pass); 
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user); 
    localStorage.setItem("users", JSON.stringify(users));
}

function verify(name, email, pass){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    for(let user of users){
        if(user.email == email){
            alert("email already exists"); 
            return; 
        }
    }
    register(name, email, pass); 
    window.location.href = "index.html";
}

function registrarUsuario(){
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if(nombre.length < 6){
        alert("Name must be at least 6 characters"); 
        return; 
    }
    if(!email.includes("@")){
        alert("Invalid email"); 
        return; 
    }
    if(password.length < 6){
    alert("Password must be at least 6 characters"); 
    return; 
    }

    verify(nombre, email, password);

}
