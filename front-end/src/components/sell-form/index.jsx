import { useState } from "react";
import React from "react";
import "./sellForm.css";
import { LoadPhoto } from "../../img";
import { Previews } from "../preview";
import { useRecoilState } from "recoil";
import { addProduct, picturesURLState } from "../../hooks";
import { ButtonGroup, InputButton, SelectBasic } from "../../ui/inputs";
import { ConfirmButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";

export function SellForm() {
  const [showDropzpne, setShowDropzpne] = useState(false);
  const [imgs, setImgs] = useRecoilState(picturesURLState);
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [talle, setTalle] = useState("");
  const [precioFinal, setPrecioFinal] = useState("");
  const navigate = useNavigate();
  const [selectGenero, setSelectGenero] = useState(null);
  const [selectEstado, setSelectEstado] = useState(null);
  const [selectTalle, setSelectTalle] = useState(null);

  const styleSelect = {
    borderRadius: "10px",
    boxShadow: "0px 3px 24px 11px rgba(0,0,0,1)",
  };
  const styleSelectTalle = {
    borderRadius: "30px",
    boxShadow: "0px 3px 24px 11px rgba(0,0,0,1)",
  };
  const styleNoSelect = {
    border: "none",
  };

  //? este formulario arma un objeto "product" que tiene toda la data del producto a vender.
  // incluyendo un array con las url de las fotos.

  let imgcontroler = false;

  function handleClick() {
    setShowDropzpne(true);
    if (imgs.length === 6) {
      window.alert("Podés subir máximo 6 fotos");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (imgs.length > 0) {
      imgcontroler = true;
    }
    if (imgcontroler) {
      const productToSell = {
        genero: e.target.genero.value,
        prenda: e.target.prenda.value,
        marca: e.target.marca.value,
        color: e.target.color.value,
        estilo: e.target.estilo.value,
        material: e.target.material.value,
        talle: e.target.talle.value,
        estado: e.target.estado.value,
        titulo: e.target.titulo.value,
        descripcion: e.target.descripcion.value,
        precioDeVenta: e.target.precio.value,
        ganancia: e.target.ganancia.value,
        fotos: imgs,
      };
      addProduct(productToSell);

      window.alert("prenda publicada");
      setImgs([]);
      navigate("/", { replace: true });
    } else {
      alert("Necesitas subir al menos una foto");
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    const newValue = value - (value / 100) * 10;
    setPrecioFinal("$" + newValue);
  }

  return (
    <div className="sell-form_conteiner">
      <form onSubmit={handleSubmit}>
        <div className="sell-form_titleandphoto">
          <h2 className="sell-form_title">Vendé tu prenda</h2>
          <div onClick={handleClick} className="sell-form_photo">
            {showDropzpne ? (
              <div className="sell-form_photo">
                <Previews />
                <Previews />
                <Previews />
                <Previews />
                <Previews />
                <Previews />
              </div>
            ) : (
              <div>
                <LoadPhoto />
                <p className="sell-form_photo_instructions">
                  Agregá tu foto aquí
                </p>
              </div>
            )}
          </div>
          <p className="sell-form_photodescription">
            Podés subir máximo 6 fotos. Asegurate de que tengan buena luz y
            fondo claro. Tu prenda debe estar en buen estado, limpia y prolija.
            Solo puede tener 1 o 2 defectos y debes incluir fotos de estos. Si
            está muy sucia, manchada o desgastada tu publicación será rechazada.
            <a
              style={{ color: "black", margin: "0 5px" }}
              href="https://es.wix.com/blog/2015/06/11-trucos-para-fotografia-de-productos/?utm_source=google&utm_medium=cpc&utm_campaign=12446219914^117820822545&experiment_id=^^501731587802^^_DSA&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrLPl8hXDkVjAA7SuS6t3SIS4ONetB38P0B5MDop-eJWTLwA3Bb1A0aAiGnEALw_wcB"
            >
              Más Consejos
            </a>{" "}
          </p>
        </div>
        <div className="sell-form_kind__container">
          <div className="sell-form_kind">
            <label className="sell-form_label">
              Genero:
              <div className="sell-form_kind__butons-conteiner">
                <InputButton
                  style={
                    selectGenero === "Femenino" ? styleSelect : styleNoSelect
                  }
                  readOnly
                  className="sell-options-button"
                  onClick={() => {
                    setGenero("Femenino");
                    setSelectGenero("Femenino");
                  }}
                  type="button"
                  value="Femenino"
                />
                <InputButton
                  style={
                    selectGenero === "Masculino" ? styleSelect : styleNoSelect
                  }
                  readOnly
                  className="sell-options-button"
                  onClick={() => {
                    setGenero("Masculino");
                    setSelectGenero("Masculino");
                  }}
                  type="button"
                  value="Masculino"
                />
                <InputButton
                  style={selectGenero === "Niños" ? styleSelect : styleNoSelect}
                  readOnly
                  className="sell-options-button"
                  onClick={() => {
                    setGenero("Niños");
                    setSelectGenero("Niños");
                  }}
                  type="button"
                  value="Niños"
                />
                <input
                  readOnly
                  type="text"
                  style={{ display: "none" }}
                  name="genero"
                  value={genero}
                />
              </div>
            </label>
            <label className="sell-form_label">
              Prenda:
              <SelectBasic
                className="sell-form_input__select"
                name="prenda"
                value={["Remera", "Pantalon", "Campera", "Zapatos", "Otro"]}
              />
            </label>
            <label className="sell-form_label">
              Marca:
              <SelectBasic
                className="sell-form_input__select"
                name="marca"
                value={["Adidas", "Nike", "Zara", "Topper", "Otra"]}
              />
            </label>
          </div>
          <div className="sell-form_kind">
            <label className="sell-form_label">
              Estado:
              <div className="sell-form_kind__butons-conteiner grid">
                <InputButton
                  style={selectEstado === "A" ? styleSelect : styleNoSelect}
                  readOnly
                  className="sell-options-button grande"
                  onClick={() => {
                    setEstado("Nuevo Con etiqueta");
                    setSelectEstado("A");
                  }}
                  type="button"
                  value="Nuevo con etiqueta"
                />
                <InputButton
                  style={selectEstado === "B" ? styleSelect : styleNoSelect}
                  readOnly
                  className="sell-options-button grande"
                  onClick={() => {
                    setEstado("Nuevo Sin etiqueta");
                    setSelectEstado("B");
                  }}
                  type="button"
                  value="Nuevo sin etiqueta"
                />
                <InputButton
                  style={selectEstado === "C" ? styleSelect : styleNoSelect}
                  readOnly
                  className="sell-options-button grande"
                  onClick={() => {
                    setEstado("Usado Pocas veces");
                    setSelectEstado("C");
                  }}
                  type="button"
                  value="Usado pocas veces"
                />
                <InputButton
                  style={selectEstado === "D" ? styleSelect : styleNoSelect}
                  readOnly
                  className="sell-options-button grande"
                  onClick={() => {
                    setEstado("Usado Muchas veces");
                    setSelectEstado("D");
                  }}
                  type="button"
                  value="Usado muchas veces"
                />
                <input
                  readOnly
                  type="text"
                  style={{ display: "none" }}
                  name="estado"
                  value={estado}
                />
              </div>
            </label>
          </div>
          <div className="sell-form_kind">
            <label className="sell-form_label">
              Color:
              <SelectBasic
                className="sell-form_input__select"
                name="color"
                value={[
                  "blanco",
                  "negro",
                  "gris",
                  "rojo",
                  "verde",
                  "azul",
                  "amarillo",
                  "Otro",
                ]}
              />
            </label>
            <label className="sell-form_label">
              Estilo:
              <SelectBasic
                className="sell-form_input__select"
                name="estilo"
                value={["deportivo", "casual", "formal", "Otra"]}
              />
            </label>
            <label className="sell-form_label">
              Material:
              <SelectBasic
                className="sell-form_input__select"
                name="material"
                value={[
                  "Algodón",
                  "Poliéster",
                  "Lino",
                  "Lana",
                  "Nylon",
                  "Lycra",
                  "Otra",
                ]}
              />
            </label>
          </div>
          <div className="sell-form_kind">
            <label className="sell-form_label">
              Talle:
              <div className="sell-form_kind__butons-conteiner grid">
                <InputButton
                  style={selectTalle === "A" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("xs");
                    setSelectTalle("A");
                  }}
                  type="button"
                  value="XS"
                />
                <InputButton
                  style={selectTalle === "B" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("s");
                    setSelectTalle("B");
                  }}
                  type="button"
                  value="S"
                />
                <InputButton
                  style={selectTalle === "C" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("m");
                    setSelectTalle("C");
                  }}
                  type="button"
                  value="M"
                />
                <InputButton
                  style={selectTalle === "D" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("l");
                    setSelectTalle("D");
                  }}
                  type="button"
                  value="L"
                />
                <InputButton
                  style={selectTalle === "F" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("xl");
                    setSelectTalle("F");
                  }}
                  type="button"
                  value="XL"
                />
                <InputButton
                  style={selectTalle === "G" ? styleSelectTalle : styleNoSelect}
                  readOnly
                  className="sell-options-button redondo"
                  radius="50px"
                  onClick={() => {
                    setTalle("xxl");
                    setSelectTalle("G");
                  }}
                  type="button"
                  value="XXL"
                />
                <input
                  readOnly
                  type="text"
                  style={{ display: "none" }}
                  name="talle"
                  value={talle}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="sell-form_kind largo-completo">
          <label className="sell-form_label">
            Título de la publicación:
            <input
              className="sell-form_input__select"
              type="text"
              name="titulo"
              placeholder="Agregá la prenda, la marca, el color y el estilo para mejorar la búsqueda"
              required
            />
          </label>
          <label style={{ marginTop: "30px" }} className="sell-form_label">
            Descripción del producto:
            <textarea
              style={{ height: "130px" }}
              className="sell-form_input__select"
              type="text"
              name="descripcion"
              placeholder="Podes agregar lo que quieras, el talle real de la etiqueta, formas de uso de la prenda, etc. Recuerda describir si tu prenda tiene algún desperfecto."
              required
            />
            <p style={{ fontSize: "14px", margin: "0" }}>
              No incluyas datos de contacto o tu publicación será rechazada.
            </p>
          </label>
        </div>
        <div
          className="sell-form_kind largo-completo"
          style={{ height: "200px" }}
        >
          <label className="sell-form_label">
            Precio:
            <div className="sell-form_price-container">
              <label style={{ fontSize: "16px" }} className="sell-form_label">
                Precio de venta
                <input
                  onChange={handleChange}
                  name="precio"
                  className="sell-form_input__select precio"
                  type="text"
                  placeholder="$  0"
                  required
                />
              </label>
              <label style={{ fontSize: "16px" }} className="sell-form_label">
                Para vos
                <input
                  className="sell-form_input__select precio"
                  name="ganancia"
                  type="text"
                  placeholder="$  0"
                  value={precioFinal}
                  readOnly
                />
              </label>
            </div>
          </label>
        </div>
        <ConfirmButton text="Vender" type="submit" />
      </form>
    </div>
  );
}
