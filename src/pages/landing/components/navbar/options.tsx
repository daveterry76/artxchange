import Hamburger from 'hamburger-react'
import { useState } from 'react'



const Options = () => {
    const [isOpen, setOpen] = useState(false);




  return (
    <>

        {/** Small & Medium Screens */}
        <div className='flex flex-col'>
            <div className='sm:visible lg:invisible sm:flex sm:flex-col ml-24'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen === true && 
                <div className='bg-white p-3 h-fit border-l border-b borderb-[#8E0892] w-full text-center flex flex-col gap-2 items-center'>
                    <a href='#' className='px-5 cursor-pointer'>
                        <p className="hover:underline hover:text-slate-500">About us</p>
                    </a>
                    <a href='#' className='px-5 cursor-pointer'>
                        <p className="hover:underline hover:text-slate-500">Gallery</p>
                    </a>
                    <a href='#' className='px-5 cursor-pointer'>
                        <p className="hover:underline hover:text-slate-500">Marketplace</p>
                    </a>
                    <a href='#' className='px-5 cursor-pointer'>
                        <p className="hover:underline hover:text-slate-500">Cart</p>
                    </a>
                    <button className="text-white mx-4 bg-[#8E0892] rounded-2xl p-2 w-24 h-8 flex flex-row justify-center items-center hover:bg-white hover:border hover:border-[#8E0892] hover:text-[#8E0892] hover:transition hover:ease-linear">
                        <a href='#'>
                            Sign up
                        </a>
                    </button>
                    <button className="text-[#8E0892] border border-[#8E0892] bg-white rounded-2xl p-2 w-24 h-8 flex flex-row justify-center items-center hover:bg-[#8E0892] hover:border hover:border-none hover:text-white hover:transition hover:ease-linear">
                        <a href='#'>
                            Sign in
                        </a>            
                    </button>
                </div>}
        </div>
        

        {/* Large Screens */}
        <div className='hidden lg:flex flex-row text-base font-medium'>
            <div className="flex mt-1">
                <a href='#' className='px-5 cursor-pointer'>
                    <p className="hover:underline hover:text-slate-500">About us</p>
                </a>
                <a href='#' className='px-5 cursor-pointer'>
                    <p className="hover:underline hover:text-slate-500">Gallery</p>
                </a>
                <a href='#' className='px-5 cursor-pointer'>
                    <p className="hover:underline hover:text-slate-500">Marketplace</p>
                </a>
                <a href='#' className='px-5 cursor-pointer'>
                    <p className="hover:underline hover:text-slate-500">Cart</p>
                </a>
            </div>
            <button className="text-white mx-4 bg-[#8E0892] rounded-2xl p-2 w-24 h-8 flex flex-row justify-center items-center hover:bg-white hover:border hover:border-[#8E0892] hover:text-[#8E0892] hover:transition hover:ease-linear">
                <a href='#'>
                    Sign up
                </a>
            </button>
            <button className="text-[#8E0892] border border-[#8E0892] bg-white rounded-2xl p-2 w-24 h-8 flex flex-row justify-center items-center hover:bg-[#8E0892] hover:border hover:border-none hover:text-white hover:transition hover:ease-linear">
                <a href='#'>
                    Sign in
                </a>            
            </button>
        </div>
    </>
  )
}

export default Options