import first from './assets/first.png'
import second from './assets/second.png'
import third from './assets/third.png'
import DiscoverBtn from './discoverbtn'



const FirstSlide = () => {
  return (
    <>
      <div className="mt-24 ml-0 lg:ml-14 mb-24 flex flex-col justify-center items-center">
        <h2 className="text-[#681AA1] font-black text-xl lg:text-3xl text-center leading-7 lg:leading-10">
          Multiple artworks to explore, thousands of creators from around the world !
        </h2>
        <div className='flex flex-col lg:flex-row mt-20 mb-16'>
          <img className='w-40 h-48 lg:w-48 lg:h-60 pt-12 lg:mx-6 cursor-pointer' src={first} alt="barechested woman" />
          <img className='w-40 h-48 lg:w-56 lg:h-72 pt-0 mt-5 lg:mt-0 lg:mx-6 cursor-pointer hover:transition-transform' src={second} alt="barechested woman" />
          <img className='w-40 h-48 lg:w-48 lg:h-64 pt-0 mt-5 lg:mt-0 lg:pt-12 lg:mx-6 cursor-pointer' src={third} alt="barechested woman" />
        </div>
        <DiscoverBtn />
      </div>
    </>
  )
}

export default FirstSlide;