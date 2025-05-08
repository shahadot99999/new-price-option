import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

const Navbaragain = () => {

    const [open, setOpen]=useState(false)

   const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About Us" },
  { id: 3, path: "/products", name: "Products" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 5, path: "/profile", name: "User Profile" },
];
    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <IoMdCloseCircle /> : <RiMenu2Line  />
                }
            
            </div>
           
           <ul className="md:flex">
           {
                routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbaragain;