import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import walpaper from "../../assets/4.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { createOverview, deleteOverview, getOverview, updateOverview } from "../../redux/action/whatwedo/whatwedo";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const WhatWeDo = () => {

  const dispatch = useDispatch()

  const [quotation, setQuotation] = useState(false);
  const [briefInfo, setBriefInfo] = useState(false);
  const [footer, setFooter] = useState(false);
  const [overviewDesc, setOverviewDesc] = useState(false);
  const [visionDes, setVisionDes] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [updateVisionDailog, setUpdateVisionDailog] = useState(false);
  const [section, setsection] = useState("whatwedo");
  const [subsection, setsubsection] = useState("overview");
  const [image, setImage] = useState();
  const [icon, setIcon] = useState();
  const [Id, setId] = useState("")
  const navigate = useNavigate()

  const { loading, overview, error: err, message: whtMessage, sequence } = useSelector((state) => state.whatwedo)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { title } = useSelector((state) => state.others)
  const { loading: load, description: desc, error, message } = useSelector((state) => state.description)

  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };
  const visionToOpen = () => {
    setUpdateVisionDailog(!updateVisionDailog);
  };

  const visionClickToClose = () => {
    setImage()
    setDetail({
      category: "",
      description: ""
    })
    setUpdateVisionDailog(!updateVisionDailog);
  };

  const visionImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedVisionImage = () => {
    setImage();
  };

  const visionIconChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setIcon(e.target.files[0]);
    }
  };

  const removeSelectedIconImage = () => {
    setIcon();
  };
  // const [section, setsection] = useState("about");
  const [Topic, setTopic] = useState(false);
  const { loading: loadTitle, title: ttile, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
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


  const [detail, setDetail] = useState({
    category: "",
    description: "",
  });

  const { category, description } =
    detail;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('category', category);
    myForm.append('description', description);
    myForm.append('image', image);
    myForm.append('icon', icon);

    dispatch(createOverview(myForm));

  };
  const registerDatachange = (e) => {

    setDetail({ ...detail, [e.target.name]: e.target.value });

  };

  const [Description, setDescription] = useState({
    description1: "",
    description2: "",
    description3: "",
  })
  const { description1, description2, description3 } = Description;

  const descriptionDataChange = (e) => {

    setDescription({ ...desc, [e.target.name]: e.target.value });

  };

  const submitDescription = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description1', description1);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setVisionDes(false)
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
    await dispatch(deleteOverview(id))
    dispatch(getOverview());

  }
  const HandleUpdate = async (e, detail) => {
    e.preventDefault()
    setUpdateVisionDailog(true);
    setId(detail?.id)

    setDetail({
      category: detail?.category,
      description: detail?.description
    });


  }
  const handleUpdateSequence = async (e, id) => {
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateOverview(myForm, id))

    // dispatch(getDreamsPoint())
  }

  const submitUpdateHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('category', category);
    myForm.append('description', description);
    myForm.append('image', image);
    myForm.append('icon', icon);

    await dispatch(updateOverview(myForm, Id));

  };

  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setDescription({
        description1: ""
      })
      setVisionDes(false)
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
  const getDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {

      setDescription({
        description1: desc?.description1
      })
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
    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }

    if (whtMessage) {
      toast.success(whtMessage);
      dispatch({ type: 'clearMessage' });
      setImage()
      setDetail({
        category: "",
        description: ""
      })
      setVisionDailog(false)
      setUpdateVisionDailog(false);
      dispatch(getOverview())

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
    dispatch(getOverview());
    dispatch(getTitleInfo(section))
    dispatch(getDescriptionPoint(section, subsection))
    dispatch(getTitleInfo(section));
  }, [dispatch, error, message, err, whtMessage, section, msgTitle, errTitle, isAuthenticated]);



  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (
    <>
      <Sidebar>
        <Navbar title="What We Do" />
        <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 my-8 shadow-lg rounded">
          <div className="px-4 py-2 flex-auto">
            <div className="tab-content tab-space">

              <div class="flex p-2">
                <div class="w-full my-5">
                  <label class="relative inline-flex items-center cursor-pointer my-4 mx-4  scale-125">
                    <input type="checkbox" name='active' value={title?.is_active ? title.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                    <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!title?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${title?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!title && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                  </label>


                  <h2 className="text-3xl font-roboto font-bold my-4">Overview</h2>
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
                          {ttile?.title1}
                        </p>
                        <button
                          class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                          onClick={() => {
                            // setVisionDes(!visionDes),
                            setTitle({
                              title1: ttile?.title1
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
                      Quotation
                    </label>
                    {visionDes ? (
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
                          > </textarea>
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
                          {desc && desc.description1}
                        </p>
                        <button
                          class="flex w-10 h-12 my-auto mx-2 p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                          // onClick={() => setVisionDes(!visionDes)}
                          // onClick={(e, id) => getDetail(e, id = 1)}
                          onClick={() => {
                            // setVisionDes(!visionDes),
                            setDescription({
                              description1: desc?.description1
                            })
                            setVisionDes(!visionDes)
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
                      Vision
                      <p className="text-xs text-red-600">*For uploading title description click on relevant Title</p>
                    </label>{" "}

                    <table class="w-3/5  my-5 border-2 border-violet-900/40">
                      <thead class="border-b">
                        <tr className="bg-slate-200">
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                          >
                            Title
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
                            Sequence
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
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {overview && overview.map((views) => (
                          <tr className="border-b text-center hover:bg-blue-100">
                            <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap">
                              <NavLink to={`/whatwedo/${views.id}/${views.category}`}>
                                {views.category}
                              </NavLink>
                            </td>
                            <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                              <p className="w-72 mx-auto">
                                {views.description}
                              </p>
                            </td>
                            <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                              <p className="w-42 mx-auto">
                                <select className="w-32 mx-auto"
                                  onChange={(e) => handleUpdateSequence(e, views.id)}>
                                  <option hidden='true' value={views.sequence} > {views.sequence}</option>
                                  {sequence && sequence.map((data) => (
                                    <option name="value"
                                      onChange={(e) => handleUpdateSequence(e, views.id)}
                                      value={data}>{data}</option>
                                  ))}

                                </select>
                              </p>
                            </td>
                            <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                              <img
                                src={`${process.env.REACT_APP_SERVER}/${views.image}`}
                                alt=""
                                className="w-56 h-24 object-fill mx-auto"
                              />{" "}
                            </td>
                            <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                              <div className="flex justify-center items-center">
                                <CiEdit className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => HandleUpdate(e, views)} />
                                <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, views.id)} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>{" "}
                    <button
                      className="px-4 py-2 my-auto mx-4 h-fit border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                      onClick={visionClickToOpen}
                    >
                      Add Vision
                    </button>
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
                              onClick={() => setFooter(footer)}
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
                          {desc?.description2}
                        </p>
                        <button
                          class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                          onClick={() => {
                            // setVisionDes(!visionDes),
                            setDescription({
                              description2: desc?.description2
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
                              onClick={() => setOverviewDesc(overviewDesc)}
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
                          {desc?.description3}
                        </p>
                        <button
                          class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                          onClick={() => {
                            // setVisionDes(!visionDes),
                            setDescription({
                              description3: desc?.description3
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
            </div>
          </div>
        </div>
      </Sidebar >
      {/* Dailog Box */}
      < Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Vision</p>}
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
                      Title
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={category}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Write your motive here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      rows="2"
                      name="description"
                      value={description}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="Explain Your motive..."
                      class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                    // class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Icon
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {icon ? (
                        <div className="w-full">
                          <img
                            accept="image/*"
                            src={URL.createObjectURL(icon)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedIconImage}
                          >
                            remove icon
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={icon}
                          onChange={visionIconChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Vision Image
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
                            onClick={removeSelectedVisionImage}
                          >
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={image}
                          onChange={visionImageChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button disabled={loading} class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
      </Dialog >
      <Dialog open={updateVisionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Update Vision</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitUpdateHandler}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={category}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Write your motive here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={description}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="Explain Your motive..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Icon
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {icon ? (
                        <div className="w-full">
                          <img
                            accept="image/*"
                            src={URL.createObjectURL(icon)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedIconImage}
                          >
                            remove icon
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={icon}
                          onChange={visionIconChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Vision Image
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
                            onClick={removeSelectedVisionImage}
                          >
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={image}
                          onChange={visionImageChange}
                          className="text-base z-0 ml-auto"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button disabled={loading} class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
            onClick={visionClickToClose}
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

export default WhatWeDo;
