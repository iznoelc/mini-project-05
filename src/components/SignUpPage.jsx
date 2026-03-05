import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import useAuth from "../hooks/useAuth";

function SignUpPage(){
    // connectAuthEmulator(auth, "http://localhost:5173");
    
    const navigate = useNavigate();
    // const provider = new GoogleAuthProvider();
    const { user, setUser, signInWithGoogle, createUser, loggedIn } = useAuth();
    console.log("logged in: " + loggedIn);
    // const [password, setPassword] = useState("");
    

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) =>({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        console.log("Form Submitted:", formData);
        
        createUser(formData.email, formData.password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            console.log("loggedIn: " + loggedIn);

                        updateProfile(user, {
                displayName: formData.username
            });

            navigate("/dashboard", { replace: true });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    };

    const handleGoogleSignUp = () => {
        signInWithGoogle()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
            // The signed-in user info.
            console.log(result.user);
            const newUser = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
            };
            console.log(newUser);
            
            //navigate("/", { replace: true });
            //console.log(token);
            // IdP data available using getAdditionalUserInfo(result)


            navigate("/dashboard", { replace: true });
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
      });
    }

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //         // Signed up 
    //         const user = userCredential.user;
    //         // ...
    // })
    // .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    // });

    return(
        <>
        <div className="flex flex-col items-center justify-center gap-5">
            <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
                <legend className="fieldset-legend">Sign Up</legend>

                {/* username input */}
                <label className="label">Enter Username</label>
                <label className="input validator w-xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Username"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength="3"
                        maxLength="30"
                        title="Only letters, numbers or dash"
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    <br />containing only letters, numbers or dash
                </p>

                {/* email address input */}
                <label className="label">Enter Email Address</label>
                <label className="input validator w-xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="gleebus@glorpmail.com"
                    />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>

                { /* password input */}
                <label className="label">Enter Password</label>
                <label className="input validator w-xl">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <path
                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                        ></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        required
                        placeholder="Password"
                        minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        onChange={handleChange}
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
                <button type="submit" className="btn btn-primary mt-4">Create Account and Login</button>
                <p className="secondary-font mt-4 text-center"><i>OR</i></p>
                <button type="button" className="btn bg-base-100x mt-4" onClick={handleGoogleSignUp}><FcGoogle /> Sign in with Google</button>
            </fieldset>
        </form>
        <div className="flex items-center justify-center gap-5">
            <p className="secondary-font">Already joined the Gleebuslings? <a href="/login" className="hover:text-primary text-center">Login Here</a></p>
        </div>
        </div>
        </>
    );
}

export default SignUpPage;