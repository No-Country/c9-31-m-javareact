import React from "react";
import { SellForm } from "../../components/sell-form";

const Sell = () => {
  let storedUser = localStorage.getItem("user");
  let email;
 

  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    console.log(parsedUser);
    email = parsedUser.email;
} 

  return (
    <div className="new">
      <SellForm/>
    </div>
  );
};

export default Sell;