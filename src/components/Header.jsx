import React from "react";
import hamburger from "../assets/hamburger.png";

const Header = () => {
  return (
    <header className="bg-gray-100 flex justify-between items-center px-10 py-2  w-full shadow-xl">
      <div className="w-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iEmu_Fhfpy3Cg9nmBSA05f_J17WMd1xMj2ODv9gGpg&s"
          alt="logo"
        />
      </div>
      <div className="w-8">
        <img src={hamburger} alt="img" />
      </div>
    </header>
  );
};

export default Header;
