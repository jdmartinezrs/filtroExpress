import React from 'react';
import { useNavigate } from 'react-router-dom';

import Categoria from '../components/Category'; 


const Home = () => {
    const navigate = useNavigate();

    const categories = [
        { svgUrl: "/categorias/textileria.svg", text: "Textileria", className : "w-[70%]" },
        { svgUrl: "/categorias/ceramica.svg", text: "Ceramica", className : "w-[60%]" },
        { svgUrl: "/categorias/orfebreria.svg", text: "Orfebreria", className : "w-[70%]" },
        { svgUrl: "/categorias/tallaenpiedra.svg", text: "Talla en piedra", className : "w-[70%]" },
        { svgUrl: "/categorias/tallamadera.svg", text: "Talla en madera", className : "w-[50%]" },
        { svgUrl: "/categorias/bordado.svg", text: "Bordado", className : "w-[50%]" },
        { svgUrl: "/categorias/joyeria.svg", text: "Joyeria", className : "w-[50%]" },
        { svgUrl: "/categorias/hojalateria.svg", text: "Hojalateria", className : "w-[50%]" },
        { svgUrl: "/categorias/estampado.svg", text: "Estampado", className : "w-[50%]" },
        { svgUrl: "/categorias/pintura.svg", text: "Pintura tradicional", className : "w-[50%]" },
    ];

    const handleCategoryClick = (category) => {
        navigate('/categories', { state: { category } });
    };
    return (
        <div className='relative'>
           
            <section className='m-4 mb-0 flex flex-col gap-y-1 relative'>
                <div className='bg-grayUbi flex justify-between px-2 py-1 gap-x-3 rounded items-center  bg-red-700'>
                    <img src="/searchbar/ubi.svg" alt="" className='w-4' />
                    <input
                        type="text"
                        className="text-black text-opacity-40 text-xs bg-transparent placeholder:text-opacity-40 w-full"
                        placeholder="Search by name..."
                    />
                </div>
                <img src="/home/rectangle.svg" alt="svg" className='absolute top-10 -left-4 z-[-1] w-5' />
                <div className='mx-3 flex flex-col items-center justify-center gap-y-1'>
                    {/* <p className='font-black self-start'>Categorías</p> */}
                    <div className='my-2 flex items-start gap-x-5 gap-y-2 flex-wrap'>
                        {categories.map((category) => (
                            <Categoria
                                key={category.text}
                                svgUrl={category.svgUrl}
                                text={category.text}
                                className={category.className}
                                onClick={() => handleCategoryClick(category.text)} 
                            />
                        ))}
                    </div>
                    <div className='flex gap-x-5 underline text-lg'>
                        <img src="/home/rombos.svg" alt="svg" className='w-20' />
                        <p>Talleres del mes</p>
                        <img src="/home/rombos.svg" alt="svg" className='w-20' />
                    </div>
                    <a href='/workshops'><img src="/home/image.svg" alt="" className='w-52 mt-4' /></a>
                </div>
            </section>    
        </div>
    );
};

export default Home;
