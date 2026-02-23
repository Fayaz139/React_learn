import React from 'react'

function ImgPreview({ onSelectImage }) {
    return (
        <div className='mt-20 flex gap-8 '>
                <img src="https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww" alt="" className='w-25 h-25 rounded-2xl cursor-pointer' onClick={(e) => onSelectImage(e.target.src)}/>
                
                <img src="https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fHww" alt="" className='w-25 h-25 rounded-2xl cursor-pointer' onClick={(e) => onSelectImage(e.target.src)}/>

                <img src="https://plus.unsplash.com/premium_photo-1694475117121-0c14f8ddf7bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbGxhfGVufDB8fDB8fHww" alt="" className='w-25 h-25 rounded-2xl cursor-pointer' onClick={(e) => onSelectImage(e.target.src)}/>

                <img src="https://images.unsplash.com/photo-1711914128841-7d8dbc43fe65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhJTIwcGhvdG9zJTIwaW4lMjBldmVuaW5nfGVufDB8fDB8fHww" alt="" className='w-25 h-25 rounded-2xl cursor-pointer' onClick={(e) => onSelectImage(e.target.src)}/>
            </div>
    )
}

export default ImgPreview
