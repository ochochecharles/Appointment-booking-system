import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg"
import { useState, useEffect, useRef } from "react";
function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const toogleMenu = () => setOpen(prev => !prev);

    // close the hamburger menu when the documents is clicked
    useEffect(() => {
      const handleRemoveMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleRemoveMenu);
      return () => {
        document.removeEventListener("mousedown", handleRemoveMenu);
      }
    }, [])
    
    return ( 
        <div className="shadow-md p-4 flex justify-between items-center bg-gray-800 text-white">
            <div className="flex items-center gap-2">
                <img src={logo} alt="" className="size-12 sm:size-14 md:size-16 lg:size-18 rounded-full "/>
                <h1 className="text-xl font-black">MediLink</h1>
            </div>

            <nav className="">
                {/* desktop menu */}
                <div className="hidden sm:flex items-center gap-6 pr-8">
                    <Link to="/" className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">Home</Link>
                    <Link className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">About</Link>
                    <Link className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">Service</Link>
                </div>

                {/* toogle button */}
                <div>
                    <button onClick={toogleMenu} className="sm:hidden text-2xl">
                        {open ? <FiX/> : <FiMenu/>}
                    </button>
                </div>

                {/* hamburger menu */}
                {open && (
                    <div 
                    ref={menuRef} 
                    className="sm:hidden w-full absolute px-6 py-3 top-24 right-0 bg-white/90 backdrop flex flex-col items-end space-y-4 text-black">
                        <Link to="/" onClick={() => setOpen(false)} className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">Home</Link>
                        <Link onClick={() => setOpen(false)} className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">About</Link>
                        <Link onClick={() => setOpen(false)} className="font-semibold hover:underline underline-offset-4 decoration-red-900 decoration-2">Service</Link>
                    </div>
                )}            
            </nav>
        </div>
     );
}

export default Header;