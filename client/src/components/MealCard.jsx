import React from 'react';

const MealCard = ({ mealType, title, description, calories, imageUrl }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mb-4">
            <div className="flex p-4">
                <div className="flex-1">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {mealType}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {calories} kcal
                    </div>
                </div>
                <div className="ml-4">
                    <img className="h-24 w-24 rounded-full object-cover" src={imageUrl} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default MealCard;
