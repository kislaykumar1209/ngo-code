import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import user from "../../assets/user.webp";
import { Link } from "react-router-dom";

import AboutLionsClub from "../home-page-info/aboutlionsclub";
import Navbar from "../navbar";
import Sidebar from "../../sidebar/sidebar";
import PartnerWithus from "./PartnerWithus";

const Others = () => {
    const [profile, profileOpen] = useState(false);
    const [openTab, setOpenTab] = useState(1);

    return (
        <>

            <Sidebar>
                <Navbar title="Partner with us" />
                <div className="flex h-full scroll-smooth">
                    <div className="w-full h-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex justify-center  items-center mx-6 mb-0 list-none flex-wrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5 md:flex-nowrap"
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 1
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >
                                            <Link to='/others/partnerwithus'>

                                                <p className="px-5 py-3">PARTNER WITH US</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">

                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 2
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"
                                            role="tablist"
                                        >
                                            <Link to='/banner/others'>
                                                <p className="px-5 py-3">COME BE A LION</p>
                                            </Link>
                                        </a>

                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 4
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(4);
                                            }}
                                            data-toggle="tab"
                                            href="#link4"
                                            role="tablist"
                                        >
                                            <Link to='/others/donate'>

                                                <p className="px-5 py-3">DONATE US</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 6
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(6);
                                            }}
                                            data-toggle="tab"
                                            href="#link6"
                                            role="tablist"
                                        >
                                            <Link to='/home-page-info/footer'>

                                                <p className="px-5 py-3">FOOTER</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 3
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(3);
                                            }}
                                            data-toggle="tab"
                                            href="#link3"
                                            role="tablist"
                                        >
                                            <Link to='/others/contact'>

                                                <p className="px-5 py-3">CONTACT</p>
                                            </Link>
                                        </a>
                                    </li>

                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                                    <div className="px-4 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div
                                                className={openTab === 1 ? "block" : "hidden"}
                                                id="link1"
                                            >
                                                <PartnerWithus />
                                            </div>
                                            {/* <div
                                            className={openTab === 2 ? "block" : "hidden"}
                                            id="link2"
                                        >
                                            <WhatWeDoHome sub={"whatwedohome"} />
                                        </div>
                                        <div
                                            className={openTab === 3 ? "block" : "hidden"}
                                            id="link3"
                                        >
                                            <GlobalCauseHome sub={"globalhome"} />
                                        </div>
                                        <div
                                            className={openTab === 4 ? "block" : "hidden"}
                                            id="link4"
                                        >
                                            <PartnerHome sub={"partnerhome"} />
                                        </div>
                                        <div
                                            className={openTab === 5 ? "block" : "hidden"}
                                            id="link5"
                                        >
                                            <UpcomingHome sub={"upcominghome"} />
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
            {/* Dailog Box */}
        </>
    );
};

export default Others;
