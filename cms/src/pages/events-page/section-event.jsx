import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateEventDescription } from '../../redux/action/Event/event';

const SectionEvent = ({ eventDescription, id }) => {
    const dispatch = useDispatch()
    const [Heading2, setHeading2] = useState(false);
    const [Heading3, setHeading3] = useState(false);
    const [Heading4, setHeading4] = useState(false);
    const [Description1, setDescription1] = useState(false);
    const [Description2, setDescription2] = useState(false);
    const [Description3, setDescription3] = useState(false);
    const [Description4, setDescription4] = useState(false);
    const [Description5, setDescription5] = useState(false);
    const [Description6, setDescription6] = useState(false);
    const [Description7, setDescription7] = useState(false);
    const [Description8, setDescription8] = useState(false);
    const [image2, setImage2] = useState();
    const [videos, setVideo] = useState(false);
    const [image4, setImage4] = useState();

    const imageChange2 = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage2(e.target.files[0]);
        }
    };

    const removeSelectedImage2 = () => {
        setImage2();
    };



    const imageChange4 = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage4(e.target.files[0]);
        }
    };

    const removeSelectedImage4 = () => {
        setImage4();
    };
    const [eventBody, setEventBody] = useState({
        heading2: "",
        heading3: "",
        heading4: "",
        link: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        description6: "",
        description7: "",
        description8: "",
    })
    const { heading2, heading3, heading4, description1, description2, description3, description4, description5, link, description6, description7, description8 } = eventBody;

    const eventDataChange = (e) => {

        setEventBody({ ...eventBody, [e.target.name]: e.target.value });

    };

    const submitHeading2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('heading2', heading2);
        await dispatch(updateEventDescription(myForm, id));
        setHeading2(false)
    };
    const submitHeading3 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('heading3', heading3);
        await dispatch(updateEventDescription(myForm, id));
        setHeading3(false)
    };
    const submitHeading4 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('heading4', heading4);
        await dispatch(updateEventDescription(myForm, id));
        setHeading4(false)
    };
    const submitDescription1 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description1', description1);
        await dispatch(updateEventDescription(myForm, id));
        setDescription1(false)
    };
    const submitDescription2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description2', description2);
        await dispatch(updateEventDescription(myForm, id));
        setDescription2(false)
    };
    const submitDescription3 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description3', description3);
        await dispatch(updateEventDescription(myForm, id));
        setDescription3(false)
    };
    const submitDescription4 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description4', description4);
        await dispatch(updateEventDescription(myForm, id));
        setDescription4(false)
    };
    const submitDescription5 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description5', description5);
        await dispatch(updateEventDescription(myForm, id));
        setDescription5(false)
    };
    const submitDescription6 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description6', description6);
        await dispatch(updateEventDescription(myForm, id));
        setDescription6(false)
    };
    const submitDescription7 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description7', description7);
        await dispatch(updateEventDescription(myForm, id));
        setDescription7(false)
    };
    const submitDescription8 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description8', description8);
        await dispatch(updateEventDescription(myForm, id));
        setDescription8(false)
    };

    const submitImage2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('image2', image2);
        await dispatch(updateEventDescription(myForm, id));
        setImage2()


    };
    const submitVideo = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('link', link);
        await dispatch(updateEventDescription(myForm, id));
        setVideo(false)


    };
    const submitImage4 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('image4', image4);
        await dispatch(updateEventDescription(myForm, id));
        setImage4()


    };


    return (
        <div class="flex p-2">
            <div class="w-full my-5">
                <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                        Heading
                    </label>
                    {Heading3 ? (
                        <form onSubmit={submitHeading3} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="heading3"
                                    value={heading3}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        onClick={() => setHeading3(!Heading3)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
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
                                {eventDescription?.heading3}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setHeading3(!Heading3)
                                    setEventBody({
                                        heading3: eventDescription?.heading3,
                                    });

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
                    {Description5 ? (
                        <form onSubmit={submitDescription5} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="description5"
                                    value={description5}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        onClick={() => setDescription5(!Description5)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        //
                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                            <p className={` p-4 text-base w-full`}>
                                {eventDescription?.description5}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setDescription5(!description5)
                                    setEventBody({
                                        description5: eventDescription?.description5,
                                    });

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
                    {Description6 ? (
                        <form onSubmit={submitDescription6} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="description6"
                                    value={description6}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        onClick={() => setDescription6(!Description6)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        //
                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                            <p className={` p-4 text-base w-full`}>
                                {eventDescription?.description6}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setDescription6(!description6)
                                    setEventBody({
                                        description6: eventDescription?.description6,
                                    });

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
                        Video Link
                    </label>
                    {videos ? (
                        <form onSubmit={submitVideo} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="link"
                                    value={link}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        onClick={() => setVideo(!videos)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        //
                        <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                            <p className={` p-4 text-base w-full`}>
                                {eventDescription?.video}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setVideo(!videos)
                                    setEventBody({
                                        link: eventDescription?.video,
                                    });

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
    )
}

export default SectionEvent