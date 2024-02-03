import React, { useState } from "react";
import Navbar from "./navbar";
import OverviewSponsor from "./sponsor/overvies-sponsor";
import PartnerWithUs from "./sponsor/Globalsponser";
import Opportunity from "./sponsor/partnerwithus";

const Sponsor = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <>
            <Navbar title="Sponsor" />

            <div className="flex h-full">
                <div className="w-full h-full">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <ul
                                className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap lg:flex-nowrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5 md:flex-nowrap"
                                role="tablist"
                            >
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                        <p>Overview</p>
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                        <p>Global Sponsor</p>
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                        <p>Partner With Us</p>
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
                                            <OverviewSponsor />
                                        </div>
                                        <div
                                            className={openTab === 2 ? "block" : "hidden"}
                                            id="link2"
                                        >
                                            <Opportunity />
                                        </div>
                                        <div
                                            className={openTab === 3 ? "block" : "hidden"}
                                            id="link3"
                                        >
                                            <PartnerWithUs />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dailog Box */}
        </>
    );
};

export default Sponsor;
