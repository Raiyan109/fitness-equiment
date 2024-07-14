import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const activeLink = 'text-primary font-bold flex items-center px-4 -mb-1 text-xl'
    return (
        <div>
            <header className="p-4 bg-gray m-7 rounded-full">
                <div className="flex justify-between h-8 lg:h-14 py-2 lg:py-3 px-2 lg:px-10">
                    <div className="flex gap-10">
                        <Link to='/' className="flex items-center p-2 font-anton text-xl">
                            <h3>RHINOS GYM</h3>
                        </Link>
                    </div>

                    <div className="gap-10  hidden lg:flex">
                        <ul className="items-stretch hidden space-x-3 lg:flex font-roboto">
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-[17px]">
                                    Home
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                    Goals
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                    Services
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                    Class Schedules
                                </Link>
                            </li>
                            <li className="flex">
                                <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="p-4 lg:hidden" onClick={toggleMobileMenu}>
                            <BiMenuAltRight size={24} />
                        </button>
                    </div>
                </div>

            </header>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="lg:hidden bg-gray m-7 rounded-t-2xl rounded-b-[50px] py-5">
                    <ul className="flex flex-col items-center space-y-3 mt-4">
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent relative text-[17px]">
                                Home
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                Goals
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                Services
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                Class Schedules
                            </Link>
                        </li>
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-primary border-blue-600 text-[17px]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;