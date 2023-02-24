import React from 'react'
import { useState } from 'react';
import "./my-sells.css"
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../hooks';

function MySells() {
  
    const user = useRecoilValue(userState)
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const opciones = [
      {
        id: 1,
        nombre: 'Vendido',
        contenido: 'Contenido de la opción 1'
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
      },
      {
        id: 4,
        nombre: 'Ganancias',
        contenido: 'Contenido de la opción 4'
      }
    ];
  
    const seleccionarOpcion = (opcion) => {
      setOpcionSeleccionada(opcion);
    };

  return (user.email?
    <div className='div-mysells'><h3 className='my-sells'>Mis ventas</h3>
        <div className="rectangulo"></div>
      <div className="opciones">
        {opciones.map((opcion) => (
          <div key={opcion.id} onClick={() => seleccionarOpcion(opcion)} className={`opcion ${opcionSeleccionada === opcion ? 'seleccionada' : ''}`}>
            {opcion.nombre}
          </div>
        ))}
      </div>
      {opcionSeleccionada && (
        <div className="contenido">
          {opcionSeleccionada.contenido}
        </div>
      )}
    </div>
    :
    <Navigate to="/login"/>
  )
}

export default MySells