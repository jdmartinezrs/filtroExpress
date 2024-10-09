import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Product = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [userData, setUserData] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const getCookieValue = (cookieName) => {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(row => row.startsWith(cookieName + '='));
        return cookie ? cookie.split('=')[1] : null;
    };

    useEffect(() => {
        const fetchUserData = async (email) => {
            try {
                const response = await fetch('http://localhost:3000/users/verifyEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ correo: email }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    // Check if the product is in the user's favorites
                    setIsFavorite(data.favoritos.includes(product._id));
                } else {
                    console.error('Error al obtener los datos del usuario');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        const token = getCookieValue('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userEmail = decodedToken.correo;
                fetchUserData(userEmail);
            } catch (error) {
                console.error('Token inválido', error);
            }
        }
    }, [product]);

    const fetchUserCartUpdate = async () => {
        if (!userData || !product) return;
        const userId = userData._id;
        try {
            const response = await fetch(`http://localhost:3000/users/carrito/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ compras: [product._id] }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data); 
            } else {
                console.error('Error al actualizar el carrito del usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };
    
    const fetchUserFavoriteUpdate = async () => {
        if (!userData || !product) return;
        const userId = userData._id;
        try {
            const response = await fetch(`http://localhost:3000/users/favorite/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ favoritos: [product._id] }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data); 
                setIsFavorite(!isFavorite); 
            } else {
                console.error('Error al actualizar los favoritos del usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const handleAddToCart = () => {
        fetchUserCartUpdate();
    };

    const handleAddToFavorite = () => {
        fetchUserFavoriteUpdate();
    };

    if (!product) {
        return <div>No se encontró información del producto.</div>;
    }

    const precioOriginal = product.precio?.$numberDecimal || product.precio;
    const precioConDescuento = product.descuento
        ? (precioOriginal - (precioOriginal * (product.descuento / 100))).toFixed(2)
        : null;

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 z-10">
                <a href="/home" className="flex items-center">
                    {/* <img src={leftSVG} alt="Left Arrow" className="h-20" /> */}
                </a>
            </div>
            <div>
                <div className="relative">
                    <img src={product.foto} alt={product.nombre} className="w-full h-80 object-fill" />
                    {product.descuento && (
                        <div
                            className="absolute bottom-4 left-4 flex items-center text-white p-2"
                            style={{
                                backgroundImage: `url(/discount.svg)`,
                                backgroundSize: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                            }}
                        >
                            <span className="text-lg font-bold">-{product.descuento}%</span>
                        </div>
                    )}
                </div>
                <div className='flex bg-neutral-700'>
                    <img src="/triangle.svg" className='h-10' alt="Triángulo" />
                    <h1 className="text-2xl font-bold text-white p-1">{product.nombre}</h1>
                </div>
                <div className="flex p-4 gap-2 flex-col">
                    <p>
                        {precioConDescuento ? (
                            <>
                                <span className="text-black line-through mr-2">${precioOriginal}</span>
                                <span className="text-black font-bold">${precioConDescuento}</span>
                            </>
                        ) : (
                            <span>${precioOriginal}</span>
                        )}
                    </p>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold'>{product.nombreArtesano}</p>
                        <button onClick={handleAddToFavorite}>
                            <img 
                                src={isFavorite ? "/buttons/favorite-si.svg" : "/buttons/favorite-no.svg"} 
                                className='h-10 w-10 mr-10' 
                                alt="Favorito" 
                            />
                        </button>
                    </div>
                    <p><span className='font-bold'>Dimensiones</span>: {product.dimensiones}</p>
                    <p><span className='font-bold'>Descripción</span>: {product.descripcion}</p>
                    <p className="flex items-center gap-2 mt-2">
                        <img src="/buttons/si-black.svg" className="w-5 h-5" alt="Envío" />
                        Cuenta con envío hacia tu ubicación
                    </p>
                </div>
                <div className='flex pl-4'>
                    <button className='flex items-center bg-zinc-300 px-2 py-1' onClick={handleAddToCart}>
                        <img src="/navbar/cart-black.svg" className='h-5 w-5' alt="Carrito" />
                        <p className='ml-2'>Añadir a mi carrito de compras</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;