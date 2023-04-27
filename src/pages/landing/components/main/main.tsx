import ConnectBtn from "./connectbtn"
import MainText from "./maintext"

const Main = () => {
  return (
    <>
        <div className="flex mt-36 overflow-hidden flex-col justify-center items-center pl-24">
            <MainText />
            <ConnectBtn />
        </div>
    </>
  )
}

export default Main