import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword  } from "firebase/auth"
import "./loginForm.css"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function LoginForm(){

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handleSubmit =(e) => {
        e.preventDefault()
    
        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user})
          localStorage.setItem("user", user)
          navigate("/")


        })
        .catch((error) => {
          setError(true);
        });
    };
    

    

    return <>
        <form className="login-form" onSubmit={handleSubmit}>
            <input className="login-form_input" placeholder="E-mail" type="email" onChange={e => setEmail(e.target.value)}/>
            <input className="login-form_input" placeholder="Contraseña" type="password" onChange={e => setPassword(e.target.value)}/>
            <button className="login-form_button">Ingresar</button>
            {error && <span>Mail o contraseña incorrecta</span>}
            
        </form>
        </>
}