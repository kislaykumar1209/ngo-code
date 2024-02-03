import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOthersInfo, updateOthersInfo } from '../../redux/action/others/others';

const PartnerWithus = () => {
    const dispatch = useDispatch()
    const [openTab, setOpenTab] = useState(1);
    const navigate = useNavigate()

    const [heading1, setHeading1] = useState(false);
    const [heading2, setHeading2] = useState(false);


    const { loading, detail, error, message } = useSelector((state) => state.others)
    const { isAuthenticated } = useSelector((state) => state.auth)
    const [other, setOther] = useState('belion');

    const [description, setDescription] = useState({
        description1: "",
        button: "",
    })
    const { description1, button, } = description;

    const descriptionDataChange = (e) => {

        setDescription({ ...description, [e.target.name]: e.target.value });

    };
    // console.log(error)


    const submitDescription = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('description1', description1);

        await dispatch(updateOthersInfo(myForm, other));
        setHeading1(false)
        await dispatch(getOthersInfo(other))

    };
    const submitButton = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('button', button);

        await dispatch(updateOthersInfo(myForm, other));

        setHeading2(false)
        await dispatch(getOthersInfo(other))

    };

    const cancelDetail = async (e, id) => {
        e.preventDefault()
        console.log(id)
        if (id === 1) {
            setDescription({
                description1: ""
            })
            setHeading1(false)
        }
        if (id === 2) {
            setDescription({
                description2: ""
            })
            setHeading2(false)
        }



    }

    const activeSubmit = async (e) => {
        e.preventDefault()

        // console.log(value)
        const myForm = new FormData();
        let value = await detail?.is_active
        myForm.append('is_active', !value);
        // console.log(section)
        await dispatch(updateOthersInfo(myForm, other));
        // setTopic(false)
        await dispatch(getOthersInfo(other))


    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });

            dispatch(getOthersInfo());



        }
        if (!isAuthenticated) {
            navigate('/login')
        }


        dispatch(getOthersInfo(other));
    }, [dispatch, error, message, , isAuthenticated]);

    return (
        <>

            <div class="flex p-2">
                <div class="w-full my-5">
                    <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                        <input type="checkbox" name='active' value={detail?.is_active ? detail.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                        <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!detail?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${detail?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!detail && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
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
                        {heading1 ? (
                            <form onSubmit={submitDescription} className="contents">
                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                    <textarea
                                        rows="2"
                                        name="description1"
                                        value={description1}
                                        onChange={descriptionDataChange}
                                        id="message"
                                        placeholder="Type Your Page Title..."
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
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                <p className={` p-4 text-base w-full`}>
                                    {detail?.description1}
                                </p>
                                <button
                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                    onClick={() => {
                                        // setVisionDes(!visionDes),
                                        setDescription({
                                            description1: detail?.description1
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
                            Button
                        </label>
                        {heading2 ? (
                            <form onSubmit={submitButton} className="contents">
                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                    <textarea
                                        rows="2"
                                        name="button"
                                        value={button}
                                        onChange={descriptionDataChange}
                                        id="message"
                                        placeholder="Type Your Page Title..."
                                        class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    ></textarea>
                                    <div className="flex flex-col gap-2 mx-3 my-2">
                                        <button
                                            type="button"
                                            // onClick={(e, id) => cancelDetail(e, id = 1)}
                                            onClick={() => setHeading2(false)}
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
                                    {detail?.button}
                                </p>
                                <button
                                    class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                    onClick={() => {
                                        // setVisionDes(!visionDes),
                                        setDescription({
                                            button: detail?.button
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


                </div>
            </div>

        </>
    )
}

export default PartnerWithus