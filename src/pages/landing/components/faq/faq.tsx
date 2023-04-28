import arrowRight from './assets/arrow-right.png';


const FAQ = () => {
  return (
    <>
        <div className="mt-32 mb-24 flex flex-col px-8 lg:px-20">
            <div className="flex justify-center mb-10">
                <h1 className='text-2xl md:text-3xl lg:text-5xl'>
                    We answer to all your questions
                </h1>
            </div>
            <div className="justify-start">
                <h1 className="font-black leading-10 text-2xl lg:text-4xl">FAQ</h1>
            </div>
            <div className="mt-16 flex justify-between">
                <h3 className="text-sm lg:text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-2 h-3 lg:w-4 lg:h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-5 lg:mt-8 border border-black' />
            <div className="mt-16 flex justify-between">
                <h3 className="text-sm lg:text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-2 h-3 lg:w-4 lg:h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-5 lg:mt-8 border border-black' />
            <div className="mt-16 flex justify-between">
                <h3 className="text-sm lg:text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-2 h-3 lg:w-4 lg:h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-5 lg:mt-8 border border-black' />
        </div>
    </>
  )
}

export default FAQ