import Cards from "./cards/cards"


const ViewingSlides = () => {
  return (
    <>
        <div className="flex justify-center items-center text-2xl lg:text-5xl text-center mt-24 px-2 mx-3 lg:ml-16">
            <h1 className="uppercase text-[#681AA1] font-black tracking-wider mb-10 w-full lg:w-4/5">
                our most popular viewing rooms are waiting for you!
            </h1>
        </div>
        <Cards />
    </>
  )
}

export default ViewingSlides