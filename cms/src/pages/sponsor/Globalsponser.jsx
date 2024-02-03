import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalSponserPoint, deleteGlobalSponserPoint, getGlobalSponserPoint, updateGlobalSponserPoint } from "../../redux/action/sponsers/sponser";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const Globalsponser = () => {
  const dispatch = useDispatch()
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(2);
  const [heading, setHeading] = useState(false);
  const [heading2, setHeading2] = useState(false);
  const [heading3, setHeading3] = useState(false);
  const [footer, setFooter] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [aboutImage, setAboutImage] = useState();
  const [point, setPoint] = useState("")
  const [stitle, settitle] = useState(false);
  const [section, setsection] = useState("sponser");
  const [subsection, setsubsection] = useState("globalsponser");

  const { loading, sponser, error: err, message: spnMessage, Sequence } = useSelector((state) => state.sponser)
  const { loading: load, description, error, message } = useSelector((state) => state.description)

  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAboutImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setAboutImage();
  };
  const navigate = useNavigate()

  const [Topic, setTopic] = useState(false);
  const { loading: loadTitle, title, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [Title, setTitle] = useState({
    title2: "",
  })
  const { title2, } = Title;

  const TitleChange = (e) => {

    setTitle({ ...Title, [e.target.name]: e.target.value });

  };


  const handleUpdateSequence = async (e, id) => {
    e.preventDefault()
    // setValue(e.target.value)
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateGlobalSponserPoint(myForm, id))
  }
  const submitTitle = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title2', title2);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    setTopic(false)
    await dispatch(getTitleInfo(section))

  };
  const activeSubmit = async (e) => {
    e.preventDefault()

    // console.log(value)
    const myForm = new FormData();
    let value = await title?.is_active2
    myForm.append('is_active2', !value);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    // setTopic(false)
    await dispatch(getTitleInfo(section))


  }
  const submitPoint = async (e) => {
    e.preventDefault()
    const myForm = new FormData();;
    myForm.append('point', point);
    await dispatch(createGlobalSponserPoint(myForm))

  }

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

    setFooter(false)
  };
  const submitDescription5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description5', description5);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    settitle(false)
  };


  const handleDelete = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteGlobalSponserPoint(id))
    dispatch(getGlobalSponserPoint())


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
      setHeading2(false)
    }
    if (id === 3) {
      setDescription({
        description3: ""
      })
      setHeading3(false)
    }
    if (id === 4) {
      setDescription({
        description3: ""
      })
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

      dispatch(getDescriptionPoint(section, subsection))
    }
    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }
    if (!isAuthenticated) {
      navigate('/login')
    }

    if (spnMessage) {
      toast.success(spnMessage);
      dispatch({ type: 'clearMessage' });
      // dispatch(getGlobalSponserPoint())
      setPoint("")
      setVisionDailog(false)
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
    dispatch(getGlobalSponserPoint())
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, err, spnMessage, errTitle, msgTitle, isAuthenticated]);



  return (
    // <>
    //   {loading || load ? (
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
                  className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap sm:flex-nowrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5 md:flex-nowrap"
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
                      <Link to='/sponsor'>
                        <p className="px-5 py-3 whitespace-nowrap">Overview</p>
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
                      <Link to='/sponsor/localsponser'>
                        <p className="px-5 py-3 whitespace-nowrap">Local Sponsor</p>
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
                            <input type="checkbox" name='active' value={title?.is_active2 ? title.is_active2 : true} class="sr-only peer" onClick={activeSubmit} />
                            <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active2 && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active2 && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
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
                                    name="title2"
                                    value={title2}
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
                                  {title?.title2}
                                </p>
                                <button
                                  class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                  onClick={() => {
                                    // setVisionDes(!visionDes),
                                    setTitle({
                                      title2: title?.title2
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
                                <p className={`w-full p-4 text-base`}>
                                  {/* {description?.description1 ? description.description1 : "The Parsippany Lions Club is proud to be a part of the global Lions Club International community and we are grateful for the support of our global sponsors. These sponsors include businesses and organizations that share our commitment to making a difference in our community and around the world."} */}
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
                            {heading2 ? (
                              <form onSubmit={submitDescription2} className='contents'>
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
                                      // onClick={() => setFooter(footer)}
                                      class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </form>
                            ) : (
                              <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                <p className={`w-full p-4 text-base`}>
                                  {/* {description?.description2 ? description.description2 : "Our global sponsors provide vital support through financial contributions, in-kind donations, and volunteer support. Their support enables us to provide vital services such as vision screenings, eye exams, and eyeglasses to those in need; provide education and financial assistance for diabetes-related expenses; address hunger issues, protect and preserve the environment and support children and families affected by cancer, and many more."} */}
                                  {description?.description2}</p>
                                <button
                                  class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                  // onClick={() => setHeading2(!heading2)}
                                  onClick={() => {
                                    setDescription({
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


                          <div class="mb-5 flex flex-col sm:flex-row">
                            <label
                              for="name"
                              class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                            >
                              Paragraph 3
                            </label>
                            {heading3 ? (
                              <form onSubmit={submitDescription3} className='contents'>
                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
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
                                      // onClick={() => setFooter(footer)}
                                      class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </form>
                            ) : (
                              <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                <p className={`w-full p-4 text-base`}>
                                  {/* {description?.description3 ? description.description3 : "We extend our sincere appreciation to our global sponsors for their generosity and support. Without their contributions, we would not be able to make the positive impact we do in our community and around the world."} */}
                                  {description?.description3}  </p>
                                <button
                                  class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                  // onClick={() => setHeading3(!heading3)}
                                  onClick={() => {
                                    setDescription({
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


                          <div class="mb-5 flex flex-col sm:flex-row">
                            <label
                              for="name"
                              class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                            >
                              Footer
                            </label>
                            {footer ? (
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
                                      onClick={(e, id) => cancelDetail(e, id = 4)}
                                      class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      onClick={() => setFooter(footer)}
                                      class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </form>
                            ) : (
                              <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                <p className={`w-full p-4 text-base`}>
                                  {/* {description?.description4 ? description.description4 : "If you're interested in becoming a global sponsor of the Parsippany Lions Club, please contact us. We would be happy to provide more information on the benefits of sponsorship and discuss how your organization can make a difference in our community and the world through a partnership with the Lions Club."} */}
                                  {description?.description4} </p>
                                <button
                                  class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                  // onClick={() => setFooter(!footer)}
                                  onClick={() => {
                                    setDescription({
                                      description4: description?.description4
                                    })
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
                          <div class="mb-5  flex flex-col sm:flex-row ">
                            <label
                              for="name"
                              class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                            >
                              {/* Heading */}
                            </label>
                            {stitle ? (
                              <form onSubmit={submitDescription5} className='contents'>
                                <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
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
                                      // onClick={(e, id) => cancelDetail(e, id = 1)}
                                      onClick={() => settitle(false)}
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
                              <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                                {/* <p className={` p-4 w-full text-base`}>
                              {description?.description4:}
                            </p> */}
                                {/* <h2 className={`w-full p-4 text-base`}> */}
                                <h2 className={`w-full p-4 text-base`}>

                                  {description?.description5 ? description.description5 : 'Some of our global sponsors include:'}
                                </h2>
                                <button
                                  class="flex w-10 h-12 mr-0 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                  // onClick={() => setHeading(!heading)}
                                  onClick={() => {
                                    setDescription({
                                      description5: description?.description5
                                    })
                                    settitle(!stitle)
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
                              class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                            >
                              Global Sponsers
                            </label>{" "}
                            <table class="w-3/5  my-5 border-2 border-violet-900/40">

                              <thead class="border-b">
                                <tr className="bg-slate-200">
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                  >
                                    sponsers
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                  >
                                    Sequence
                                  </th>
                                  {/* <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                  >
                    Website Link
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                  >
                    Partner Logo
                  </th> */}
                                  <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                  >
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {sponser && sponser.map((points) => (
                                  <tr key={point.id} className="border-b text-center hover:bg-blue-100">
                                    {/* <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                    About Us
                  </td> */}
                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                      <p className="w-72 mx-auto">
                                        {points.point}
                                      </p>
                                    </td>
                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                      <select className="w-32 mx-auto"
                                        name="value"
                                        onChange={(e) => handleUpdateSequence(e, points.id)}>
                                        <option hidden='true' value={points.sequence} > {points.sequence}</option>
                                        {Sequence && Sequence.map((data) => (
                                          <option name="value"
                                            onChange={(e) => handleUpdateSequence(e, points.id)}
                                            value={data}>{data}</option>
                                        ))}

                                      </select>
                                    </td>
                                    {/* <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                    <img
                      src={walpaper}
                      alt=""
                      className="w-56 h-24 object-fill mx-auto"
                    />{" "}
                  </td> */}
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
                              className="px-4 py-2 border mx-4 my-auto h-fit border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                              onClick={visionClickToOpen}
                            >
                              Add Partner
                            </button>
                          </div>
                        </div>
                      </div>
                    </div></div>
                </div></div></div></div></div>
      </Sidebar >
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Partner</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitPoint}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      sponser
                    </label>
                    <textarea
                      type="text"
                      name="point"
                      value={point}
                      onChange={e => setPoint(e.target.value)}
                      id="name"
                      placeholder="Write your message here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>


                  <div class="mb-5 flex flex-col sm:flex-row">
                    {/* <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Partner Logo
                    </label> */}
                    {/* <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {aboutImage ? (
                        <div className="w-full">
                          <img
                            src={URL.createObjectURL(aboutImage)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedImage}
                          >
                            Remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          type="file"
                          name=""
                          id=""
                          onChange={imageChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div> */}
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button disabled={loading} type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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

export default Globalsponser;
