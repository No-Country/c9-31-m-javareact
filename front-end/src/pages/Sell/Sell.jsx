import React from "react";
import { SellForm } from "../../components/sell-form";
import { Navigate } from "react-router-dom";
import { userState } from "../../hooks";
import { useRecoilValue } from "recoil";

const Sell = () => {
  const user = useRecoilValue(userState)

  return  (user.email? <div className="new">
      <SellForm/>
    </div>:
    <Navigate to="/login"/>
    )
  
};

export default Sell;