import {checkEmail} from '/assets/js/validation.js'
import {initFeed} from '/assets/views/feed.js'

//Crear usuario nuevo 
export const createUser = (email,password) =>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        checkEmail();
        initFeed();

        })
.catch(function(error) {
    // Handle Errors here.
    
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  })
}
//Validacion de campos vacios 

 export const validar2 = (email,password) => {
  if( email == "" &&  password == ""  && name == ""  ){
  return false;
  }
  else{
    return true; 
  }
}



//Configuracion de un observador  , verifica que si hay un cambio de usuario o alguien se registra y ejecuta los comandos


// acceso con usuario ya creado


//Create new user with Google
export const authGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
}

const authentication = (provider) => {

    firebase.auth().signInWithPopup(provider).then((result) => {

        let token = result.credential.accessToken;
        let user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(credential);
    });

}

//Create new user with Facebook

export const authFacebook = () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    authentication(provider);
}


