import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFooterInfo, getHomeExtraInfo, getHomeOthersInfo, registerHomeExtraInfo, updateFooter, updateHomeOthersInfo } from "../../redux/action/home/home";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";

const Footer = () => {
    const dispatch = useDispatch()
    const [openTab, setOpenTab] = useState(6);
    const [Description, setDescription] = useState(false);
    const [Copyright, setCopyright] = useState(false);
    const [bbuton, setButton] = useState(false);
    const navigate = useNavigate()
    const [updateOpen, setUpdateOpen] = useState(false);

    const handleUpdateToClose = () => {
        setUpdateOpen(!updateOpen);
    };

    const { loading, footer, error, extra, message } = useSelector((state) => state.home)
    const [section, setSection] = useState('home');
    const [topic, setTopic] = useState(false);
    const [image, setImage] = useState()
    const { isAuthenticated } = useSelector((state) => state.auth)



    const [description, setDesc] = useState("")
    const [button, setbutton] = useState("")
    const [copyright, setcopyright] = useState("")
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };
    const submitDescription = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        // console.log(description1)
        myForm.append('description', description);
        console.log(description)
        await dispatch(updateFooter(myForm));
        setDescription(false)
        dispatch(getFooterInfo())
    };
    const submitButton = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        // console.log(description1)
        myForm.append('button', button);

        await dispatch(updateFooter(myForm));
        setButton(false)
        dispatch(getFooterInfo())
    };
    const submitCopyright = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        // console.log(description1)
        myForm.append('copyright', copyright);

        await dispatch(updateFooter(myForm));
        setCopyright(false)
        dispatch(getFooterInfo())
    };

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
            dispatch(getHomeExtraInfo());
            dispatch(getFooterInfo())

        }
        if (!isAuthenticated) {
            navigate('/login')
        }
        dispatch(getHomeExtraInfo())
        dispatch(getFooterInfo());
    }, [dispatch, error, message, isAuthenticated]);

    return (
        // <>
        //   {loading ? (
        //     <Loader />
        //   ) : (
        <>
            <Sidebar>
                <Navbar title="Footer" />
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
                                        <div className="tab-content tab-space"></div>
                                        <div class="flex p-2">
                                            <div class="w-full my-5">
                                                <div class="mb-5 flex flex-col sm:flex-row">
                                                    <label
                                                        for="name"
                                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                    >
                                                        Description
                                                    </label>
                                                    {Description ? (
                                                        <form onSubmit={submitDescription} className="contents">
                                                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                <textarea
                                                                    rows="2"
                                                                    name="description"
                                                                    value={description}
                                                                    onChange={e => setDesc(e.target.value)}
                                                                    id="message"
                                                                    placeholder="Type Footer description..."
                                                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                ></textarea>
                                                                <div className="flex flex-col gap-2 mx-3 my-2">
                                                                    <button
                                                                        type="button"
                                                                        // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                        onClick={() => setDescription(false)}
                                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        disabled={loading}
                                                                        // onClick={() => setHeading1(heading1)}
                                                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    ) : (
                                                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                            <p className={` p-4 text-base w-full`}>
                                                                {footer?.description}
                                                            </p>
                                                            <button
                                                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                                onClick={() => {
                                                                    // setVisionDes(!visionDes),
                                                                    setDesc(footer?.description
                                                                    )
                                                                    setDescription(!Description)
                                                                }}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* <div class="mb-5 flex flex-col sm:flex-row">
                                                    <label
                                                        for="name"
                                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                    >
                                                        Copyright
                                                    </label>
                                                    {Copyright ? (
                                                        <form onSubmit={submitCopyright} className="contents">
                                                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                <textarea
                                                                    rows="2"
                                                                    name="copyright"
                                                                    value={copyright}
                                                                    onChange={e => setcopyright(e.target.value)}
                                                                    id="message"
                                                                    placeholder="Type Copyright detail here..."
                                                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                ></textarea>
                                                                <div className="flex flex-col gap-2 mx-3 my-2">
                                                                    <button
                                                                        type="button"
                                                                        // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                        onClick={() => setCopyright(false)}
                                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        disabled={loading}
                                                                        // onClick={() => setHeading1(heading1)}
                                                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    ) : (
                                                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                            <p className={` p-4 text-base w-full`}>
                                                                {footer?.copyright}
                                                            </p>
                                                            <button
                                                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                                onClick={() => {
                                                                    // setVisionDes(!visionDes),
                                                                    setcopyright(
                                                                        footer?.copyright
                                                                    )
                                                                    setCopyright(!Copyright)
                                                                }}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div> */}
                                                <div class="mb-5 flex flex-col sm:flex-row">
                                                    <label
                                                        for="name"
                                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                    >
                                                        Button
                                                    </label>
                                                    {bbuton ? (
                                                        <form onSubmit={submitButton} className="contents">
                                                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                <textarea
                                                                    rows="2"
                                                                    name="button"
                                                                    value={button}
                                                                    onChange={e => setbutton(e.target.value)}
                                                                    id="message"
                                                                    placeholder="Type Your button Title..."
                                                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                ></textarea>
                                                                <div className="flex flex-col gap-2 mx-3 my-2">
                                                                    <button
                                                                        type="button"
                                                                        // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                        onClick={() => setButton(false)}
                                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        type="submit"
                                                                        disabled={loading}
                                                                        // onClick={() => setHeading1(heading1)}
                                                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    ) : (
                                                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                            <p className={` p-4 text-base w-full`}>
                                                                {footer?.button}
                                                            </p>
                                                            <button
                                                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                                onClick={() => {
                                                                    // setVisionDes(!visionDes),
                                                                    setbutton(
                                                                        footer?.button
                                                                    )
                                                                    setButton(!bbuton)
                                                                }}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>


                                            </div>
                                        </div>
                                    </div></div></div>
                        </div></div></div>
            </Sidebar>
        </>
        //   )}

        // </>
    );
};

export default Footer;
