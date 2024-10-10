import React from 'react';
import { useNavigate } from 'react-router-dom';
import Svgregistro from "../components/Svgregistro";

const Init_register = () => {
  const navigate = useNavigate();

  const eventoCambiarVista = () => {
    navigate("/init-login");
  }

  return (
    <div className="bg-[url('/fondologin.svg')] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-y-8 opacity-90">
        <h1 className="text-2xl font-bold text-center text-gray-800">¡Regístrate ahora!</h1>
       
        
        <div className='flex flex-col gap-y-4'>
          <a href='http://localhost:3000/users/auth/github'>
            <Svgregistro svgUrl="/services/github.svg" text="Registrarse con Github" />
          </a>
          <a href='http://localhost:3000/users/auth/discord'>
            <Svgregistro svgUrl="/services/discord.svg" text="Registrarse con Discord" />
          </a>
          <a href='http://localhost:3000/users/auth/google'>
            <Svgregistro svgUrl="/services/gmail.svg" text="Registrarse con Gmail" />
          </a>
        </div>
        
        <div className='flex flex-col justify-center items-center'>
      
        </div>
      </div>
    </div>
  );
};

export default Init_register;
