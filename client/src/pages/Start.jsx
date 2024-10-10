import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Start = () => {
  const navigate = useNavigate(); 
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4); 


    const navigateTimer = setTimeout(() => {
      navigate('/init-register'); 
    }, 5); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className='w-[100vw] "bg-gradient-to-l md:bg-gradient-to-r"'>
<div
  className={`bg-cover bg-center h-screen flex justify-center items-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
>
  <img src='/public/images/background.png' alt='Background' className='h-60' />

  <div className="w-[70%]">
    
  </div>
</div>
</div>
  
  );
};

export default Start;
