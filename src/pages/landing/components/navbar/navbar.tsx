import Logo from "./logo"
import Options from "./options"

const NavBar = () => {
  return (
    <>
        <div className="px-1 lg:px-0 flex justify-between">
            <Logo />
            <Options />
        </div>
    </>
  )
}

export default NavBar