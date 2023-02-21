import React from "react";
import "./sellerUserInfo.css";

function SellerUserInfo() {
  return (
    <>
      <h1 className="sell-info-title">Vende tu prenda</h1>
      <h3 className="sell-info-subtitle">
        Por ser la primera vez que publicas, necesitamos más datos
      </h3>
      <div className="form-container-information">
        <div className="form-header-information">
          <h2 className="direction-title">Dirección a donde envías</h2>
          <p className="important-title">Importante: a esta dirección también pueden llegar devoluciones</p>
        </div>
        <div className="form-inputs-information">
          <div className="input-group-information">
            
            <input type="text" id="nombre" name="nombre" placeholder="Provincia" required/>
          </div>
          <div className="input-group-information">
            
            <input type="text" id="apellido" name="apellido" placeholder="Provincia" required />
          </div>
          <div className="input-group-information">
           
            <input type="email" id="email" name="email" placeholder="Provincia" required />
          </div>
          <div className="input-group-information">
            
            <input type="tel" id="telefono" name="telefono" placeholder="Provincia" required />
          </div>
          <div className="input-group-information">
            
            <input type="text" id="direccion" name="direccion" placeholder="Provincia" required />
          </div>
          <div className="input-group-information">
            
            <input type="text" id="ciudad" name="ciudad" placeholder="Provincia" required />
          </div>
        </div>
      </div>

<div className="options-wrapper">
      <div className="options-container" style={{ display: "flex" }}>
        <div className="options-item">
          <h2 className="options-title">Medio de pago que utilizarás</h2>
          <p className="options-description">Selecciona el medio por el cual prefieres realizar los envios de tus ventas</p>
          <div className="options-buttons">
            <div className="options-button">
              <input type="text" id="option1" name="option" value="1" />
              <label for="option1">Correos argentinos</label>
            </div>
            <div className="options-button">
              <input type="text" id="option2" name="option" value="2" />
              <label for="option2">OCA</label>
            </div>
          </div>
        </div>
        <div className="options-item">
          <h2 className="options-title">Cobro de tus ventas</h2>
          <p className="options-description">Selecciona el método por el cual querés recibir el dinero de tus ventas</p>
          <div className="options-buttons">
            <div className="options-button">
              <input type="text" id="option3" name="option" value="1" />
              <label for="option3">Transferencia bancaria</label>
            </div>
            <div className="options-button">
              <input type="text" id="option4" name="option" value="2" />
              <label for="option4">Mercado pago</label>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="form-container-information">
        <div className="form-header-information">
          <h2 className="direction-title">Cobra con mercado pago</h2>
         
        </div>
        <div className="form-inputs-information">
          <div className="input-group-information">
            
            <input type="text" id="nombre" name="nombre" placeholder="Provincia" required/>
          </div>
          <div className="input-group-information">
            
            <input type="text" id="apellido" name="apellido" placeholder="Provincia" required />
          </div>
          <div className="input-group-information">
           
            <input type="email" id="email" name="email" placeholder="Provincia" required />
          </div>

        </div>
      </div>
      <button className="confirmation-moreinfo">Confirmar</button>
    </>
  );
}

export default SellerUserInfo;
