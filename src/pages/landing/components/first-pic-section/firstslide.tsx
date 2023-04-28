import first from './assets/first.png'
import second from './assets/second.png'
import third from './assets/third.png'
import DiscoverBtn from './discoverbtn'



const FirstSlide = () => {
  return (
    <>
      <div className="mt-24 ml-14 mb-24 flex flex-col justify-center items-center">
        <h2 className="text-[#681AA1] font-black text-3xl text-center leading-10">
          Multiple artworks to explore, thousands of creators from around the world !
        </h2>
        <div className='flex mt-20 mb-16'>
          <img className='w-48 h-60 pt-12 mx-6 cursor-pointer' src={first} alt="barechested woman" />
          <img className='w-56 h-72 pt-0 mx-6 cursor-pointer hover:transition-transform' src={second} alt="barechested woman" />
          <img className='w-48 h-64 pt-12 mx-6 cursor-pointer' src={third} alt="barechested woman" />
        </div>
        <DiscoverBtn />
      </div>
    </>
  )
}

export default FirstSlide;