import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-900 text-3xl p-2' >
            <div className='w-2/3 mx-auto ' >
                <span className='text-black' >&lt;</span>
                <span className='text-white' >Pass</span>
                <span className='text-black' >Manage</span>
                <span className='text-black' >&gt;</span>
            </div>
        </nav>
    )
}

export default Navbar