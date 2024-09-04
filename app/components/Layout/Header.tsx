'use client';
import { styles } from "@/app/utils/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io"; // Import Close Icon
import egypt from '../../assets/egypt.jpg';
import logo from '../../assets/logo.svg';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isRealEstateOpen, setIsRealEstateOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const toggleRealEstate = () => {
        setIsRealEstateOpen(!isRealEstateOpen);
    };

    return (
        <>
            <header className="px-3 py-4 flex justify-between items-center">
                <Link href={"/"}>
                    <Image src={logo} alt="Logo" width={80} height={80} />
                </Link>

                {/* Search bar on large screens */}
                <div className="hidden sm:flex flex-grow max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-[40px] w-full bg-white text-[#333] px-4 rounded-full shadow-md"
                    />
                    <AiOutlineSearch
                        size={24}
                        className="absolute text-gray-500 right-3 top-3 cursor-pointer"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    {/* Create Listing button on large screens */}
                    <div className={`${styles.button} !bg-orange-700 hidden sm:block !w-auto`}>
                        <h1 className="text-white flex items-center justify-center">
                            Create Listing
                        </h1>
                    </div>

                    <div className="flex items-center">
                        <span className="px-1">Ar</span>
                        <Image width={30} height={30} src={egypt} alt="Egypt Flag" />
                    </div>

                    <Link href="/login">
                        Login
                    </Link>

                    <BiMenuAltLeft className="cursor-pointer" onClick={toggleSidebar} size={30} />
                </div>
            </header>

            {/* Search bar on small screens */}
            <div className="sm:hidden my-4 px-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-[40px] w-full bg-white text-[#333] px-4 rounded-full shadow-md"
                    />
                    <AiOutlineSearch
                        size={24}
                        className="absolute text-gray-500 right-3 top-3 cursor-pointer"
                    />
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-[#f0f0f0] text-[#333] p-5 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{ width: "250px" }}
            >
                {/* Close Icon */}
                <div className="flex justify-end">
                    <IoMdClose size={24} className="cursor-pointer" onClick={closeSidebar} />
                </div>

                <ul className="mt-4">
                    {/* Main Category */}
                    <li className="mb-2">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={toggleCategory}
                        >
                            <span>Cars and vehicles</span>
                            <IoIosArrowDown
                                size={20}
                                className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
                            />
                        </div>

                        {/* Nested Categories */}
                        {isCategoryOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                                <li>Cars for sale</li>
                                <li>Cars for rent</li>
                                <li>Motorcycles for sale</li>
                                <li>Motorcycles for rent</li>
                                <li>Boats and boats for sale</li>
                                <li>Boats and boats for rent</li>
                                <li>Heavy trucks and buses for sale</li>
                                <li>Heavy trucks and buses for rent</li>
                                <li>Bicycles</li>
                                <li>Vehicle accessories</li>
                                <li>Vehicle spare parts</li>
                                <li>All vehicles</li>
                            </ul>
                        )}
                    </li>

                    <li className="mb-2">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={toggleRealEstate}
                        >
                            <span>Real estate</span>
                            <IoIosArrowDown
                                size={20}
                                className={`transition-transform ${isRealEstateOpen ? 'rotate-180' : ''}`}
                            />
                        </div>
                        {/* Nested Real Estate Categories */}
                        {isRealEstateOpen && (
                            <ul className="pl-4 mt-2 space-y-2">
                                <li>Properties for sale</li>
                                <li>Properties for rent</li>
                                <li>Lands for sale</li>
                                <li>Lands for rent</li>
                                <li>All properties</li>
                            </ul>
                        )}
                    </li>

                    {/* Additional Sidebar Items */}
                    <li className="mt-8">
                        {/* Create Listing button in the sidebar for small screens */}
                        <div className={`${styles.button} !bg-orange-700`}>
                            <h1 className="text-white flex items-center justify-center">
                                Create Listing
                            </h1>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {/* {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    onClick={closeSidebar} // Allow closing by clicking outside
                ></div>
            )} */}
        </>
    );
};

export default Header;
