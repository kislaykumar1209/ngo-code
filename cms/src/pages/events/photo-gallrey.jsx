import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
import walpaper from "../../assets/4.jpg";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { createAlbum, deleteAlbum, getAlbum, updateAlbum } from "../../redux/action/Event/event";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const PhotoGallery = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(3)
  const [visionDailog, setVisionDailog] = useState(false);
  const [updateDailog, setUpdateDailog] = useState(false);
  const [description, setDescription] = useState(false);
  const [section, setsection] = useState("events");
  const [subsection, setsubsection] = useState("photogallery");
  const [heading1, setheading1] = useState(false);
  const [heading2, setheading2] = useState(false);
  const [heading3, setheading3] = useState(false);
  const [heading4, setheading4] = useState(false);
  const [heading5, setheading5] = useState(false);
  const [image, setImage] = useState();


  const { loading, album, message: evtMessage, error: err, sequence } = useSelector((state) => state.event)
  const { loading: load, description: desc, error, message } = useSelector((state) => state.description)
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
  const submitTitle = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title2', title2);
    // console.log(section)
    await dispatch(updateTitleInfo(myForm, section));
    setTopic(false)
    await dispatch(getTitleInfo(section))

  };

  const handleUpdateSequence = async (e, id) => {
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateAlbum(myForm, id))

    // dispatch(getDreamsPoint())
  }

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
  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };


  const [Gallery, setGallery] = useState({
    heading: "",
    date: "",
  });

  const { heading, date } =
    Gallery;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('date', date);
    myForm.append('image', image);

    dispatch(createAlbum(myForm));

  };
  const registerDataChange = (e) => {

    setGallery({ ...Gallery, [e.target.name]: e.target.value });

  };

  const [Desc, setdescription] = useState({
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  })
  const { description1, description2, description3, description4, description5 } = Desc;

  const descriptionDataChange = (e) => {

    setdescription({ ...Desc, [e.target.name]: e.target.value });

  };

  const submitDescription = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description1', description1);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setheading1(false)
  };
  const submitDescription2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description2', description2);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setheading2(false)
  };
  const submitDescription3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description3', description3);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setheading3(false)
  };
  const submitDescription4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description4', description4);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setheading4(false)
  };
  const submitDescription5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();


    myForm.append('description5', description5);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setheading5(false)
  };

  const handleDelete = async (e, id) => {
    e.preventDefault()
    console.log("hi")
    dispatch(deleteAlbum(id))

  }


  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setdescription({
        description1: ""
      })
      setheading1(false)
    }
    if (id === 2) {
      setdescription({
        description2: ""
      })
      setheading2(false)
    }
    if (id === 3) {
      setdescription({
        description3: ""
      })
      setheading3(false)
    }
    if (id === 4) {
      setdescription({
        description4: ""
      })
      setheading4(false)
    }
    if (id === 5) {
      setdescription({
        description5: ""
      })
      setheading5(false)
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

    if (evtMessage) {
      toast.success(evtMessage);
      dispatch({ type: 'clearMessage' });
      setGallery({
        heading: ""
      })
      setImage()
      setVisionDailog(false)
      dispatch(getAlbum())
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
    dispatch(getAlbum());
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, err, evtMessage, errTitle, msgTitle, isAuthenticated]);


  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (
    <>
      <Sidebar>
        <Navbar title="Events" />

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
                      <Link to='/events'>

                        <p className="px-5 py-3">Upcoming Events</p>
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
                      <Link to='/events/comelion'>
                        <p className="px-5 py-3">COME BE A LION</p>
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
                      <Link to='/events/photo-gallery'>
                        <p className="px-5 py-3">Gallery</p>
                      </Link>
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                  <div className="px-4 flex-auto">
                    <div className="flex h-full scroll-smooth">
                      <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
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
                          {heading1 ? (
                            <form onSubmit={submitDescription} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description1"
                                  onChange={descriptionDataChange}
                                  value={description1}
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
                                    // onClick={() => setheading(heading)}
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
                                {/* {desc?.description1 ? desc.description1 : "Our Photo Gallery page is a great way to see the impact that our efforts have had on the lives of those in our community."} */}
                                {desc?.description1}    </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setheading1(!heading1)}
                                onClick={() => {
                                  setdescription({
                                    description1: desc?.description1
                                  })
                                  setheading1(!heading1)
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
                                  onChange={descriptionDataChange}
                                  value={description2}
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
                                    onClick={() => setheading2(heading2)}
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
                                {desc?.description2} </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                  setdescription({
                                    description2: desc?.description2
                                  })
                                  setheading2(!heading2)
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

                        {/* 
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
                                  onChange={descriptionDataChange}
                                  value={description3}
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
                                    onClick={() => setheading3(heading3)}
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
                                {desc?.description3}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                  setdescription({
                                    description3: desc?.description3
                                  })
                                  setheading3(!heading3)
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


                        {/* <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 4
                          </label>
                          {heading4 ? (
                            <form onSubmit={submitDescription4} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description4"
                                  onChange={descriptionDataChange}
                                  value={description4}
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
                                    onClick={() => setheading4(heading4)}
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
                                {desc?.description4}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                  setdescription({
                                    description4: desc?.description4
                                  })
                                  setheading4(!heading4)
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


                        {/* <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Paragraph 5
                          </label>
                          {heading5 ? (
                            <form onSubmit={submitDescription5} className='contents'>
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description5"
                                  onChange={descriptionDataChange}
                                  value={description5}
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
                                    onClick={() => setheading5(heading5)}
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
                                {desc?.description5}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => {
                                  setdescription({
                                    description5: desc?.description5
                                  })
                                  setheading5(!heading5)
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

                        <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Album
                            <p className="text-xs text-red-600">*For uploading Images click on relevant Album Title</p>
                          </label>{" "}
                          <table class="w-3/5  my-5 border-2 border-violet-900/40">
                            <thead class="border-b">
                              <tr className="bg-slate-200">
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Album Name
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Uploaded Picture
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
                              {album && album.map((gallery) => (
                                <tr key={gallery.id} className="border-b text-center hover:bg-blue-100 ">
                                  {/* <NavLink to={`/photo-gallery/images/${gallery.id}`}> */}
                                  <NavLink to={`/photo-gallery/images/${gallery.data.id}`}>
                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap  ">
                                      {gallery.data.heading}
                                    </td>
                                  </NavLink>

                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <img

                                      // src={`/photo-gallery/images/${gallery.image}`}
                                      src={`${process.env.REACT_APP_SERVER}/${gallery.data.image}`}
                                      alt=""
                                      className="w-56 h-24 object-fill mx-auto"
                                    />{" "}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <select className="w-32 mx-auto"
                                      onChange={(e) => handleUpdateSequence(e, gallery.data.id)}>
                                      <option hidden='true' value={gallery.data.sequence} > {gallery.data.sequence}</option>
                                      {sequence && sequence.map((data) => (
                                        <option name="value"
                                          onChange={(e) => handleUpdateSequence(e, gallery.data.id)}
                                          value={data}>{data}</option>
                                      ))}

                                    </select>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, gallery.data.id)} />
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
                            Add Album
                          </button>
                        </div>
                      </div>
                    </div>
                  </div></div></div></div></div></div>
      </Sidebar >
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Album</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitHandler}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Album Name
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={heading}
                      onChange={registerDataChange}
                      id="name"
                      placeholder="Full Name"
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={registerDataChange}
                      id="email"
                      placeholder="date..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Display Picture
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
                            Remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={image}
                          onChange={imageChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
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
      {/* Dailog Box */}
    </>
    //   )}

    // </>
  );
};

export default PhotoGallery;
