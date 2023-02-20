import React from "react";
import { userInputs } from "./userInputs";
import { 
  //useEffect, 
  useState } from "react";
import {
  // addDoc,
  // collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth,
    db,
  //storage
  } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
//import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./register.css"

const RegisterForn = ({ inputs, title }) => {
  //const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  // ?? a esta funcionalidad la comente porque no esta en el diseño. Prefiero que nos concentremos en respetar el diseño y...
  // ... darle mas importancia al flujo de vender, publicar productos.

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;

  //     console.log(name);
  //     const storageRef = ref(storage, file.name);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         setPerc(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({ ...prev, img: downloadURL }));
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFile();
  // }, [file]);


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
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
      navigate("/")
      
    } catch (err) {
      console.log(err);
    }
  };
  
  return ( <>
  <div className="register-wrapper">
  <div className="register-photo"><img src="" alt="" /><p>aa</p></div>
    <div className="register-container">
    <div className="inputs-container">
        <h1 className="register-title">Ingresá tus datos para registrarse</h1>
        
        <form onSubmit={handleAdd} className="inputs-display">
              {/* <div className="formInput">
                <label htmlFor="file">
                  apretá aquí para subir alguna imagen imagen
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div> */}

              {userInputs.map((input) => (
                <div className="register-inputs" key={input.id}>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </div>
              
              ))}
  
  <input type="checkbox" id="accept-terms" />
  <label for="accept-terms">Acepto los términos y condiciones</label>
  <i class="checkmark"></i>



  <div className="button-wrapper">
  <button disabled={per !== null && per < 100} type="submit" className="register-botton">
    Registrarme
  </button>
</div>

<p className="login-register">¿Ya tenés cuenta?</p>
<p className="login-register">Inicia de sesión</p>

            </form>

            </div>
</div>
</div>
</>
  );
};

export default RegisterForn;
