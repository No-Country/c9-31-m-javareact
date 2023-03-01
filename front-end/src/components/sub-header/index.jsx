import React from "react";
import { BottomlessButton, CategoryButton, LoginButton } from "../../ui/buttons";
import { LoginImg, ShoppingBag } from "../../img";
import "./subHeader.css";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "../shopping-cart";

export function SubHeader() {
const navigate = useNavigate();
const storedUser = localStorage.getItem("user");
let email;
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      email = parsedUser.email;
    }

  return (
    <>  
      <div className="sub_header-conteiner">
        <div className="category-conteiner">
          <CategoryButton onClick={()=>{navigate("/resultados/femenino", { replace: true })}} text="Mujer"  />
          <CategoryButton onClick={()=>{navigate("/resultados/masculino", { replace: true })}} text="Hombres"  />
          <CategoryButton onClick={()=>{navigate("/resultados/niños", { replace: true })}} text="Niños"  />
          <CategoryButton  text="Ofertas"  />
          <CategoryButton  text="Sobre Nosotros"  />
        </div>

        <div className="category-conteiner">
          <LoginButton>
            <BottomlessButton
            text={email? email:"Ingresar / Registrate"}
            img={<LoginImg/>}
            />
          </LoginButton>
          <ShoppingCart>
              <BottomlessButton
              text="Carrito"
              img={<ShoppingBag />}
          ></BottomlessButton>
          </ShoppingCart>

        </div>
      </div>
    </>
  );
}
