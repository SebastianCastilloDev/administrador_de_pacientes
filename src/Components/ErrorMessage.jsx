import React from 'react'

export default function ErrorMessage({ children }) {
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            {children}
        </div>
    )
}
