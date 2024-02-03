import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import user from "../../assets/user.webp";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createDreamsPoint, deleteDreamsPoint, getDreamsPoint, getMissionandDream, updateDreamsPoint, updateMissionandDream } from "../../redux/action/about/about";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import About from "../about";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const Missions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quotations, setQuotations] = useState(false);
  const [dreamquotations, setDreamQuotations] = useState(false);
  const [footer, setFooter] = useState(false);
  const [dailog, setDailog] = useState(false);
  const [point, setPoint] = useState("");
  // const [section, setsection] = useState("about");
  const [subsection, setsubsection] = useState("mission");
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(2);

  const [value, setValue] = useState("")


  const [description1, setDescription1] = useState("")
  const [description2, setDescription2] = useState("")
  const [description4, setDescription4] = useState("")
  const [description5, setDescription5] = useState("")

  const { loading, mission: missionAndDreams, dreamsPoint, error: err, message: abtMessage, Sequence } = useSelector((state) => state.about)
  const { loading: load, description, message, error } = useSelector((state) => state.description)

  // setSequence(oldArray => [...oldArray, newElement]);

  const visionClickToOpen = () => {
    setDailog(!dailog);
  };

  const visionToClose = () => {
    setDailog(!dailog);
  };

  const [section, setsection] = useState("about");
  const [Topic, setTopic] = useState(false);
  const [Topic1, setTopic1] = useState(false);
  const [Topic2, setTopic2] = useState(false);
  const [Topic3, setTopic3] = useState(false);



  const { loading: loads, isAuthenticated, user } = useSelector((state) => state.auth)
  const { loading: loadTitle, title, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const [Title, setTitle] = useState({
    title4: "",
  })
  const { title4, title5 } = Title;

  const TitleChange = (e) => {

    setTitle({ ...Title, [e.target.name]: e.target.value });

  };
  const submitTitle = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title4', title4);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    setTopic(false)
    await dispatch(getTitleInfo(section))

  };
  const submitTitle2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title5', title5);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    setTopic1(false)
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


  const [missionInfo, setMissionInfo] = useState({
    mission: "",
    dreams: ""
  });

  const { mission, dreams } =
    missionInfo;


  const registerDataChange = (e) => {
    setMissionInfo({ ...missionInfo, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('mission', mission);


    await dispatch(updateMissionandDream(myForm))
    setQuotations(false)
    dispatch(getMissionandDream())

  }
  const submitHandler2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('dreams', dreams);


    await dispatch(updateMissionandDream(myForm))

    setDreamQuotations(false)
    dispatch(getMissionandDream())

  }
  const dreamPointSubmitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('point', point);


    await dispatch(createDreamsPoint(myForm))
    dispatch(getDreamsPoint())
  }


  const descriptionSubmitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('description1', description1);


    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    dispatch(getDescriptionPoint(section, subsection))
  }
  const descriptionSubmitHandler2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('description4', description4);


    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setTopic1(false)
    dispatch(getDescriptionPoint(section, subsection))
  }
  const descriptionSubmitHandler3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('description5', description5);


    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setTopic2(false)
    dispatch(getDescriptionPoint(section, subsection))
  }

  const handleUpdateSequence = async (e, id) => {
    // e.preventDefault()
    // setValue(e.target.value)
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateDreamsPoint(myForm, id))
    dispatch(getDreamsPoint())
  }


  const descriptionSubmitHandler4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();;
    myForm.append('description2', description2);


    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setTopic3(false)
    dispatch(getDescriptionPoint(section, subsection))
  }

  const handleDelete = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteDreamsPoint(id))
    setTopic2(false)
    dispatch(getDreamsPoint())
  }


  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setMissionInfo({
        mission: ""
      })
      setQuotations(false)
    }
    if (id === 2) {
      setMissionInfo({
        dreams: ""
      })
      setDreamQuotations(false)
    }
    if (id === 3) {
      setDescription1("");
      setFooter(false)
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
      setFooter(false)
    }
    if (err) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (abtMessage) {
      toast.success(abtMessage);
      dispatch({ type: 'clearMessage' });


      setPoint("")
      setDailog(false)
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
    if (!isAuthenticated) {
      navigate('/login')
    }


    dispatch(getMissionandDream());
    dispatch(getDreamsPoint())
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, err, abtMessage, msgTitle, isAuthenticated, errTitle]);
  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (
    <>
      <Sidebar >
        <Navbar title="About" />
        {/* */}
        <div className="flex h-full scroll-smooth">
          <div className="w-full h-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5 md:flex-nowrap"
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
                      <NavLink exact to='/about' >

                        <p className="px-5 py-3">Overview</p>
                      </NavLink>
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
                      {/* <Link to='/about/mission'> */}
                      <NavLink exact to='/about/mission'>

                        <p className="px-5 py-3">Mission & Dreams</p>
                      </NavLink>
                    </a>
                  </li>

                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space"></div>
                    <label class="relative inline-flex items-center cursor-pointer my-2  mx-5 scale-125">
                      <input type="checkbox" name='active' value={title?.is_active4 ? title.is_active4 : true} class="sr-only peer" onClick={activeSubmit} />
                      <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active4 && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active4 && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!title && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                    </label>


                    {/* <About /> */}
                    <div class="flex p-2">
                      <div class="w-full my-5">


                        <h2 className="text-xl font-roboto font-bold mx-5 my-4">
                          Our Goal
                        </h2>
                        <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Set Title
                          </label>
                          {Topic ? (
                            <form onSubmit={submitTitle} className="contents">
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
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
                            Goal Quotation
                          </label>
                          {quotations ? (
                            <form onSubmit={submitHandler} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="mission"
                                  value={mission}
                                  onChange={registerDataChange}
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

                                    // onClick={() => setQuotations(quotations)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            // </form>
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {/* {missionAndDreams && missionAndDreams[0].mission} */}
                                {/* {missionAndDreams?.mission ? missionAndDreams.mission : `“To become a role model in the community and humanitarian service”`} */}
                                {missionAndDreams?.mission}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setQuotations(!quotations)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setMissionInfo({
                                    mission: missionAndDreams?.mission
                                  })
                                  setQuotations(!quotations)
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

                        <div class="mb-5 w-full flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            {/* Heading */}
                          </label>
                          {Topic1 ? (
                            <form onSubmit={descriptionSubmitHandler2} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description4"
                                  value={description4}
                                  onChange={e => setDescription4(e.target.value)}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                    onClick={() => setTopic1(false)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    // onClick={() => setHeading(heading)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              {/* <p className={` p-4 w-full text-base`}>
                              {description?.description4:}
                            </p> */}
                              <h2 className={`w-full p-4 text-base`}>
                                {description?.description4 ? description.description4 : 'Globally, Lions Clubs International Supports Five Major Causes'}
                              </h2>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading(!heading)}
                                onClick={() => {
                                  setDescription4(
                                    description?.description4
                                  )
                                  setTopic1(!Topic1)
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

                        <div class="mb-5 w-full flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Description
                          </label>
                          {Topic3 ? (
                            <form onSubmit={descriptionSubmitHandler4} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description2"
                                  value={description2}
                                  onChange={e => setDescription2(e.target.value)}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                    onClick={() => setTopic3(false)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    // onClick={() => setHeading(heading)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              <p className={` p-4 w-full text-base`}>
                                {description?.description2}
                              </p>
                              {/* <h2 className={`w-full p-4 text-base`}>
                                {description?.description4 ? description.description4 : 'Globally, Lions Clubs International Supports Five Major Causes'}
                              </h2> */}
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading(!heading)}
                                onClick={() => {
                                  setDescription2(
                                    description?.description2
                                  )
                                  setTopic3(!Topic3)
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
                        {/* New Change */}
                        <div class="mb-5 w-full flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            {/* Heading */}
                          </label>
                          {Topic2 ? (
                            <form onSubmit={descriptionSubmitHandler3} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description5"
                                  value={description5}
                                  onChange={e => setDescription5(e.target.value)}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                    onClick={() => setTopic2(false)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    // onClick={() => setHeading(heading)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              {/* <p className={` p-4 w-full text-base`}>
                              {description?.description4:}
                            </p> */}
                              <h2 className={`w-full p-4 text-base`}>
                                {description?.description5 ? description.description5 : 'Some Of The Other Programs That We Intend To Focus On Are Listed Below:'}
                              </h2>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading(!heading)}
                                onClick={() => {
                                  setDescription5(
                                    description?.description5
                                  )
                                  setTopic2(!Topic2)
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

                        <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                          <label
                            for="name"
                            class="mx-2 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Points
                          </label>{" "}
                          <table class="w-4/5  my-5 border-2 border-violet-900/40">
                            <thead class="border-b">
                              <tr className="bg-slate-200">
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Points
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
                              {dreamsPoint && dreamsPoint?.map((points) => (
                                <tr key={points.id} className="border-b text-center hover:bg-blue-100">
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <p className="w-72 mx-auto">
                                      {points.point}
                                    </p>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <select className="w-32 mx-auto"
                                      onChange={(e) => handleUpdateSequence(e, points.id)}>
                                      <option hidden='true' value={points.sequence} > {points.sequence}</option>
                                      {Sequence && Sequence.map((data) => (
                                        <option name="value"
                                          onChange={(e) => handleUpdateSequence(e, points.id)}
                                          value={data}>{data}</option>
                                      ))}

                                    </select>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, points.id)} />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>


                          </table>{" "}
                          <button
                            className="px-4 py-2 my-5 mx-4 h-fit border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                            onClick={visionClickToOpen}
                          >
                            Add Points
                          </button>
                        </div>

                        <h2 className="text-xl font-roboto font-bold mx-5 my-4">
                          Our Mission
                        </h2>
                        <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Set Title
                          </label>
                          {Topic1 ? (
                            <form onSubmit={submitTitle2} className="contents">
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="title5"
                                  value={title5}
                                  onChange={TitleChange}
                                  id="message"
                                  placeholder="Type Your Page Title..."
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                                    onClick={() => setTopic1(false)}
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
                                {title?.title5}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setTitle({
                                    title5: title?.title5
                                  })
                                  setTopic1(!Topic1)
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
                            Mission Quotation
                          </label>
                          {dreamquotations ? (
                            // <div>
                            <form onSubmit={submitHandler2} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="dreams"
                                  value={dreams}
                                  onChange={registerDataChange}
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

                                    // onClick={() => setQuotations(quotations)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>

                            // </div>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {/* {missionAndDreams && missionAndDreams[0].dreams} */}
                                {/* {missionAndDreams?.dreams ? missionAndDreams.dreams : "To empower Lions Clubs volunteers, and Partners to improve health and well-being, and support those in need through humanitarian services and grants that impact lives, encourage peace and promote diversity."} */}
                                {missionAndDreams?.dreams}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setDreamQuotations(!dreamquotations)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setMissionInfo({
                                    dreams: missionAndDreams?.dreams
                                  })
                                  setDreamQuotations(!dreamquotations)
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
                            Goal&Mission Footer
                          </label>
                          {footer ? (
                            // <div>
                            <form onSubmit={descriptionSubmitHandler} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description1"
                                  value={description1}
                                  onChange={e => setDescription1(e.target.value)}
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
                                    disabled={load}

                                    // onClick={() => setFooter(footer)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                            // </div>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {/* {description?.description1 ? description.description1 : "If you feel aligned with our dream and mission, please contact us via email or phone. We look forward to hearing from you and making a difference in our community together!"} */}
                                {description?.description1}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setFooter(!footer)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setDescription1(description?.description1
                                  )
                                  setFooter(!footer)
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
                  </div></div></div></div></div></div>
      </Sidebar >

      <Dialog open={dailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Goal Points</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={dreamPointSubmitHandler}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Points
                    </label>
                    <textarea
                      rows="2"
                      name="point"
                      value={point}
                      onChange={(e) => setPoint(e.target.value)}
                      id="message"
                      placeholder="Type your message"
                      class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button
                      disabled={loading}

                      type="submit"
                      class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
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
            onClick={visionToClose}
            color="primary"
            className="font-bold text-3xl"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
    //   )}
    // </>
  );
};

export default Missions;


