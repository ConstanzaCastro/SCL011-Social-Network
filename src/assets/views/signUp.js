
//Vista de registros
import { createUser , authGoogle, authFacebook } from '/assets/js/auth.js'
import {templateLogIn} from '/assets/views/logIn.js'
import {valideImput ,validEmail , validPassword} from '/assets/js/validation.js'


export const templateSignUp = () =>{    
const divContainer = document.getElementById('root');
divContainer.innerHTML+=
        `<main>
            <div>
                <button id="login">Login</button>
                <button id="signUp">Sign Up</button>
                <input type="text" id="name" placeholder="Ingrese Nombre">
                <input type="email" id="email" placeholder="Ingrese correo" required="required" >
                <div id="root2"></div>
                <input type="password" id="password" placeholder="Ingrese contraseña">
                <div id="printResultPassword"></div>
                <button id="register">Registrarse</button>
                <button id="google">Google</button>
                <button id="facebook">Facebook</button>
            </div>
        </main>`

const  send = document.getElementById("register");
send.addEventListener("click", () => {

let email =document.getElementById("email").value;
let password =document.getElementById("password").value;
let name =document.getElementById("name").value;

const divContainer2 = document.getElementById('root1');
const divContainer3 = document.getElementById('root2');
const divResultPassword = document.getElementById('printResultPassword');


//Limpiar imputs
document.getElementById('root1').innerHTML ="";
document.getElementById('root2').innerHTML="";
document.getElementById('printResultPassword').innerHTML="";




let printValidation = valideImput(email,password,name)


if(printValidation == true){
    divContainer2.innerHTML = "Completa todo los campos"
}


let printValidationEmail = validEmail(email)

if(printValidationEmail  ==true){
    divContainer3.innerHTML = "Correo valido"
}
else {
    divContainer3.innerHTML = "Correo invalido"
}

let printValidPassword =validPassword(password)
if(printValidPassword ==true){
    divResultPassword .innerHTML ="La contraseña debe tener como mínimo 6 carácteres"
}

createUser(email,password);
})

const logIn = document.getElementById("login");
logIn.addEventListener("click",()=>{
    divContainer.innerHTML="";
    templateLogIn();
})

const btnGoogle = document.getElementById("google");
btnGoogle.addEventListener("click",()=>{

    authGoogle();

})
const btnFacebook = document.getElementById("facebook");
btnFacebook.addEventListener("click",()=>{

    authFacebook();

})


}
// Vericar que el email ya ha sido verificado 
export const error1 = (errorCode) =>{
    if (errorCode == 'auth/email-already-in-use'){
      document.getElementById("root2").innerHTML= "ya usado"
    //alert("ya usado")
    }}