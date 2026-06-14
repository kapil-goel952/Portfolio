import React from 'react'

const footer = () => {
    return (
        <div>
            <div className="footer  h-50 bg-amber-900 w-full px-20 mt-10">
                <div className="flex items-center gap-x-3">

                    <img
                        src="logo.png"
                        alt="logo"
                        className="w-10 h-10 object-contain"
                    />

                    <h1 className="text-2xl font-semibold tracking-wide">
                        Portfolio
                    </h1>
                    
                    <p>kapilgoel849@gmail.com</p>

                </div>
            </div>
        </div>

    )
}

export default footer
