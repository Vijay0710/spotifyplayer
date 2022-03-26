        // Import the functions you need from the SDKs you need
        
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
        import { event } from "jQuery";
        // import { getDatabase, ref, set } from "firebase/database";
        

        window.alert("Inside backend js file");
        $(document).ready(function(){
            window.alert("Dom loaded")
            $('#register').click(function(e){
                // e.preventDefault()
                window.alert("jquery working");
                console.log("Inside Register");
                register();
            })
        });
        
        
        const firebaseConfig = {
            apiKey: "AIzaSyAi3c64nM4FF9p5sAeF-k64bM_798Ih-hs",
            authDomain: "spotify-web-66254.firebaseapp.com",
            projectId: "spotify-web-66254",
            storageBucket: "spotify-web-66254.appspot.com",
            messagingSenderId: "345958720009",
            appId: "1:345958720009:web:6f2bededb2d0b3c2bbced8",
            measurementId: "G-JZMHZV075X"
        };
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        
        
        // window.alert(auth)


        // function createuser(auth,email,password){
        //     return new Promise(resolve =>{
        //         setTimeout(()=>{
                    
        //             resolve("resolved")
        //         },12000);
        //     });
        // }
        

            function register() {
                var uname = document.getElementById("uname").value;
                var email = document.getElementById("mail").value;
                var password = document.getElementById("pass").value;
                window.alert(uname + " " + email + " " + password)
                window.alert("Displayed");
                console.log(uname);
                console.log(email);
                console.log(password);
                window.alert("consoled");
                const auth = getAuth(app);
                window.alert(auth)
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        window.alert("created user")
                        const user = userCredential.user;
                        console.log(user.uid)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode + " " + errorMessage)
                        // ..
                    });
            }


