import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
        <div className="flex flex-row justify-center items-center p-6 space-x-12 font-semibold text-xl">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contace">Contact</Link>
        </div>
    </nav>
  )
}
export default Navbar