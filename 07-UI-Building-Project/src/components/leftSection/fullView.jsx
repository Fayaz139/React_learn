import React from 'react'

function FullView({ image }) {
    return (
        <div className=' flex-1 p-3 relative'>
            <img src={image} alt="villa" className='w-full h-full rounded-2xl relative'/>
            <h1 className='absolute top-6 text-4xl left-1/2 -translate-x-1/2 text-white font-bold'>Danielle</h1>
        </div>
    )
}

export default FullView
