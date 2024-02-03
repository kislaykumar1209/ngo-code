import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import user from "../../assets/user.webp";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { createOverviewPoint, deleteOverviewPoint, getOverviewPoint, updateOverviewPoint } from "../../redux/action/about/about";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const Overview = () => {
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [heading, setHeading] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [footer, setFooter] = useState(false);
  const [overviewDesc, setOverviewDesc] = useState(false);

  const [subsection, setsubsection] = useState("overview");

  const [image, setImage] = useState()


  const { loading, overview: view, error: err, message: abtMessage, sequence } = useSelector((state) => state.about)
  const { loading: load, description, message, error } = useSelector((state) => state.description)
  const { isAuthenticated } = useSelector((state) => state.auth)
  // console.log(sequence)


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
  const [section, setsection] = useState("about");
  const [Topic, setTopic] = useState(false);
  const { loading: loadTitle, title, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const [Title, setTitle] = useState({
    title1: "",
  })

  // const [active, setActive] = useState(title?.is_active);
  // console.log(active)
  // const [Active, SetActive] = useState({
  // console.log(active)
  //   Active: true,
  // })
  const { title1, } = Title;
  // const { Active, } = Activw;

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

  const handleUpdateSequence = async (e, id) => {
    const myForm = new FormData();
    console.log(e.target.value)
    myForm.append('point', e.target.value);
    await dispatch(updateOverviewPoint(myForm, id))

    // dispatch(getDreamsPoint())
  }

  const [overviewPoint, setOverviewPoint] = useState({
    heading: "",
    comment: "",
  });

  const { heading: topic, comment } = overviewPoint;
  const registerDataChange = (e) => {

    setOverviewPoint({ ...overviewPoint, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', topic);
    myForm.append('comment', comment);
    myForm.append('image', image);

    await dispatch(createOverviewPoint(myForm));

  };


  const [desc, setDescription] = useState({
    description1: "",
    description2: "",
    description3: "",
  })
  const { description1, description2, description3 } = desc;

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
    setFooter(false)


  };
  const submitDescription3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description3', description3);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setOverviewDesc(false)

  };

  const handleDelete = async (e, id) => {
    e.preventDefault()
    dispatch(deleteOverviewPoint(id))
    // dispatch(getOverviewPoint())

  }
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
      setFooter(false)
    }
    if (id === 3) {
      setDescription({
        description3: ""
      })
      setOverviewDesc(false)
    }


  }


  // console.log(abtMessage)
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

    if (abtMessage) {
      toast.success(abtMessage);
      dispatch({ type: 'clearMessage' });
      setImage()
      setOverviewPoint({
        heading: "",
        comment: ""
      })
      setVisionDailog(false)
      dispatch(getOverviewPoint())
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


    dispatch(getOverviewPoint());
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, err, abtMessage, errTitle, isAuthenticated, msgTitle]);


  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (

    <>
      <Sidebar>
        <Navbar title="About" />

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
                  {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                    <Link to='/about/our-team'>

                      <p className="px-5 py-3">Team</p>
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
                    <Link to='/about/testimonial'>

                      <p className="px-5 py-3">Testimonial</p>
                    </Link>
                  </a>
                </li> */}
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space"></div>
                    <div class="flex p-2">
                      <div class="w-full my-5">
                        <label class="relative inline-flex items-center cursor-pointer mt-1 mb-10  scale-125 ">
                          <input type="checkbox" name='active' value={title?.is_active ? title.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                          <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!title && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>
                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                        </label>
                        {/* <form> */}
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
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
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
                        <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Heading
                          </label>
                          {heading ? (
                            <form onSubmit={submitDescription} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description1"
                                  value={description1}
                                  onChange={descriptionDataChange}
                                  // onChange={e => setDescription(e.target.value)}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >{description1}</textarea>
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
                              <p className={` w-full p-4 text-base`}>
                                {description?.description1}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setHeading(!heading)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
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
                        {/* </form> */}
                        <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Points
                          </label>{" "}
                          <table class="w-full  my-5 border-2 border-violet-900/40">
                            <thead class="border-b">
                              <tr className="bg-slate-200">
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Heading
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
                                  Image
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
                              {view && view.map((point, index) => (
                                <tr key={point.id} className="border-b text-center hover:bg-blue-100">
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {point.heading}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <p className="w-72 mx-auto">
                                      {point.comment}
                                    </p>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <img
                                      src={`${process.env.REACT_APP_SERVER}/${point.image}`}
                                      alt=""
                                      className="w-100 h-24 object-contain  mx-auto"
                                    />{" "}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <select className="w-72 mx-auto"
                                      onChange={(e) => handleUpdateSequence(e, point.id)}>
                                      <option hidden='true' value={point.sequence} > {point.sequence}</option>
                                      {sequence && sequence.map((data) => (
                                        <option name="value"
                                          onChange={(e) => handleUpdateSequence(e, point.id)}
                                          value={data}>{data}</option>
                                      ))}

                                    </select>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, point.id)} />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>{" "}
                          {/* <div className="w-24 h-20"> */}
                          <button
                            className="px-4 py-2 border my-5 mx-4 h-fit border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                            onClick={visionClickToOpen}
                          >
                            Add Point
                          </button>
                          {/* </div> */}
                        </div>
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Overview Footer1
                          </label>
                          {footer ? (
                            <form onSubmit={submitDescription2} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description2"
                                  value={description2}
                                  onChange={descriptionDataChange}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >{description2}</textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="submit"

                                    onClick={(e, id) => cancelDetail(e, id = 2)}
                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    disabled={load}

                                    // onClick={() => setFooter(false)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {description?.description2}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setFooter(!footer)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setDescription({
                                    description2: description?.description2
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
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Overview Footer2
                          </label>
                          {overviewDesc ? (
                            <form onSubmit={submitDescription3} className='contents'>
                              <div className="w-100 sm:w-full min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description3"
                                  value={description3}
                                  onChange={descriptionDataChange}
                                  id="message"
                                  placeholder="Type your message"
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >{description2}</textarea>
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

                                    // onClick={() => setOverviewDesc(!overviewDesc)}
                                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <div className="w-100 sm:w-full h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                {description?.description3}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setOverviewDesc(!overviewDesc)}
                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setDescription({
                                    description3: description?.description3
                                  })
                                  setOverviewDesc(!overviewDesc)
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
      </Sidebar >

      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Point</p>}
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
                      Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={topic}
                      onChange={registerDataChange}
                      id="name"
                      placeholder="Write your heading here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Information
                    </label>
                    <textarea
                      rows="2"
                      name="comment"
                      value={comment}
                      onChange={registerDataChange}
                      id="message"
                      placeholder="Describe your heading here..."
                      class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                    {/* </div>
                    <input
                      type="text"
                      name="comment"
                      value={comment}
                      onChange={registerDataChange}
                      id="email"
                      placeholder="Describe your heading here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    /> */}
                  </div>

                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Cause Image
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {image ? (
                        <div className="w-full">
                          <img
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
                          type="file"
                          name="image"
                          value={image}
                          onChange={imageChange}
                          // onChange={registerDataChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button disabled={loading}
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

export default Overview;
