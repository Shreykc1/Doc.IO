import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='loader'>
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
            </div>
        </div>
    )
}

export default Loader
