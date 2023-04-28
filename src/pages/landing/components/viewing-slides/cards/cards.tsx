import React, { useState } from 'react'
import cards from './cards.json'

const Cards = () => {
    console.log(cards);

  return (
    <>
        <div className='flex flex-wrap justify-center items-center mt-7 mx-1 lg:ml-16 gap-8'>
            {cards.map((card, index) => (
                <div  className=' py-3 w-[17rem] h-fit px-2 lg:px-0 lg:w-[20rem] lg:h-[22rem] rounded-md border border-[#8E0892]'>
                    <div>
                        <div className='flex flex-wrap gap-3 justify-center'>
                            <img className='w-16 lg:w-24' src={card.image1} alt="first image" />
                            <img className='w-[170px] lg:w-[184px]' src={card.image2} alt="second image" />
                            <img className='w-16 lg:w-24 pl-2' src={card.image3} alt="third image" />
                            <img className='w-16 lg:w-24' src={card.image4} alt="third image" />
                            <img className='w-16 lg:w-24 pr-2' src={card.image5} alt="third image" />
                        </div>
                        <div className='flex justify-between mt-5 px-3'>
                            <div className='flex'>
                                <img className='w-14 h-14' src={card.lastImage} alt="profileImage" />
                                <div className='ml-2 lg:ml-5'>
                                    <h4 className='text-sm lg:text-base font-black'>{card.name}</h4>
                                    <p className='text-sm lg:text-base font-extralight'>{card.credit}</p>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <img src={card.heartImage} alt="heart image" />
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
            
        </div>
    </>
  )
}

export default Cards