import React from 'react';
import { useState, useEffect } from 'react';
import "./my-sells.css"
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../hooks';
import { useProducts } from '../../hooks';
import { ProductCard } from '../../components/product-card';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';


function MySells() {
  const user = useRecoilValue(userState)
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const data = useProducts();

 // ? Controla el mail guardado para almacenar y filtrar los productos que se muestran
  const [usernameMail, setUsernameMail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsernameMail(user.email);
      } else {
        console.log("Usuario no logeado");
        Navigate("/", { replace: true })
      }
    });

    return () => unsubscribe();
  }, []);


  console.log(data[0])
  // ? Obtener las prendas publicadas del usuario actual
  const prendasPublicadas = data.filter(p => p.usernameMail === usernameMail);

  const opciones = [
    {
      id: 1,
      nombre: 'Publicadas',
      contenido: (
<div className="product-card-container">
  <p style={{display:"block"}}>Tus prendas publicadas son:</p>
  {prendasPublicadas.map((p) => (
    <div className="product-card-wrapper" key={p.id}>
      <ProductCard
        onClick={() => {}}
        sellerName={p.usernameMail}
        sellerId={usernameMail}
        productFoto={p.fotos[0]}
        productName={p.titulo}
        descripcion={p.descripcion}
        precio={p.precioDeVenta}
      />
    </div>
  ))}
</div>
      )
    },
    {
      id: 2,
      nombre: 'Para enviar',
      contenido: 'Contenido de la opción 2'
    },
    {
      id: 3,
      nombre: 'En transito',
      contenido: 'Contenido de la opción 3'
    }
  ];

  const seleccionarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (user.email ?
    <>
    <h3 className='my-sells-title'>Mis ventas</h3>
    <div className='div-mysells'>
      
      
      <div className="opciones-container">
        {opciones.map((opcion) => (
          <div key={opcion.id} onClick={() => seleccionarOpcion(opcion)} className={`opcion ${opcionSeleccionada === opcion ? 'seleccionada' : ''}`}>
            {opcion.nombre}
          </div>
        ))}
      </div>
      {opcionSeleccionada && (
        <div className="contenido-opcion">
          {opcionSeleccionada.contenido}
        </div>
      )}
    </div>
    </>
    :
    <Navigate to="/login"/>
  );
}

export default MySells;