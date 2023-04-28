import image from './assets/first.png'


const SecondSlide = () => {
  return (
    <>
        <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mr-0 lg:mr-12'>
                <img className='w-64 h-64' src={image} alt='guy on glasses' />
            </div>
            <div className='w-full px-4 lg:px-0 lg:w-1/2 flex flex-col text-center justify-center ml-0 lg:ml-12 mt-6 lg:mt-0'>
                <h1 className='font-black text-center lg:text-left text-3xl md:text-4xl lg:text-6xl text-[#681AA1] mb-6'>
                    Safety at all times!
                </h1>
                <p className='w-full lg:w-5/6 text-[15px] lg:text-xl leading-9 text-[#060518]'>
                    ArtXchange is based on Blockchain technology. It ensures seamless security for all users. Are you an artist, collector or curator? ArtXchange allows you to promote, manage, market or search for digital artworks in complete security.
                </p>
            </div>

        </div>
    </>
  )
}

export default SecondSlide;