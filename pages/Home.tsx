import React from 'react'
import Image from 'next/legacy/image'
import Kpabitey from '../public/kpabitey1.jpg'

function Homepage() {
  return (
    <main className='min-h-screen  bg-no-repeat bg-auto bg-left bg-black' style={{ backgroundImage: 'url(kpabitey1.jpg)' }}>

        <div className='float-right  text-right  pt-60 px-10'>
            <div className='flex  '>
                <div>
                    <h1 className='text-6xl font-bold'>Kpabitey Kofi</h1>
                    <h1 className='font-semibold'>CEO Of BYTE Music</h1>
                    
                    
                </div>
                <div>
                    <div className='flex'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
                    

                    

        </div>

    

                

                
    </main>
  )
}

export default Homepage