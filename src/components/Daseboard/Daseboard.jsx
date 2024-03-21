import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useAuth from "../Hook/useAuth";
const Daseboard = () => {
  const {UserLogout} = useAuth();

    const hendlelogout = () => {
      UserLogout()
          .then(() => { })
          .catch((error) => {
              console.log(error)
          })
  }
  const [togol,settogol]=useState(false);
  const links =(
    <>
       <NavLink to="/daseboard/home">
            <li className=" bg-white text-base font-medium text-black border px-5 py-2 rounded-md mb-4">
              UserHome
            </li>
          </NavLink>
          <NavLink to="/daseboard/domain">
            <li className="  bg-white text-base font-medium text-black border px-5 py-2 rounded-md mb-4">
              Domain
            </li>
          </NavLink>
          <NavLink to="/daseboard/adddomain">
            <li className=" bg-white text-base font-medium text-black border px-5 py-2 rounded-md mb-4">
              Add Domain
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="  bg-white text-base font-medium text-black border px-5 py-2 rounded-md mb-4">
              Home
            </li>
          </NavLink>

            <li onClick={hendlelogout} className="  bg-white text-base font-medium text-black border px-5 py-2 rounded-md mb-4">
              Logout
            </li>
    
    </>
  )
 
  return (
    <div className="md:flex mt-5 px-5 relative">
       <div className="block md:hidden" ><button className="p-5" onClick={() => settogol(!togol)}>{togol ? <IoClose className="text-2xl" /> : <FaBars className="text-2xl" />}</button></div>
      <div className={`${togol?'block':'hidden'} z-20 absolute`}>
        <ul className="">
         {links}
        </ul>
      </div>
      <div className=" hidden md:block w-2/12 bg-gray-50">
        <ul className="">
          {links}
        </ul>
      </div>
      <div className="w-full md:w-10/12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Daseboard;
