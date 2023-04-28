import image from './assets/first.png'


const SecondSlide = () => {
  return (
    <>
        <div className='flex'>
            <div className='w-1/2 flex justify-end mr-12'>
                <img className='w-96 h-96' src={image} alt='guy on glasses' />
            </div>
            <div className='w-1/2 flex flex-col justify-center ml-12'>
                <h1 className='font-black text-6xl text-[#681AA1] mb-6'>
                    Safety at all times!
                </h1>
                <p className='w-5/6 text-xl leading-9 text-[#060518]'>
                    ArtXchange is based on Blockchain technology. It ensures seamless security for all users. Are you an artist, collector or curator? ArtXchange allows you to promote, manage, market or search for digital artworks in complete security.
                </p>
            </div>

        </div>
    </>
  )
}

export default SecondSlide;