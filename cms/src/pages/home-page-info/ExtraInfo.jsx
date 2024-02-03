import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { deleteHomeExtraInfo, getHomeExtraInfo, getHomeOthersInfo, registerHomeExtraInfo, updateHomeExtraInfo } from '../../redux/action/home/home';
import Sidebar from '../../sidebar/sidebar';
import Loader from '../Loader/Loader';
import Navbar from '../navbar';
import { MdDeleteOutline } from 'react-icons/md';

const ExtraInfo = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    // console.log(id)
    const [updateOpen, setUpdateOpen] = useState(false);
    const handleUpdateToClose = () => {
        setUpdateOpen(!updateOpen);
    };
    const [openTab, setOpenTab] = useState(5 + id);
    const [heading1, setHeading1] = useState(false);
    const [heading2, setHeading2] = useState(false);
    const [heading3, setHeading3] = useState(false);
    const [image, setImage] = useState();

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };

    const { loading, extra, error, message } = useSelector((state) => state.home)
    const [section, setSection] = useState('home');
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.auth)

    const data = extra?.find(o => o.id.toString() === id);

    // console.log(data, id)

    const [desc, setDescription] = useState({
        description2: "",
        description3: "",
        heading: ""
    })
    const { description3, description2, heading } = desc;

    const descriptionDataChange = (e) => {

        setDescription({ ...desc, [e.target.name]: e.target.value });

    };

    const submitDescription = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description2', description2);

        await dispatch(updateHomeExtraInfo(myForm, id));
        setHeading1(false)

    };

    const submitDescription2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description3', description3);

        await dispatch(updateHomeExtraInfo(myForm, id));

        setHeading2(false)

    };

    const submitHeading = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('heading', heading);

        await dispatch(updateHomeExtraInfo(myForm, id));

        setHeading3(false)

    };
    const submitDescription3 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('image', image);

        await dispatch(updateHomeExtraInfo(myForm, id));

        // setImage()


    };
    const activeSubmit = async (e) => {
        e.preventDefault()

        // console.log(value)
        const myForm = new FormData();
        myForm.append('is_active', !data?.is_active);
        // console.log(section)
        await dispatch(updateHomeExtraInfo(myForm, id));
        // setTopic(false)
        await dispatch(getHomeExtraInfo())


    }

    const [extraBody, setExtraBody] = useState({

        headings: "",
        descriptions: "",
        description4: "",
    });

    const { headings, descriptions, description4 } =
        extraBody;

    const registerDataChange = (e) => {
        setExtraBody({ ...extraBody, [e.target.name]: e.target.value });

    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('heading', headings);
        myForm.append('description2', descriptions);
        myForm.append('description3', description4);
        myForm.append('image', image);

        await dispatch(registerHomeExtraInfo(myForm));

    };


    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deleteHomeExtraInfo(id))
        navigate('/home-page-info/about')

    }


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
                description4: ""
            })
            setUpdateOpen(false)
            // dispatch(getHomeExtraInfo());
            dispatch(getHomeOthersInfo())
            setHeading1(false)
            dispatch(getHomeExtraInfo());
        }

        if (!isAuthenticated) {
            navigate('/login')
        }

        dispatch(getHomeExtraInfo());
    }, [dispatch, error, message, isAuthenticated, id]);
    return (
        <>
            {id || extra ?
                <>
                    <Sidebar>
                        <Navbar title="Home Page" />
                        <div className="flex h-full scroll-smooth">
                            <div className="w-full h-full">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <ul
                                            className="flex justify-center items-center sm:flex-nowrap mx-6 mb-0 list-none flex-wrap pt-3 pb-4 sm:mx-12 flex-row px-4 "
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

                                                        <p className="px-5 py-3">What We Do</p>
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

                                                        <p className="px-5 py-3">Global Cause</p>
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

                                                        <p className="px-5 py-3">Partner</p>
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

                                                        <p className="px-5 py-3">Events</p>
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
                                                <div className="flex justify-end items-center mt-4">
                                                    <button
                                                        className="hover:shadow-form rounded-md bg-[#2a2938] mx-2 py-3 px-8 text-base font-semibold text-white outline-none"
                                                        onClick={handleUpdateToClose}
                                                    >
                                                        Add New Section
                                                    </button>
                                                    <button
                                                        className="hover:shadow-form rounded-md bg-[#2a2938] py-3 px-8 text-base font-semibold text-white outline-none"
                                                        onClick={(e) => handleDelete(e, data?.id)}
                                                    >
                                                        Delete  Section
                                                    </button>
                                                    {/* <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer flex justify-end" onClick={(e) => handleDelete(e, data?.id)} /> */}

                                                </div>
                                                <div className="tab-content tab-space"></div>
                                                <div class="flex p-2">
                                                    <div class="w-full ">
                                                        <label class="relative inline-flex items-center cursor-pointer mt-8  scale-125 visibility">
                                                            <input type="checkbox" name='active' class="sr-only peer" onClick={activeSubmit} />
                                                            <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!data?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${data?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!data && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>
                                                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                                                        </label>

                                                        <div class="mb-5 flex flex-col sm:flex-row">
                                                            <label
                                                                for="name"
                                                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                            >
                                                                Heading
                                                            </label>
                                                            {heading3 ? (
                                                                <form onSubmit={submitHeading} className="contents">
                                                                    <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                        <textarea
                                                                            rows="2"
                                                                            name="heading"
                                                                            value={heading}
                                                                            onChange={descriptionDataChange}
                                                                            id="message"
                                                                            placeholder="Type Your Page Title..."
                                                                            class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                        ></textarea>
                                                                        <div className="flex flex-col gap-2 mx-3 my-2">
                                                                            <button
                                                                                type="button"
                                                                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                                onClick={() => setHeading3(false)}
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
                                                                <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                                    <p className={` p-4 text-base w-full`}>
                                                                        {/* {extra && extra[id - 1]?.heading} */}
                                                                        {data?.heading}
                                                                    </p>
                                                                    <button
                                                                        class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                                        onClick={() => {
                                                                            // setVisionDes(!visionDes),
                                                                            setDescription({
                                                                                heading: data?.heading
                                                                            })
                                                                            setHeading3(!heading3)
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
                                                            {heading1 ? (
                                                                <form onSubmit={submitDescription} className="contents">
                                                                    <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
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
                                                                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                                onClick={() => setHeading1(false)}
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
                                                                <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                                    <p className={` p-4 text-base w-full`}>
                                                                        {/* {extra && extra[id - 1]?.description2} */}
                                                                        {data?.description2}
                                                                    </p>
                                                                    <button
                                                                        class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                                                        // onClick={() => setHeading1(!heading1)}
                                                                        onClick={() => {
                                                                            // setVisionDes(!visionDes),
                                                                            setDescription({
                                                                                description2: data?.description2
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


                                                        <div class="mb-5 flex flex-col sm:flex-row">
                                                            <label
                                                                for="name"
                                                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                                            >
                                                                Paragraph 2
                                                            </label>
                                                            {heading2 ? (
                                                                <form onSubmit={submitDescription2} className="contents">
                                                                    <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                                        <textarea
                                                                            rows="2"
                                                                            name="description3"
                                                                            value={description3}
                                                                            onChange={descriptionDataChange}
                                                                            id="message"
                                                                            placeholder="Type your message"
                                                                            class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                                        ></textarea>
                                                                        <div className="flex flex-col gap-2 mx-3 my-2">
                                                                            <button
                                                                                type="button"
                                                                                // onClick={(e, id) => cancelDetail(e, id = 2)}
                                                                                onClick={() => setHeading2(false)}
                                                                                class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                            >
                                                                                Cancel
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                disabled={loading}
                                                                                onClick={() => setHeading2(heading2)}
                                                                                class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                                            >
                                                                                Update
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            ) : (
                                                                <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                                                    <p className={` p-4 text-base w-full`}>
                                                                        {data?.description3}
                                                                    </p>
                                                                    <button
                                                                        class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                                                        // onClick={() => setHeading2(!heading2)}
                                                                        onClick={() => {
                                                                            // setVisionDes(!visionDes),
                                                                            setDescription({
                                                                                description3: data?.description3
                                                                            })
                                                                            setHeading2(!heading2)
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
                                                                for="email"
                                                                class="mx-2 my-auto block text-base font-medium text-[#07074D] w-32 "
                                                            >
                                                                Image
                                                            </label>
                                                            <div className="w-60  min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center  border-2 border-black/50 rounded-lg">
                                                                {image ? (
                                                                    <form onSubmit={submitDescription3}>
                                                                        <div className="w-full">
                                                                            <img
                                                                                accept="image/*"
                                                                                src={URL.createObjectURL(image)}
                                                                                // src={clubLogo}
                                                                                alt=""
                                                                                name="image"
                                                                                value={image}
                                                                                onChange={(e) => setImage(e.target.files[0])}
                                                                                className="object-fill z-40 w-60 h-60"
                                                                            />
                                                                            <button
                                                                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                                                onClick={removeSelectedImage}
                                                                            >
                                                                                Remove image
                                                                            </button>{" "}
                                                                            <button
                                                                                type="submit"
                                                                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                                            // onClick={removeSelectedImage}
                                                                            >
                                                                                Submit
                                                                            </button>{" "}
                                                                        </div>
                                                                    </form>
                                                                ) : (
                                                                    (data?.image ? (<><img src={`${process.env.REACT_APP_SERVER}/${data?.image}`} /> <input
                                                                        type="file"
                                                                        style={{
                                                                            color: "transparent"
                                                                        }}
                                                                        name="image"
                                                                        accept="image/*"
                                                                        id=""
                                                                        onChange={imageChange}
                                                                        className="text-base z-0 mx-auto ml-11 mt-3"
                                                                    /></>) : (<input
                                                                        type="file"

                                                                        title=" "
                                                                        name=""
                                                                        accept="image/*"
                                                                        id=""
                                                                        onChange={imageChange}
                                                                        className="text-base z-0 mx-auto"
                                                                    />))
                                                                )}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div></div>
                                    </div></div>
                            </div></div>
                    </Sidebar >
                    <Dialog open={updateOpen} onClose={handleUpdateToClose} maxWidth="lg">
                        <DialogTitle >
                            {<p className="text-xl font-bold">Add New Section</p>}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <div class="flex p-2">
                                    <div class="w-full">
                                        <form onSubmit={submitHandler} >
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
                                                    name="headings"
                                                    value={headings}
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
                                                    name="descriptions"
                                                    value={descriptions}
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
                                                    name="description4"
                                                    value={description4}
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
                :
                <Loader />
            }
        </>
    )
}

export default ExtraInfo