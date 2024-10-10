import React from 'react';
import { useNavigate } from 'react-router-dom';

import Categoria from '../components/Category'; 

const Home = () => {
    const navigate = useNavigate();

    const categories = [
        { svgUrl: "/images/plato.png", text: "Vegetables", className : "w-[70%]" },
        { svgUrl: "/categorias/ceramica.svg", text: "Nuts & Sets", className : "w-[60%]" },
        { svgUrl: "/categorias/orfebreria.svg", text: "Protein", className : "w-[70%]" },
        { svgUrl: "/categorias/tallaenpiedra.svg", text: "Shakes", className : "w-[70%]" },
    ];

    const handleCategoryClick = (category) => {
        navigate('/categories', { state: { category } });
    };

    return (
        <div className='relative'>
           
            <section className='m-4 mb-0 flex flex-col gap-y-1 relative'>
                <div className='flex'>
                    <img src="/public/images/mujer.png" className="w-10" alt="Descripción de la imagen" />
                    <h1 className='text-xl'>Hello Sara</h1>
                </div>
            
                <div className="bg-grayUbi flex justify-between px-2 py-1 gap-x-3 rounded items-center h-10 w-65 m-7 bg-red-700">
                    <input
                        type="text"
                        className="text-black text-opacity-40 text-xs bg-transparent placeholder:text-opacity-40 w-full"
                        placeholder="Search by name..."
                    />
                </div>
                <h1 className='text-xl'>Food Category</h1>
                <div className='mx-3 flex flex-col items-center justify-center gap-y-1'>
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
                    <h1>Talleres del mes</h1>
                    <div className='flex gap-x-5 underline text-lg'>
                        

                        <div>
                            {/* Meal cards included here */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mb-4">
                                <div className="flex p-4">
                                    <div className="flex-1">
                                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            Breakfast
                                        </span>
                                        <h2 className="mt-2 text-xl font-semibold text-gray-800">French Green Salad</h2>
                                        <p className="mt-1 text-sm text-gray-600">Discover the joy of a truly nourishing meal.</p>
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            125 kcal
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <img className="h-24 w-24 rounded-full object-cover" src="/api/placeholder/96/96" alt="French Green Salad" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mb-4">
                                <div className="flex p-4">
                                    <div className="flex-1">
                                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            Lunch
                                        </span>
                                        <h2 className="mt-2 text-xl font-semibold text-gray-800">Green Veggies</h2>
                                        <p className="mt-1 text-sm text-gray-600">Discover the joy of a truly nourishing meal.</p>
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            115 kcal
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <img className="h-24 w-24 rounded-full object-cover" src="/api/placeholder/96/96" alt="Green Veggies" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href='/workshops'><img src="/home/image.svg" alt="" className='w-52 mt-4' /></a>
                </div>
            </section>    
        </div>
    );
};

export default Home;