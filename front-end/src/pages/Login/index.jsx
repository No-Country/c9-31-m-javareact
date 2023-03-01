import React from "react";
import LoginCarousel from "../../components/login-carousel";
import { Login } from "../../components/login/index";
import "./loginPage.css"
import { useRecoilValue } from 'recoil';
import { userState } from '../../hooks';
import { Navigate } from "react-router-dom";

export function LoginPage(){
    const user = useRecoilValue(userState);
    
    
   
    
    return (
        user.email ? <Navigate to="/" replace /> :
        <div className="login-page_conteiner">
            <div className="login-page_carousel">
                <LoginCarousel/>
            </div>
            <Login/>
        </div>
    );
}