
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZMAm_aDSzWnD5yJ65uixmdTf3t8QoRhw",
    authDomain: "quicklearn-aa776.firebaseapp.com",
    projectId: "quicklearn-aa776",
    storageBucket: "quicklearn-aa776.appspot.com",
    messagingSenderId: "42855574521",
    appId: "1:42855574521:web:c73f425fc1d566e75f6b28"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("you are sign Up  ");
            window.location.href ="SignIn.html";
            // console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("  your are login 👍😇");
            window.location.href ="index.html";
            // console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            alert("Something wrong , please check your email / password ");
        });
}
