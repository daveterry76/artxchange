import Logo from "./logo"
import Options from "./options"

const NavBar = () => {
  return (
    <>
        <div className="flex justify-between">
            <Logo />
            <Options />
        </div>
    </>
  )
}

export default NavBar