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
        console.log("try login");
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("thennn");
          console.log();
          // Signed in
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user})
          
          // ?? aca agregue un stringify de user para que se guarde en localStorage
          // el flujo de login funciona. por ahora lo dejo asi. habria que mejorar el manejo de datos y hacer logout y update de user
          
          localStorage.setItem("user", JSON.stringify(user))
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