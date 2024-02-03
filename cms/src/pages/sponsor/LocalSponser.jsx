import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MdDeleteOutline } from "react-icons/md";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getDescriptionPoint, updateDescriptionPoint } from '../../redux/action/description/description'
import { getTitleInfo, updateTitleInfo } from '../../redux/action/others/others'
import { createLocalSponserPoint, deleteLocalSponserPoint, getLocalSponserPoint, updateLocalSponserPoint } from '../../redux/action/sponsers/sponser'
import Sidebar from '../../sidebar/sidebar'
import Navbar from '../navbar'

const LocalSponser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [stitle1, settitle1] = useState(false);
    const [heading, setHeading] = useState(false);
    const [heading1, setHeading1] = useState(false);
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)

    const [section, setsection] = useState("sponser");
    const [subsection, setsubsection] = useState("local");
    const [Topic, setTopic] = useState(false);

    const [openTab, setOpenTab] = useState(4);

    const { isAuthenticated } = useSelector((state) => state.auth)
    const { loading: load, description, error, message } = useSelector((state) => state.description)
    const { loading: loadTitle, title, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
    const { loading: loadSponser, localsponser, SequenceSponser, error: errSponser, message: msgSponser } = useSelector((state) => state.sponser)
    const [Title, setTitle] = useState({
        title4: "",
    })
    const { title4, } = Title;
    const handleClickToOpen = () => {
        setOpen(!open);
    };

    const handleToClose = () => {
        setOpen(!open);
    };
    const TitleChange = (e) => {

        setTitle({ ...Title, [e.target.name]: e.target.value });

    };


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };

    const handleUpdateSequence = async (e, id) => {
        e.preventDefault()
        // setValue(e.target.value)
        const myForm = new FormData();
        myForm.append('point', e.target.value);
        await dispatch(updateLocalSponserPoint(myForm, id))
    }

    const submitTitle = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('title4', title4);
        // console.log(section)
        await dispatch(updateTitleInfo(myForm, section));
        setTopic(false)
        await dispatch(getTitleInfo(section))

    };
    const activeSubmit = async (e) => {
        e.preventDefault()

        // console.log(value)
        const myForm = new FormData();
        let value = await title?.is_active4
        myForm.append('is_active4', !value);
        // console.log(section)
        await dispatch(updateTitleInfo(myForm, section));
        // setTopic(false)
        await dispatch(getTitleInfo(section))


    }

    const [point, setPoint] = useState({
        point1: "",
        point2: "",
        url: "",
    })
    const { point1, point2, url } = point;

    const DataChange = (e) => {

        setPoint({ ...point, [e.target.name]: e.target.value });

    };

    const submitLocalSponser = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        // console.log(point1, point2)

        myForm.append('description1', point1);
        myForm.append('description2', point2);
        myForm.append('url', url);
        myForm.append('image', image);

        await dispatch(createLocalSponserPoint(myForm));
        // setOpen(false)

    };

    const [desc, setDescription] = useState({
        description1: "",
        description2: "",
        description4: "",
    })
    const { description1, description2, description4 } = desc;

    const descriptionDataChange = (e) => {

        setDescription({ ...desc, [e.target.name]: e.target.value });

    };

    const submitDescription = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description1', description1);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));
        setHeading(false)

    };
    const submitDescription1 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description2', description2);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        setHeading1(false)

    };
    const submitDescription4 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description4', description4);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        settitle1(false)

    };
    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deleteLocalSponserPoint(id))
        dispatch(getLocalSponserPoint())
    }
    const cancelDetail = async (e, id) => {
        e.preventDefault()
        console.log(id)
        if (id === 1) {
            setDescription({
                description1: ""
            })
            setHeading(false)
        }
        if (id === 2) {
            setDescription({
                description2: ""
            })
            setHeading1(false)
        }
        if (id === 3) {
            setDescription({
                description4: ""
            })
            settitle1(false)
        }


    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            dispatch(getDescriptionPoint(section, subsection))

        }
        if (errSponser) {
            toast.error(errSponser);
            dispatch({ type: 'clearError' });
        }

        if (msgSponser) {
            toast.success(msgSponser);
            dispatch({ type: 'clearMessage' });
            setPoint({
                point1: "",
                point2: ""
            })
            setImage()
            setOpen(false)
            dispatch(getLocalSponserPoint())

        }


        if (errTitle) {
            toast.error(errTitle);
            dispatch({ type: 'clearError' });
        }
        if (!isAuthenticated) {
            navigate('/login')
        }

        if (msgTitle) {
            toast.success(msgTitle);
            dispatch({ type: 'clearMessage' });

            dispatch(getTitleInfo(section));
        }
        dispatch(getLocalSponserPoint())
        dispatch(getTitleInfo(section));
        dispatch(getDescriptionPoint(section, subsection))
    }, [dispatch, error, message, errTitle, msgTitle, errSponser, msgSponser, isAuthenticated]);



    return (
        <>
            <Sidebar>
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
                                            <Link to='/sponsor'>
                                                <p>Overview</p>
                                            </Link>

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
                                            <Link to='/sponsor/global'>
                                                <p>Global Sponsor</p>
                                            </Link>
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
                                            <Link to='/sponsor/Partnerwithus'>
                                                <p>Partner With Us</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                            <Link to='/sponsor/localsponser'>
                                                <p>Local Sponsor</p>
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                                    <div className="px-4 flex-auto">
                                        <div className="tab-content tab-space">

                                            <div class="flex p-2">
                                                <div class="w-full my-5">
                                                    <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                                                        <input type="checkbox" name='active' value={title?.is_active4 ? title.is_active4 : true} class="sr-only peer" onClick={activeSubmit} />
                                                        <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active4 && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active4 && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!title && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>
                                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                                                    </label>
                                                    <div class="mb-5 flex flex-col sm:flex-row">
                                                        <label
                                                            for="name"
                                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                        >
                                                            Set Title
                                                        </label>
                                                        {Topic ? (
                                                            <form onSubmit={submitTitle} className="contents">
                                                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                    <textarea
                                                                        rows="2"
                                                                        name="title4"
                                                                        value={title4}
                                                                        onChange={TitleChange}
                                                                        id="message"
                                                                        placeholder="Type Your Page Title..."
                                                                        class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                    ></textarea>
                                                                    <div className="flex flex-col gap-2 mx-3 my-2">
                                                                        <button
                                                                            type="button"
                                                                            // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                            onClick={() => setTopic(false)}
                                                                            class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            disabled={loadTitle}
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
                                                                    {title?.title4}
                                                                </p>
                                                                <button
                                                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                                    onClick={() => {
                                                                        // setVisionDes(!visionDes),
                                                                        setTitle({
                                                                            title4: title?.title4
                                                                        })
                                                                        setTopic(!Topic)
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

                                                    <div class="mb-5 flex flex-col sm:flex-row">
                                                        <label
                                                            for="name"
                                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                        >
                                                            Paragraph 1
                                                        </label>
                                                        {heading ? (
                                                            <form onSubmit={submitDescription} className='contents'>
                                                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                    <textarea
                                                                        rows="2"
                                                                        name="description1"
                                                                        value={description1}
                                                                        onChange={descriptionDataChange}
                                                                        id="message"
                                                                        placeholder="Type your message"
                                                                        class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                    ></textarea>
                                                                    <div className="flex flex-col gap-2 mx-3 my-2">
                                                                        <button
                                                                            type="button"

                                                                            onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                            class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            disabled={load}
                                                                            onClick={() => setHeading(heading)}
                                                                            class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Update
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        ) : (
                                                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                                <p className={` w-full p-4 text-base`}>
                                                                    {description?.description1}
                                                                </p>
                                                                <button
                                                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                                                    // onClick={() => setHeading(!heading)}
                                                                    onClick={() => {
                                                                        setDescription({
                                                                            description1: description?.description1
                                                                        })
                                                                        setHeading(!heading)
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
                                                    <div class="mb-5 flex flex-col sm:flex-row">
                                                        <label
                                                            for="name"
                                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                        >
                                                            Paragraph 2
                                                        </label>
                                                        {heading1 ? (
                                                            <form onSubmit={submitDescription1} className='contents'>
                                                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                    <textarea
                                                                        rows="2"
                                                                        name="description2"
                                                                        value={description2}
                                                                        onChange={descriptionDataChange}
                                                                        id="message"
                                                                        placeholder="Type your message"
                                                                        class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                    ></textarea>
                                                                    <div className="flex flex-col gap-2 mx-3 my-2">
                                                                        <button
                                                                            type="button"

                                                                            onClick={(e, id) => cancelDetail(e, id = 2)}
                                                                            class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            disabled={load}
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
                                                                <p className={` w-full p-4 text-base`}>
                                                                    {description?.description2}
                                                                </p>
                                                                <button
                                                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                                                    // onClick={() => setHeading(!heading)}
                                                                    onClick={() => {
                                                                        setDescription({
                                                                            description2: description?.description2
                                                                        })
                                                                        setHeading1(!heading1)
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

                                                    {/* <h2 className="text-3xl font-roboto font-bold my-4">Opportunity</h2> */}
                                                    <div class="mb-5 w-full flex flex-col sm:flex-row">
                                                        <label
                                                            for="name"
                                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                        >
                                                            {/* Heading */}
                                                        </label>
                                                        {stitle1 ? (
                                                            <form onSubmit={submitDescription4} className='contents'>
                                                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                    <textarea
                                                                        rows="2"
                                                                        name="description4"
                                                                        value={description4}
                                                                        onChange={descriptionDataChange}
                                                                        id="message"
                                                                        placeholder="Type your message"
                                                                        class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                    ></textarea>
                                                                    <div className="flex flex-col gap-2 mx-3 my-2">
                                                                        <button
                                                                            type="button"
                                                                            onClick={(e, id) => cancelDetail(e, id = 3)}
                                                                            // onClick={() => settitle1(false)}
                                                                            class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            disabled={load}
                                                                            // onClick={() => setHeading(heading)}
                                                                            class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                        >
                                                                            Update
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        ) : (
                                                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                                {/* <p className={` p-4 w-full text-base`}>
                              {description?.description4:}
                            </p> */}
                                                                <h2 className={`w-full p-4 text-base`}>
                                                                    {description?.description4 ? description.description4 : 'We would like to take this opportunity to recognize our local sponsors and express our appreciation for their support:'}
                                                                </h2>
                                                                <button
                                                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                                                    // onClick={() => setHeading(!heading)}
                                                                    onClick={() => {
                                                                        setDescription({
                                                                            description4: description?.description4
                                                                        })
                                                                        settitle1(!stitle1)
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
                                                </div></div></div></div>
                                    <div className="tab-content tab-space">
                                        <div className="flex justify-end items-center my-4  mx-16  ">
                                            <button
                                                className="hover:shadow-form rounded-md bg-[#2a2938] py-3 px-8 text-base font-semibold text-white outline-none"
                                                onClick={handleClickToOpen}
                                            >
                                                Add Sponser
                                            </button>
                                        </div>
                                        <div class="flex p-2">
                                            <div class="w-full">
                                                <form>
                                                    <div className="flex flex-col mx-8 my-1">
                                                        <div className="">
                                                            <div className="p-1.5 w-full mx-auto inline-block align-middle">
                                                                <div className="overflow-auto border rounded-lg">
                                                                    {/* <div className="w-4/5 border rounded-lg"> */}
                                                                    <table class="min-w-full">
                                                                        {/* <table class="w-3/5"> */}
                                                                        <thead class="border-b">
                                                                            <tr className="bg-slate-400">

                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Image
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Description
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Website Link
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Sequence
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Action
                                                                                </th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {localsponser && localsponser.map((data) => (
                                                                                <tr key={data.id} className="border-b text-center hover:bg-blue-100">

                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4  border-2 border-violet-900/40">
                                                                                        <img
                                                                                            // src={walpaper}
                                                                                            src={`${process.env.REACT_APP_SERVER}/${data.image}`}
                                                                                            alt=""
                                                                                            className="w-56 h-24 object-fill mx-auto"
                                                                                        />{" "}
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 overflow-auto font-roboto font-medium px-6 py-4  border-2 border-violet-900/40">
                                                                                        <p className="w-72 mx-auto">
                                                                                            {data.description1} {data.description2}
                                                                                        </p>
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4  border-2 border-violet-900/40">
                                                                                        {data.url}
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                                                                        <select className="w-32 mx-auto"
                                                                                            name="value"
                                                                                            onChange={(e) => handleUpdateSequence(e, data.id)}>
                                                                                            <option hidden='true' value={data.sequence} > {data.sequence}</option>
                                                                                            {SequenceSponser && SequenceSponser.map((datas) => (
                                                                                                <option name="value"
                                                                                                    onChange={(e) => handleUpdateSequence(e, data.id)}
                                                                                                    value={datas}>{datas}</option>
                                                                                            ))}

                                                                                        </select>
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4  border-2 border-violet-900/40">
                                                                                        <div className="flex justify-center items-center">
                                                                                            <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, data.id)} />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div></div></div>

                        </div></div>
                </div>
            </Sidebar >

            {/* Dailog Box */}
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>
                    {<p className="text-xl font-bold">Add New Sponser</p>}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="flex p-2">
                            <div class="w-full">
                                <form onSubmit={submitLocalSponser}>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="point1"
                                            value={point1}
                                            onChange={DataChange}
                                            id="email"
                                            placeholder="write your Name here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            rows='2'
                                            name="point2"
                                            value={point2}
                                            onChange={DataChange}
                                            id="email"
                                            placeholder="write Description here..."
                                            class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Url
                                        </label>
                                        <input
                                            type="text"
                                            name="url"
                                            value={url}
                                            onChange={DataChange}
                                            id="email"
                                            placeholder="write your url here..."
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
                                            disabled={loadSponser}
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
                        onClick={handleToClose}
                        color="primary"
                        className="font-bold text-3xl"
                    // autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default LocalSponser