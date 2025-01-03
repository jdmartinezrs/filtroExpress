import React from 'react';

const Categoria = ({ svgUrl, text, className, onClick  }) => {
    return (
        <div className='flex items-center justify-center w-12 flex-col' onClick={onClick}>
            <div className='bg-grayUbi w-10 h-10 flex items-center justify-center rounded-full bg-green-100'>
                <img src={svgUrl} alt="" className={`${className} w-90 h-90`} />
            </div>
            <p className='text-xs text-center leading-tight'>{text}</p>
        </div>
    )

}

export default Categoria;