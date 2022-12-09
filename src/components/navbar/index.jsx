import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../api";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  const onLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
    toast.success("👋 Terima kasih sudah berkunjung");
  };
  return (
    <div>
      <div
        className={
          burger
            ? "bg-[#3D4A6C] fixed sm:w-[80%] md:w-[40%] lg:w-[20%] h-screen p-5 sm:flex sm:flex-col sm:justify-between sm:translate-x-0 lg:translate-x-[-100%] sm:ease-in sm:duration-300 z-20"
            : "bg-[#3D4A6C] fixed sm:w-[80%] md:w-[40%] lg:w-[20%] h-screen p-5 sm:flex sm:flex-col sm:justify-between sm:translate-x-[-100%] lg:translate-x-0 sm:ease-in sm:duration-300 z-20"
        }
      >
        <div>
          <header className="border-b border-white sm:py-3 sm:flex sm:flex-col sm:justify-center sm:items-center">
            <div className="sm:w-14 sm:h-14 bg-white flex justify-center items-center rounded-full">
              logo
            </div>
            <h4 className="text-white font-bold py-3">Job Informasion</h4>
          </header>
          <main>
            <ul>
              {/* <Link to={"/"}> */}
              <li
                onClick={() => {
                  navigate("/");
                  window.location.reload();
                }}
                className="sm:flex sm:items-center sm:gap-x-5 my-5 py-4 cursor-pointer"
              >
                <MdIcons.MdWork size={30} color={"white"} />
                <p className="text-white">Position</p>
              </li>
              {/* </Link> */}
              {/* <Link to={"employees"}> */}
              <li
                onClick={() => {
                  navigate("employees");
                  window.location.reload();
                }}
                className="sm:flex sm:items-center sm:gap-x-5 my-5 py-4 cursor-pointer"
              >
                <FaIcons.FaUserTag size={30} color={"white"} />
                <p className="text-white">Employees</p>
              </li>
              {/* </Link> */}
              {/* <Link to={"sallarys"}> */}
              <li
                onClick={() => {
                  navigate("sallarys");
                  window.location.reload();
                }}
                className="sm:flex sm:items-center sm:gap-x-5 my-5 py-4 cursor-pointer"
              >
                <RiIcons.RiMoneyDollarCircleFill size={30} color={"white"} />
                <p className="text-white">Sallarys</p>
              </li>
              {/* </Link> */}
            </ul>
          </main>
        </div>
        <footer
          onClick={onLogout}
          className="border-t border-white sm:flex sm:items-center sm:gap-x-5 pt-5 cursor-pointer"
        >
          <BiIcons.BiLogOut size={30} color={"white"} />
          <p className="text-white">Logout</p>
        </footer>
      </div>

      <div className="sm:flex sm:justify-between sm:items-center sm:py-3 sm:px-5 lg:justify-end">
        <GiIcons.GiHamburgerMenu
          size={30}
          color={burger ? "white" : "#3D4A6C"}
          className="z-20 lg:hidden"
          onClick={burgerToggle}
        />
        <div className="flex items-center gap-x-3">
          <p>Admin</p>
          <div className="w-10 h-10 bg-[#3D4A6C] rounded-full"></div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
