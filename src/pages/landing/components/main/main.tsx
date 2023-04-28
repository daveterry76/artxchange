import ConnectBtn from "./connectbtn"
import MainText from "./maintext"

const Main = () => {
  return (
    <>
        <div className="flex mt-28 lg:mt-36 overflow-hidden flex-col justify-center items-center px-2 lg:pl-24">
            <MainText />
            <ConnectBtn />
        </div>
    </>
  )
}

export default Main