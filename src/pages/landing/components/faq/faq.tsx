import arrowRight from './assets/arrow-right.png';


const FAQ = () => {
  return (
    <>
        <div className="mt-32 mb-24 flex flex-col px-20">
            <div className="flex justify-center mb-10">
                <h1 className='text-5xl'>
                    We answer to all your questions
                </h1>
            </div>
            <div className="justify-start">
                <h1 className="font-black leading-10 text-4xl">FAQ</h1>
            </div>
            <div className="mt-16 flex justify-between">
                <h3 className="text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-4 h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-8 border border-black' />
            <div className="mt-16 flex justify-between">
                <h3 className="text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-4 h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-8 border border-black' />
            <div className="mt-16 flex justify-between">
                <h3 className="text-xl text-[#0F0F0F] cursor-pointer hover:underline">
                    What is the purpose of art exchange?
                </h3>
                <img className='text-[#0F0F0F] cursor-pointer w-4 h-6' src={arrowRight} alt="arrow right" />
            </div>
            <hr className='mt-8 border border-black' />
        </div>
    </>
  )
}

export default FAQ