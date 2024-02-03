import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDescriptionPoint, updateDescriptionPoint } from '../../redux/action/description/description';
import Sidebar from '../../sidebar/sidebar';
import Navbar from '../navbar';

const Contact = () => {

    const dispatch = useDispatch()
    const [openTab, setOpenTab] = useState(3);
    const navigate = useNavigate()
    const [section, setsection] = useState("contact");
    const [subsection, setsubsection] = useState("contact");

    const [Description1, setDescription1] = useState(false);
    const [Description2, setDescription2] = useState(false);
    const [Description3, setDescription3] = useState(false);
    const [Description4, setDescription4] = useState(false);
    const [Description5, setDescription5] = useState(false);


    const { loading, description, message, error } = useSelector((state) => state.description)
    const { isAuthenticated } = useSelector((state) => state.auth)


    const [desc, setDescription] = useState({
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
    })
    const { description1, description2, description3, description4, description5 } = desc;

    const descriptionDataChange = (e) => {

        setDescription({ ...desc, [e.target.name]: e.target.value });

    };

    const submitDescription = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description1', description1);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        setDescription1(false)

    };
    const submitDescription2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description2', description2);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));
        setDescription2(false)


    };
    const submitDescription3 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description3', description3);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        setDescription3(false)

    };
    const submitDescription4 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description4', description4);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        setDescription4(false)

    };
    const submitDescription5 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description5', description5);

        await dispatch(updateDescriptionPoint(myForm, section, subsection));

        setDescription5(false)

    };
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

        if (!isAuthenticated) {
            navigate('/login')
        }





        dispatch(getDescriptionPoint(section, subsection))
    }, [dispatch, error, message, isAuthenticated,]);



    return (
        <><Sidebar>
            <Navbar title="Contact Page" />
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
                                                    Heading
                                                </label>
                                                {Description4 ? (
                                                    <form onSubmit={submitDescription4} className="contents">
                                                        <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                            <textarea
                                                                rows="2"
                                                                name="description4"
                                                                value={description4}
                                                                onChange={descriptionDataChange}
                                                                id="message"
                                                                placeholder="Type contact Heading..."
                                                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                            ></textarea>
                                                            <div className="flex flex-col gap-2 mx-3 my-2">
                                                                <button
                                                                    type="button"
                                                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                    onClick={() => setDescription4(false)}
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
                                                            {description?.description4}
                                                        </p>
                                                        <button
                                                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                            onClick={() => {
                                                                setDescription({
                                                                    description4: description?.description4
                                                                })
                                                                setDescription4(!Description4)
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
                                                    Description
                                                </label>
                                                {Description5 ? (
                                                    <form onSubmit={submitDescription5} className="contents">
                                                        <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                            <textarea
                                                                rows="2"
                                                                name="description5"
                                                                value={description5}
                                                                onChange={descriptionDataChange}
                                                                id="message"
                                                                placeholder="Type Contact description..."
                                                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                            ></textarea>
                                                            <div className="flex flex-col gap-2 mx-3 my-2">
                                                                <button
                                                                    type="button"
                                                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                    onClick={() => setDescription5(false)}
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
                                                            {description?.description5}
                                                        </p>
                                                        <button
                                                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                            onClick={() => {
                                                                setDescription({
                                                                    description5: description?.description5
                                                                })
                                                                setDescription5(!Description5)
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
                                                {Description1 ? (
                                                    <form onSubmit={submitDescription} className="contents">
                                                        <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                            <textarea
                                                                rows="2"
                                                                name="description1"
                                                                value={description1}
                                                                onChange={descriptionDataChange}
                                                                id="message"
                                                                // placeholder="Type Footer description..."
                                                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                            ></textarea>
                                                            <div className="flex flex-col gap-2 mx-3 my-2">
                                                                <button
                                                                    type="button"
                                                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                    onClick={() => setDescription1(false)}
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
                                                            {description?.description1}
                                                        </p>
                                                        <button
                                                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                            onClick={() => {
                                                                setDescription({
                                                                    description1: description?.description1
                                                                })
                                                                setDescription1(!Description1)
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
                                                {Description2 ? (
                                                    <form onSubmit={submitDescription2} className="contents">
                                                        <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                            <textarea
                                                                rows="2"
                                                                name="description2"
                                                                value={description2}
                                                                onChange={descriptionDataChange}
                                                                id="message"
                                                                // placeholder="Type Footer description..."
                                                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                            ></textarea>
                                                            <div className="flex flex-col gap-2 mx-3 my-2">
                                                                <button
                                                                    type="button"
                                                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                    onClick={() => setDescription2(false)}
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
                                                            {description?.description2}
                                                        </p>
                                                        <button
                                                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                            onClick={() => {
                                                                setDescription({
                                                                    description2: description?.description2
                                                                })
                                                                setDescription2(!Description2)
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
                                                    Paragraph 3
                                                </label>
                                                {Description3 ? (
                                                    <form onSubmit={submitDescription3} className="contents">
                                                        <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                                            <textarea
                                                                rows="2"
                                                                name="description3"
                                                                value={description3}
                                                                onChange={descriptionDataChange}
                                                                id="message"
                                                                // placeholder="Type Footer description..."
                                                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                            ></textarea>
                                                            <div className="flex flex-col gap-2 mx-3 my-2">
                                                                <button
                                                                    type="button"
                                                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                                                    onClick={() => setDescription3(false)}
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
                                                            {description?.description3}
                                                        </p>
                                                        <button
                                                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                                            onClick={() => {
                                                                setDescription({
                                                                    description3: description?.description3
                                                                })
                                                                setDescription3(!Description3)
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
        </Sidebar></>
    )
}

export default Contact