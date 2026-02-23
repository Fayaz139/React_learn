import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between'>
                <div className='flex gap-10 text-gray-400 text-m'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Buy</p>
                    <p>Sell</p>
                </div>
                <button className='rounded-full  border-2 px-5 py-2 text-xs text-gray-400 mr-5'>Sign Up</button>
            </div>
    )
}

export default Nav
