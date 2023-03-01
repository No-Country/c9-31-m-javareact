import React from 'react'
import RegisterForn from '../../components/register'
import { useRecoilValue } from 'recoil';
import { userState } from '../../hooks';
import { Navigate } from "react-router-dom";

function Register() {
  const user = useRecoilValue(userState);
  
  return (
    <>
      {user.email ? <Navigate to="/" replace /> : (
        <div className="register-page_conteiner">
          <RegisterForn />
        </div>
      )}
    </>
  );
}

export default Register;
