import React from "react";
import { SellForm } from "../../components/sell-form";
import { Navigate } from "react-router-dom";

const Sell = ({user}) => {
  if(!user){
  return <Navigate to="/login"/>
  }
  // esto no lo vamos a usar aca. hay q pasar la info del vendedor por hooks a los componentes
  // let storedUser = localStorage.getItem("user");
  // let email;
 

//   if (storedUser) {
//     const parsedUser = JSON.parse(storedUser);
//     console.log(parsedUser);
//     email = parsedUser.email;
// } 

  return (
    <div className="new">
      <SellForm/>
    </div>
  );
};

export default Sell;