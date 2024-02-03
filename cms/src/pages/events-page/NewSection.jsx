import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEventDescription } from "../../redux/action/Event/event";

const NewSection = ({ eventDescription, id }) => {
    const dispatch = useDispatch()
    const [Heading1, setHeading1] = useState(false);
    const [Heading2, setHeading2] = useState(false);
    const [Heading3, setHeading3] = useState(false);


    const [eventBody, setEventBody] = useState({
        description12: "",
        registrationLink: "",
        registrationButton: "",
    })

    const { description12, registrationButton, registrationLink } = eventBody;

    const eventDataChange = (e) => {

        setEventBody({ ...eventBody, [e.target.name]: e.target.value });

    };

    const submitHeading1 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('description12', description12);
        await dispatch(updateEventDescription(myForm, id));
        setHeading1(false)
    };

    const submitHeading2 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('registrationLink', registrationLink);
        await dispatch(updateEventDescription(myForm, id));
        setHeading2(false)
    };

    const submitHeading3 = async (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('registrationButton', registrationButton);
        await dispatch(updateEventDescription(myForm, id));
        setHeading3(false)
    };


    return (
        <div class="flex p-2">
            <div class="w-full my-5">
                <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                        Description
                    </label>
                    {Heading1 ? (
                        <form onSubmit={submitHeading1} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="description12"
                                    value={description12}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        // onClick={(e, id) => cancelDetail(e, (id = 1))}
                                        onClick={() => setHeading1(!Heading1)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        // disabled={loading}
                                        // onClick={() => setHeading1(Heading1)}
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
                                {eventDescription?.description12}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setHeading1(!Heading1)
                                    setEventBody({
                                        description12: eventDescription?.description12,
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
                        Link
                    </label>
                    {Heading2 ? (
                        <form onSubmit={submitHeading2} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="registrationLink"
                                    value={registrationLink}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        // onClick={(e, id) => cancelDetail(e, (id = 1))}
                                        onClick={() => setHeading2(!Heading2)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        // disabled={loading}
                                        // onClick={() => setHeading1(Heading1)}
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
                                {eventDescription?.registrationLink}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setHeading2(!Heading2)
                                    setEventBody({
                                        registrationLink: eventDescription?.registrationLink,
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
                        Button
                    </label>
                    {Heading3 ? (
                        <form onSubmit={submitHeading3} className="contents">
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                    rows="2"
                                    name="registrationButton"
                                    value={registrationButton}
                                    onChange={eventDataChange}
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                    <button
                                        type="button"
                                        // onClick={(e, id) => cancelDetail(e, (id = 1))}
                                        onClick={() => setHeading3(!Heading3)}
                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        // disabled={loading}
                                        // onClick={() => setHeading1(Heading1)}
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
                                {eventDescription?.registrationButton}
                            </p>
                            <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                    setHeading3(!Heading3)
                                    setEventBody({
                                        registrationButton: eventDescription?.registrationButton,
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
    );
};

export default NewSection;
