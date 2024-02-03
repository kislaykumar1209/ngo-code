import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";

const OverviewSponsor = () => {

  const dispatch = useDispatch()
  const [openTab, setOpenTab] = useState(1);
  const [heading, setHeading] = useState(false);
  const [heading2, setHeading2] = useState(false);
  const [heading3, setHeading3] = useState(false);
  const [heading4, setHeading4] = useState(false);
  const [heading5, setHeading5] = useState(false);

  const [section, setsection] = useState("sponser");
  const [subsection, setsubsection] = useState("overview");
  const navigate = useNavigate()
  const { loading, description, error, message } = useSelector((state) => state.description)
  const [Topic, setTopic] = useState(false);
  const { loading: loadTitle, title, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [Title, setTitle] = useState({
    title1: "",
  })
  const { title1, } = Title;

  const TitleChange = (e) => {

    setTitle({ ...Title, [e.target.name]: e.target.value });

  };
  const submitTitle = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title1', title1);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    setTopic(false)
    await dispatch(getTitleInfo(section))

  };
  const activeSubmit = async (e) => {
    e.preventDefault()

    // console.log(value)
    const myForm = new FormData();
    let value = await title?.is_active
    myForm.append('is_active', !value);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    // setTopic(false)
    await dispatch(getTitleInfo(section))


  }
  const [desc, setdescription] = useState({
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  })
  const { description1, description2, description3, description4, description5 } = desc;

  const descriptionDataChange = (e) => {

    setdescription({ ...desc, [e.target.name]: e.target.value });

  };

  const submitDescription = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description1', description1);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setHeading(false)


  };
  const submitDescription2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description2', description2);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setHeading2(false)


  };
  const submitDescription3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description3', description3);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setHeading3(false)

  };
  const submitDescription4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description4', description4);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setHeading4(false)

  };
  const submitDescription5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description5', description5);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setHeading5(false)
  };
  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setdescription({
        description1: ""
      })
      setHeading(false)
    }
    if (id === 2) {
      setdescription({
        description2: ""
      })
      setHeading2(false)
    }
    if (id === 3) {
      setdescription({
        description3: ""
      })
      setHeading3(false)
    }
    if (id === 4) {
      setdescription({
        description4: ""
      })
      setHeading4(false)
    }
    if (id === 5) {
      setdescription({
        description5: ""
      })
      setHeading5(false)
    }


  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });

      dispatch(getDescriptionPoint(section, subsection))

    }
    if (errTitle) {
      toast.error(errTitle);
      dispatch({ type: 'clearError' });
    }

    if (msgTitle) {
      toast.success(msgTitle);
      dispatch({ type: 'clearMessage' });

      dispatch(getTitleInfo(section));
    }
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, errTitle, msgTitle, isAuthenticated]);


  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
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
                        "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
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
                        <p className="px-5 py-3 whitespace-nowrap">Overview</p>
                      </Link>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
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
                        <p className="px-5 py-3 whitespace-nowrap">Global Sponsor</p>
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
                      <Link to='/sponsor/Partnerwithus'>
                        <p className="px-5 py-3 whitespace-nowrap">Partner With Us</p>
                      </Link>
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
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
                        <p className="px-5 py-3 whitespace-nowrap">Local Sponsor</p>
                      </Link>
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space">
                      <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
                        <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                          <input type="checkbox" name='active' value={title?.is_active ? title.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                          <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
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
                                  name="title1"
                                  value={title1}
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
                                {title?.title1}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setTitle({
                                    title1: title?.title1
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
                        <h2 className={`w-full p-4 text-base`}>
                          Our Sponsors/ Partnerships
                        </h2>
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 1
                          </label>
                          {heading ? (
                            <form onSubmit={submitDescription} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                                    onClick={() => setHeading(heading)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={` w-full p-4 text-base`}>
                                {description?.description1}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading(!heading)}
                                onClick={() => {
                                  setdescription({
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
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 2
                          </label>
                          {heading2 ? (
                            <form onSubmit={submitDescription2} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                                    onClick={() => setHeading2(heading2)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {description?.description2}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading2(!heading2)}
                                onClick={() => {
                                  setdescription({
                                    description2: description?.description2
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
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 3
                          </label>
                          {heading3 ? (
                            <form onSubmit={submitDescription3} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                                    onClick={(e, id) => cancelDetail(e, id = 3)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    onClick={() => setHeading3(heading3)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {description?.description3}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading3(!heading3)}
                                onClick={() => {
                                  setdescription({
                                    description3: description?.description3
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
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 4
                          </label>
                          {heading4 ? (
                            <form onSubmit={submitDescription4} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                                    onClick={(e, id) => cancelDetail(e, id = 4)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    onClick={() => setHeading4(heading4)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={` w-full p-4 text-base`}>
                                {description?.description4}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading4(!heading4)}
                                onClick={() => {
                                  setdescription({
                                    description4: description?.description4
                                  })
                                  setHeading4(!heading4)
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
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 5
                          </label>
                          {heading5 ? (
                            <form onSubmit={submitDescription5} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description5"
                                  value={description5}
                                  onChange={descriptionDataChange}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    onClick={(e, id) => cancelDetail(e, id = 5)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    onClick={() => setHeading5(heading5)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {description?.description5}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading5(!heading5)}
                                onClick={() => {
                                  setdescription({
                                    description5: description?.description5
                                  })
                                  setHeading5(!heading5)
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
                    </div></div>
                </div></div></div></div></div>
      </Sidebar >
    </>
    //   )}

    // </>
  );
};

export default OverviewSponsor;
