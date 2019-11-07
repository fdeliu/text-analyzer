import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className="bg-secondary text-white py-1">
           <div className="text-center">
                <p className="pt-4 ml-auto">{year} &copy; Flamur Deliu</p>
           </div>
        </div>
    )
}
