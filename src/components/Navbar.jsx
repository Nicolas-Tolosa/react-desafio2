import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import { FaCartShopping } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const total = 25000;
    const token = true;

    return (
        <div className="flex justify-between bg-slate-900 items-center px-2 py-3">

            <div className="flex items-center space-x-3 text-white ml-6">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-1">
                        <CiPizza className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg" />
                        <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Pizzería</span>
                    </Link>
                </div>

                <div className="flex space-x-3">
                    {token ? (
                        <>
                            <Link to="/login" className="flex items-center space-x-1">
                                <BiSolidLogIn className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Login</span>
                            </Link>
                            <Link to="/register" className="flex items-center space-x-1">
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Registrar</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/profile" className="flex items-center space-x-1">
                                <FaUser className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Perfil</span>
                            </Link>
                            <Link to="/logout" className="flex items-center space-x-1">
                                <BiSolidLogOut className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Logout</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="flex items-center space-x-3 text-white mr-6">
                <Link to="/cart" className="flex items-center space-x-1">
                    <FaCartShopping className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg" />
                    <p className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">Total:</p>
                    <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                        ${formatCurrency(total)}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
