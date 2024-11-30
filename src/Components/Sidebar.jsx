import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import menu from "../assets/menu.png";
import schedule from "../assets/calendar.png";
import imp from "../assets/imp.png";
import plan from "../assets/plan.png";
import assign from "../assets/assign.png";
import logo from "../assets/logo.png";
import pies from "../assets/pie.png";
import avatar from "../assets/avatar.png";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed">
      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <FiMenu size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-[#eff6ef] text-black transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          w-64 md:w-20 lg:w-64`}
      >
        <div className="flex items-center justify-center p-3 ml-6 md:justify-start bg-white">
          <div className="flex items-center space-x-2 ml-6">
            <img src={logo} alt="Logo" className="w-14 h-auto" />
            
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative bottom-4 mt-2">
          <img src={avatar} alt="" className="w-14" />
          <p>Hi,AB</p>
        </div>
        

        <nav className=" mx-auto flex flex-col justify-center items-center w-4/5 bg-white text-black mb-2 font-semibold md:items-start p-3 space-y-2">

          <MenuItem
            icon={<img src={menu} alt="Dashboard" className="w-4 h-4" />}
            label="All Tasks"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={imp} alt="" className="w-4 h-4" />}
            label="Today"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={schedule} alt="" className="w-4 h-4" />}
            label="Important"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={plan} alt="" className="w-4 h-4" />}
            label="Planned"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={assign} alt="" className="w-4 h-4" />}
            label="Assign to me"
            isOpen={isOpen}
          />
        </nav>

        <div className="mx-auto flex flex-row justify-center items-center w-4/5 bg-white text-black font-semibold md:items-start space-y-4">
          <p className="text-4xl mt-1 ml-6">+</p>
        <MenuItem
            label="Add list"
            isOpen={isOpen}
          />
        </div>

       
        <footer className="mx-auto flex flex-col justify-center items-center w-4/5 bg-white text-black mt-1 font-semibold md:items-start p-4 space-y-4">
        <img src={pies} alt="" />
        
        
        </footer>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-5 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, isOpen }) => (
  <div className="flex justify-start items-center space-x-3 p-1 rounded-md w-full hover:bg-slate-400 hover:text-white">
    <span className="text-xl ">{icon}</span>
  
    <span className={`text-[10px] ${isOpen ? "text-black" : "hidden lg:block"}`}>
      {label}
    </span>
  </div>
);

export default Sidebar;
