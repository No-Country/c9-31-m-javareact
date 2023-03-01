import React from "react";
import { userInputs } from "./userInputs";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { Link } from "react-router-dom";
import LoginCarousel from "../login-carousel";

const RegisterForn = () => {
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();

  console.log("La contraseña es " + data.password);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });

    const input = e.target;
    const errorMessage = input.parentNode.querySelector(".error-message");

    if (!input.validity.valid) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  };

  const handleCheckbox = (e) => {
    setData({ ...data, acceptTerms: e.target.checked });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!data.acceptTerms) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res, "RES");
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="register-wrapper">
      <div className="login-page_carousel">
        <LoginCarousel />
        </div>
        <div className="register-container">
          <div className="inputs-container">
            <h1 className="register-title">
              Ingresá tus datos para registrarse
            </h1>

            <form onSubmit={handleAdd} className="inputs-display">
              {userInputs.map((input) => (
                <div className="register-inputs" key={input.id}>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    pattern={input.pattern}
                    onChange={handleInput}
                  />

                  <span className="error-message" style={{ display: "none" }}>
                    {input.message}
                  </span>
                </div>
              ))}

              <div className="terms-container">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  onChange={handleCheckbox}
                  checked={data.acceptTerms}
                />
                <label htmlFor="acceptTerms">
                  Acepto los términos y condiciones
                </label>
                <i className="checkmark"></i>
              </div>

              <div className="button-wrapper">
                <button
                  disabled={per !== null && per < 100}
                  type="submit"
                  className="register-botton"
                >
                  Registrarme
                </button>
              </div>

              <p className="login-register">¿Ya tenés cuenta?</p>
              <Link to="/login">
                <p
                  className="login-register"
                  style={{ textDecoration: "underline" }}
                >
                  Inicia sesión
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForn;
