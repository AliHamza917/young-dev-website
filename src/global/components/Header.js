import React, { useState } from "react";
import Logo from "../../assets/youngDev-logo-bg.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import ToggleSwitch from "./ToggleSwitch";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
    const [checked, setChecked] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['Token']);
    const navigate = useNavigate();

    const handleToggle = () => {
        setChecked(!checked);
    };

    const handleLogout = () => {
        removeCookie('Token', { path: '/' });
        navigate('/login-page');
    };
    // Determine itemsNames and pathNames based on the presence of the token
    const isLoggedIn = !!cookies.Token;

    const itemsNames = isLoggedIn
        ? ["Home", "About", "Internships", "Blogs", "Dashboard", "Logout"]
        : ["Home", "About", "Internships", "Blogs", "LogIn|Register"];

    const pathNames = isLoggedIn
        ? ["/", "/about-us-page", "/internship-page", "/blogs-page", "/dashboard-page", "/logout"]
        : ["/", "/about-us-page", "/internship-page", "/blogs-page", "/login-page"];

    const listItem = itemsNames.map((itemsName, index) => (
        <div
            key={index}
            className="hover:scale-125 transition duration-500 cursor-pointer font-normal border-b-[1px] text-lg px-3 lg:border-b-0 sm:font-extrabold sm: sm:py-2"
        >
            {itemsName === "Logout" ? (
                <span onClick={handleLogout}>Logout</span>
            ) : (
                <NavLink to={pathNames[index]}>{itemsName}</NavLink>
            )}
        </div>
    ));

    return (
        <>
            <div className="px-16 md:px-36">
                <div
                    className={`flex justify-center dark:bg-darkModeColor rounded-xl items-center lg:justify-between py-2`}
                >
                    <div className="w-full flex justify-between">
                        <Link to={"/"} className="m">
                            <img
                                className="dark:bg-[#f4f4f557] rounded-3xl p-2 px-4"
                                src={Logo}
                                alt="Logo"
                            />
                        </Link>
                        <div className="h-12 w-12 flex pt-[10%] lg:hidden" onClick={handleToggle}>
                            {checked ? (
                                <IoCloseSharp className="h-16 w-16 flex lg:hidden" />
                            ) : (
                                <IoMenu className="h-12 w-12 flex lg:hidden" />
                            )}
                        </div>
                    </div>

                    <div className="hidden lg:flex item">
                        {listItem}
                        <ToggleSwitch />
                    </div>
                </div>
                {/* Mobile Nav Menu */}
                <div
                    className={`text-black dark:text-white dark:bg-darkModeColor font-extrabold text-center lg:hidden ${
                        checked ? "block" : "hidden"
                    }`}
                >
                    {listItem}
                    <div className="w-full border-solid border-b-[1px]"></div>
                    <div className="py-2">
                        <ToggleSwitch />
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default Header;
