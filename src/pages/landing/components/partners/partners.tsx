import firstPic from './assets/firstpic.png';
import secondPic from './assets/secondpic.png';
import thirdPic from './assets/thirdpic.png';



const Partners = () => {
  return (
    <>
        <div className='pb-24'>
            <div className='flex justify-center mb-12'>
                <h1 className='text-4xl'>
                    Partners
                </h1>
            </div>
            <div className='flex justify-evenly'>
                <img className='w-36 h-36' src={firstPic} alt='borna soglo gallery logo' />
                <img className='w-36 h-36' src={secondPic} alt='mtn logo' />
                <img className='w-36 h-36' src={thirdPic} alt='africa design school logo' />
            </div>
        </div>
    </>
  )
}

export default Partners