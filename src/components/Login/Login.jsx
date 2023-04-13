import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const[user,setUser]=useState(null);
    const auth=getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    const handleGoogleSIngIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error=>{
            console.log('error',error.message)
        })
    }
    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {/* if user exist then show sign out button , id user doesn't exist then show sign button */}
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                <>
                <button onClick={handleGoogleSIngIn}>Google Login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            {
                user && <div> user: {user.displayName}
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />

                </div>
            }
        </div>
    );
};

export default Login;