import React from 'react';

const MealCard = ({ mealType, mealName, description, calories, imageUrl }) => {
 const [comidas, setComidas]= useState([]);
 
 useEffect(() => {
    fetch('http://localhost:3000/comidas/getFoot')
        .then(response => response.json())
        .then(data => setComidas(data))
        .catch(error => console.error('Error fetching workshops:', error));
}, []);
freturn (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mb-4">
        {comidas.map((tienda, index) => (
            <div key={index} className="flex p-4">
                <div className="flex-1">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {tienda.nombre} {/* Asegúrate de que cada tienda tenga este campo */}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold text-gray-800">{tienda.ocacion}</h2>
                    <p className="mt-1 text-sm text-gray-600">{tienda.description}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {tienda.calories} kcal {/* Asegúrate de que cada tienda tenga este campo */}
                    </div>
                </div>
                <div className="ml-4">
                    <img className="h-24 w-24 rounded-full object-cover" src={tienda.foto} alt={tienda.mealName} /> {/* Asegúrate de que cada tienda tenga este campo */}
                </div>
            </div>
        ))}
    </div>
);

};

export default MealCard;

