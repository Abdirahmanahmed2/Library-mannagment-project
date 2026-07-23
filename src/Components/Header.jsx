import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Header () {
    return <>
    <div className="flex justify-between items-center bg-white text-black px-15 h-[70px]">
        <h1 className="font-bold text-3xl text-blue-600">Smart-Library</h1>

        <ul className="flex gap-5 font-semibold ">
           <Link to="/"> <li>Home</li></Link>
           <Link to="/about"> <li>About</li></Link>
           <Link to="/books"> <li>Books</li></Link>
           <Link to="/members"> <li>Members</li></Link>
           <Link to="/contact"> <li>Conatct</li></Link>
           
        </ul>

        <div className="flex gap-5 font-bold items-center ">
        <Link to="/Cart"><FaCartShopping className="text-2xl mr-5" /></Link>
        <Link to="/login"><button className="w-[100px] h-[35px] bg-blue-600 rounded-lg text-white">Login</button></Link>
        </div>
    </div>
    <hr className="text-purple-300" />
    </>
}export default Header