import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import user from "../assets/user.webp";
import { Link, useNavigate } from "react-router-dom";

import AboutLionsClub from "./home-page-info/aboutlionsclub";
import WhatWeDoHome from "./home-page-info/whatwedohome";
import GlobalCauseHome from "./home-page-info/globalcausehome";
import PartnerHome from "./home-page-info/partnerhome";
import UpcomingHome from "./home-page-info/upcominghome";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Navbar from "./navbar";
import Sidebar from "../sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getHomeExtraInfo, registerHomeExtraInfo } from "../redux/action/home/home";
import { toast } from "react-hot-toast";

const HomePageInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [profile, profileOpen] = useState(false);
    const [openTab, setOpenTab] = useState(1);
    const [image, setImage] = useState()
    const [updateOpen, setUpdateOpen] = useState(false);

    const handleUpdateToClose = () => {
        setUpdateOpen(!updateOpen);
    };

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };


    const { loading, extra, error, message } = useSelector((state) => state.home)
    const { isAuthenticated, loading: loads } = useSelector((state) => state.auth)
    const [extraBody, setExtraBody] = useState({

        heading: "",
        description2: "",
        description3: "",
    });

    const { heading, description2, description3 } =
        extraBody;

    const registerDataChange = (e) => {
        setExtraBody({ ...extraBody, [e.target.name]: e.target.value });

    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('heading', heading);
        myForm.append('description2', description2);
        myForm.append('description3', description3);
        myForm.append('image', image);

        await dispatch(registerHomeExtraInfo(myForm));

    };
    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setImage()
            setExtraBody({
                heading: "",
                description2: "",
                description3: ""
            })
            setUpdateOpen(false)
            dispatch(getHomeExtraInfo())
        }


        if (!isAuthenticated) {
            // navigate('/login')
            console.log("banner logout")
            navigate('/')
        }
        dispatch(getHomeExtraInfo())
    }, [dispatch, error, message, isAuthenticated]);


    return (
        <>

            <Sidebar>
                <Navbar title="Home Page" />
                <div className="flex h-full scroll-smooth">
                    <div className="w-full h-full my-4">


                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex justify-center items-center sm:flex-wrap mx-6 mb-0 list-none flex-wrap  pb-4 sm:mx-12 flex-row px-4 "
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
                                            <Link to='/home-page-info/about'>

                                                <p className="px-5 py-3">About</p>
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
                                            <Link to='/home-page-info/whatwedo'>

                                                <p className="px-5 py-3 whitespace-nowrap">What We Do</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
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
                                            <Link to='/home-page-info/global-cause'>

                                                <p className="px-5 py-3 whitespace-nowrap">Global Cause</p>
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
                                            <Link to='/home-page-info/partner'>

                                                <p className="px-5 py-3 whitespace-nowrap">Partner</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                (openTab === 5
                                                    ? "text-white bg-blue-800"
                                                    : "text-black bg-white")
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(5);
                                            }}
                                            data-toggle="tab"
                                            href="#link5"
                                            role="tablist"
                                        >
                                            <Link to='/home-page-info/events'>

                                                <p className="px-5 py-3 whitespace-nowrap">Events</p>
                                            </Link>
                                        </a>
                                    </li>
                                    {extra && extra.map((data) => (
                                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                            <a
                                                className={
                                                    "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                                                    (openTab === `5 + ${data.id}`
                                                        ? "text-white bg-blue-800"
                                                        : "text-black bg-white")
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenTab(`5 + ${data.id}`);
                                                }}
                                                data-toggle="tab"
                                                href={`#link${5}+${data.id}`}
                                                role="tablist"
                                            >
                                                <Link to={`/home-page-info/others/${data.id}`}>

                                                    <p className="px-5 py-3">{data.heading}</p>
                                                </Link>
                                            </a>
                                        </li>
                                    ))}
                                    {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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

                                                <p className="px-5 py-3">Footer</p>
                                            </Link>
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                                    <div className="px-4 flex-auto">
                                        <div className="flex justify-end items-center my-4">
                                            <button
                                                className="hover:shadow-form rounded-md bg-[#2a2938] py-3 px-8 text-base font-semibold text-white outline-none"
                                                onClick={handleUpdateToClose}
                                            >
                                                Add New Section
                                            </button>
                                        </div>
                                        <div className="tab-content tab-space">
                                            <div
                                                className={openTab === 1 ? "block" : "hidden"}
                                                id="link1"
                                            >
                                                <AboutLionsClub sub={"aboutlions"} />
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
            <Dialog open={updateOpen} onClose={handleUpdateToClose}>
                <DialogTitle>
                    {<p className="text-xl font-bold">Add New Section</p>}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="flex p-2">
                            <div class="w-full">
                                <form onSubmit={submitHandler}>
                                    {/* <form > */}

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Heading
                                        </label>
                                        <input
                                            type="text"
                                            name="heading"
                                            value={heading}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner heading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Paragraph 1
                                        </label>
                                        <input
                                            type="text"
                                            name="description2"
                                            value={description2}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Paragraph 2
                                        </label>
                                        <input
                                            type="text"
                                            name="description3"
                                            value={description3}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Image
                                        </label>
                                        <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                                            {image ? (
                                                <div className="w-full">
                                                    <img
                                                        accept="image/*"
                                                        src={URL.createObjectURL(image)}
                                                        alt=""
                                                        className="object-fill z-40"
                                                    />
                                                    <button
                                                        className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                        onClick={removeSelectedImage}
                                                    >
                                                        remove image
                                                    </button>{" "}
                                                </div>
                                            ) : (
                                                <div>
                                                    <input
                                                        accept="image/*"
                                                        type="file"
                                                        name=""
                                                        id=""
                                                        value={image}
                                                        onChange={imageChange}
                                                        className="text-base z-0 ml-auto"
                                                    />
                                                    <p className="text-sm text-red-600">Image width 600 x 500 px is preferable</p> </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center my-7">
                                        <button
                                            disabled={loading}
                                            type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>{" "}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleUpdateToClose}
                        color="primary"
                        className="font-bold text-3xl"
                    // autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default HomePageInfo;
