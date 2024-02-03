import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import { useDispatch, useSelector } from "react-redux";
import { createResource, deleteResource, getResource } from "../../redux/action/resources/resource";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { getDonate, getTitleInfo, updateDonate, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const Donate = () => {
  const dispatch = useDispatch()
  const [openTab, setOpenTab] = useState(4);
  const [Button, setButton] = useState(false);
  const [Heading1, setHeading1] = useState(false);
  const [Heading2, setHeading2] = useState(false);
  const [Heading3, setHeading3] = useState(false);
  const [Heading4, setHeading4] = useState(false);
  const [Heading5, setHeading5] = useState(false);
  const [Heading6, setHeading6] = useState(false);
  const [Heading7, setHeading7] = useState(false);
  const [Heading8, setHeading8] = useState(false);
  const [Heading9, setHeading9] = useState(false);


  const [image, setImage] = useState();
  const [image1, setImage1] = useState();



  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { loading, error, message, donate } = useSelector((state) => state.others)
  const [Detail, setDetail] = useState({
    heading1: "",
    heading2: "",
    heading3: "",
    heading4: "",
    heading5: "",
    heading6: "",
    heading7: "",
    heading8: "",
    heading9: "",
    button: ""
  })
  const { heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8, heading9, button } = Detail;
  const descriptionDataChange = (e) => {

    setDetail({ ...Detail, [e.target.name]: e.target.value });

  };



  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };

  const imageChange1 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage1(e.target.files[0]);
    }
  };

  const removeSelectedImage1 = () => {
    setImage1();
  };


  const submitButton = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('button', button);
    await dispatch(updateDonate(myForm));
    setButton(false)
  };
  const submitImage1 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image2', image1);
    await dispatch(updateDonate(myForm));
    // setButton(false)
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image1', image);
    await dispatch(updateDonate(myForm));
    // setButton(false)
  };
  const submitDetail = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading1', heading1);
    await dispatch(updateDonate(myForm));
    setHeading1(false)
  };
  const submitDetail2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading2', heading2);
    await dispatch(updateDonate(myForm));
    setHeading2(false)
  };
  const submitDetail3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading3', heading3);
    await dispatch(updateDonate(myForm));
    setHeading3(false)
  };
  const submitDetail4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading4', heading4);
    await dispatch(updateDonate(myForm));
    setHeading4(false)
  };
  const submitDetail5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading5', heading5);
    await dispatch(updateDonate(myForm));
    setHeading5(false)
  };
  const submitDetail6 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading6', heading6);
    await dispatch(updateDonate(myForm));
    setHeading6(false)
  };
  const submitDetail7 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading7', heading7);
    await dispatch(updateDonate(myForm));
    setHeading7(false)
  };
  const submitDetail8 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading8', heading8);
    await dispatch(updateDonate(myForm));
    setHeading8(false)
  };
  const submitDetail9 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading9', heading9);
    await dispatch(updateDonate(myForm));
    setHeading9(false)
  };

  const activeSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    let value = await donate?.is_active
    myForm.append('is_active', !value);
    await dispatch(updateDonate(myForm));
    setHeading9(false)
  };




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

      dispatch(getDonate())
    }

    dispatch(getDonate())
  }, [dispatch, error, message, isAuthenticated]);

  return (

    <>
      <Sidebar>
        <Navbar title="Donate Us" />
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
                  <div className="px-4 flex-auto"></div>
                  <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
                    {/* <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                      <input type="checkbox" name='active' value={donate?.is_active ? donate.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                      <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!donate?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${donate?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!donate && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
                          `}></div>

                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                    </label> */}
                    {/* not defined  then false   defined true then false   defined true  then true*/}



                    <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        Heading
                      </label>
                      {Heading1 ? (
                        <form onSubmit={submitDetail} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading1"
                              value={heading1}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
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
                            {donate?.heading1}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading1: donate?.heading1
                              })
                              setHeading1(!Heading1)
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
                        Detail
                      </label>
                      {Heading2 ? (
                        <form onSubmit={submitDetail2} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading2"
                              value={heading2}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Yo"
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
                            {donate?.heading2}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading2: donate?.heading2
                              })
                              setHeading2(!Heading2)
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
                      {Button ? (
                        <form onSubmit={submitButton} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="button"
                              value={button}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Yo"
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setButton(false)}
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
                            {donate?.button}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                button: donate?.button
                              })
                              setButton(!Button)
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
                    <h1 className=" md:text-xl font-extrabold mx-5 my-4  text-lg">Donate Option</h1>{" "}
                    <h2 className=" md:text-xl font-bold mx-5 my-5  text-lg">Option 1:</h2>{" "}
                    <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        Donation To:
                      </label>
                      {Heading3 ? (
                        <form onSubmit={submitDetail3} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading3"
                              value={heading3}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading3(false)}
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
                            {donate?.heading3}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading3: donate?.heading3
                              })
                              setHeading3(!Heading3)
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
                    <h2 className=" md:text-xl font-bold mx-5 my-10  text-lg">Option 2:</h2>{" "}
                    <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        Scan to:
                      </label>
                      {Heading4 ? (
                        <form onSubmit={submitDetail4} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading4"
                              value={heading4}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading4(false)}
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
                            {donate?.heading4}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading4: donate?.heading4
                              })
                              setHeading4(!Heading4)
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
                        for="email"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        QR
                      </label>
                      <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                        {image ? (
                          <form onSubmit={submitImage} className="contents">
                            <div className="w-full">
                              <img
                                accept="image/*"
                                src={URL.createObjectURL(image)}
                                alt=""
                                name="image"
                                value={image}
                                className="object-fill z-40"
                              />
                              <button
                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                onClick={removeSelectedImage}
                              >
                                remove
                              </button>{" "}
                              <button
                                type="submit"
                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                              // onClick={removeSelectedImage1}
                              >
                                submit
                              </button>{" "}
                            </div>
                          </form>
                        ) : (
                          (donate?.image1 ? (<><img src={`${process.env.REACT_APP_SERVER}/${donate?.image1}`} /> <input
                            type="file"
                            style={{
                              color: "transparent",
                              marginLeft: "90px"
                            }}
                            name="image"
                            accept="image/*"
                            id=""
                            onChange={imageChange}
                            className="text-base z-0 mx-auto ml-11 mt-3"
                          /></>) : (<input
                            type="file"

                            title=" "
                            name=""
                            accept="image/*"
                            id=""
                            onChange={imageChange}
                            className="text-base z-0 mx-auto"
                          />))
                        )}
                      </div>
                    </div>
                    <h2 className=" md:text-xl font-bold mx-5 my-10  text-lg">Option 3:</h2>{" "}
                    <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        App Advertisment
                      </label>
                      {Heading5 ? (
                        <form onSubmit={submitDetail5} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading5"
                              value={heading5}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading5(false)}
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
                            {donate?.heading5}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading5: donate?.heading5
                              })
                              setHeading5(!Heading5)
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
                        for="email"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        App logo:
                      </label>
                      <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                        {image1 ? (
                          <form onSubmit={submitImage1} className="contents">
                            <div className="w-full">
                              <img
                                accept="image/*"
                                src={URL.createObjectURL(image1)}
                                alt=""
                                name="image1"
                                value={image1}
                                className="object-fill z-40"
                              />
                              <button
                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                onClick={removeSelectedImage1}
                              >
                                remove
                              </button>{" "}
                              <button
                                type="submit"
                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                              // onClick={removeSelectedImage1}
                              >
                                submit
                              </button>{" "}
                            </div>
                          </form>
                        ) : (
                          (donate?.image2 ? (<><img src={`${process.env.REACT_APP_SERVER}/${donate?.image2}`} /> <input
                            type="file"
                            style={{
                              color: "transparent",
                              marginLeft: "90px"
                            }}
                            name="image"
                            accept="image/*"
                            id=""
                            onChange={imageChange1}
                            className="text-base z-0 mx-auto ml-11 mt-3"
                          /></>) : (<input
                            type="file"

                            title=" "
                            name=""
                            accept="image/*"
                            id=""
                            onChange={imageChange1}
                            className="text-base z-0 mx-auto"
                          />))
                        )}
                      </div>
                    </div>
                    <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="name"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        Club
                      </label>
                      {Heading6 ? (
                        <form onSubmit={submitDetail6} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading6"
                              value={heading6}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading6(false)}
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
                            {donate?.heading6}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading6: donate?.heading6
                              })
                              setHeading6(!Heading6)
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
                        Payment to
                      </label>
                      {Heading7 ? (
                        <form onSubmit={submitDetail7} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading7"
                              value={heading7}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading7(false)}
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
                            {donate?.heading7}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading7: donate?.heading7
                              })
                              setHeading7(!Heading7)
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
                        Device
                      </label>
                      {Heading8 ? (
                        <form onSubmit={submitDetail8} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading8"
                              value={heading8}
                              onChange={descriptionDataChange}
                              id="message"
                              //   placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading8(false)}
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
                            {donate?.heading8}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading8: donate?.heading8
                              })
                              setHeading8(!Heading8)
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
                        Mobile
                      </label>
                      {Heading9 ? (
                        <form onSubmit={submitDetail9} className="contents">
                          <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                            <textarea
                              rows="2"
                              name="heading9"
                              value={heading9}
                              onChange={descriptionDataChange}
                              id="message"
                              placeholder="Type Your Page Title..."
                              class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                            <div className="flex flex-col gap-2 mx-3 my-2">
                              <button
                                type="button"
                                // onClick={(e, id) => cancelDetail(e, id = 1)}
                                onClick={() => setHeading9(false)}
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
                            {donate?.heading9}
                          </p>
                          <button
                            class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                            onClick={() => {
                              // setVisionDes(!visionDes),
                              setDetail({
                                heading9: donate?.heading9
                              })
                              setHeading9(!Heading9)
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
            </div></div></div>
      </Sidebar >

    </>
    //   )}

    // </>
  );
};

export default Donate;
