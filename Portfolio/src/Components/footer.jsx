import React from 'react'
import { Link } from 'react-router-dom'


const footer = () => {
    return (
        <div>
            <div className="footer tracking-tighter flex h-65 justify-between py-7 bg-gray-950 w-full px-20 mt-10">
                <div className="flex-col w-100 p-6   items-center gap-x-3">
                    <div className='flex'>
                        <img
                            src="logo.png"
                            alt="logo"
                            className="w-10 h-10 object-contain"
                        />

                        <h1 className="text-3xl font-semibold text-white tracking-wide">
                            KAPIL
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <p className='text-gray-500 text-xl'>Building Futrustic experiences <br /> through code & Creativity</p>
                    </div>
                </div>
                <div className=' ml-3 border-gray-500 border-l-4 border-b px-3 py-6 rounded-xl w-60'>
                    <p className='text-2xl text-purple-500 font-black'>NAVIGATION</p>
                    <div className="list flex text-gray-500 flex-col text-xl px-2 py-4">
                        <Link to={'/'}>_Home</Link>
                        <Link to={'/Work'}>_Work</Link>
                        <Link to={'/About'}>_About</Link>
                        <Link to={'/Contact'}>_Conact</Link>
                    </div>
                </div>
                <div className=' ml-3 border-gray-500 border-l-4 border-b px-3 py-6 rounded-xl w-60'>


                    <p className='text-2xl text-purple-500 font-black'>CONTACT</p>
                    <div className="list flex text-gray-500 flex-col text-xl px-2 py-4">
                        <Link to={''}>Github</Link>
                        <Link to={''}>Email</Link>
                        <Link to={''}>Linked_in</Link>
                        <Link to={''}>Instagram</Link>
                    </div>
                </div>
                <div className='  border-gray-500 border-l-4 border-b px-3 py-6 rounded-xl ml-3'>
                    <p className='text-2xl text-purple-500 font-black'>CURRENT STATUS</p>
                    <div className="flex py-5 items-center">
                        <div className='h-2 w-2 bg-green-300 rounded-full'></div>
                        <p className='text-gray-500 text-xl ml-3'> Avaliable for Work</p>
                    </div>
                    <p className='text-gray-500 text-xl ml-3'>Let's create something <br />extraordinary together</p>
                </div>
                <div>
                      <div className='border rounded-xl border-gray-500 px-2 py-4 h-37 my-5 border-l-4 border-b-2 ml-3'>

                    <p className='text-blue-400 text-xl ml-3'>&gt; stay curious</p>
                    <p className='text-blue-400 text-xl ml-3'>&gt; keep building</p>
                    <p className='text-blue-400 text-xl ml-3'>&gt; never stop learning</p>
                    <p className='text-blue-400 text-xl ml-3'>&gt; think Creative</p>

                </div>
                     <p className='text-gray-500 text-xl'>designed and made with ❤️ using react</p>

                </div>
              
            </div>
        </div>

    )
}

export default footer
