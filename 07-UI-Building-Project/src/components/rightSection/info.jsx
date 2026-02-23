import React from 'react'
import Nav from './nav'
import Heading from './heading'
import ImgPreview from './imgPreview'

function Info({ onSelectImage }) {
    return (
        <div className=' flex-1/8 p-3 ml-2'>
            <Nav />
            <Heading />
            <div className='flex flex-col justify-around gap-22'>
            <ImgPreview onSelectImage={onSelectImage} />
            <div className='text-gray-300 mr-50'>
                San Francisco boasts over 5,000 real estate agents, but Danielle Lazier Real Estate stands out by selling homes for 8.5% above market average 20 days faster, saving you both time and money
            </div>
            </div>
        </div>
        
    )
}

export default Info
