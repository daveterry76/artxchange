const Options = () => {
  return (
    <>
        <div className='flex text-base font-medium'>
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