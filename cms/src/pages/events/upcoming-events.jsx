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
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, createEventCategory, deleteEvent, deleteEventCategory, getEventCategory, getUpcomingEvent, updateEvent, updateEventCategory } from "../../redux/action/Event/event";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import DatePicker, { registerLocale } from 'react-datepicker'
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";
import moment from 'moment'


const UpcomingEvents = () => {
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [image, setImage] = useState()
  const [Description5, setDescription5] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()
  const [image4, setImage4] = useState()
  const [description, setDescription] = useState(false);
  const [footer, setFooter] = useState(false);
  const [footer1, setFooter1] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [eventDailog, setEventDailog] = useState(false);
  const [visionDailog1, setVisionDailog1] = useState(false);
  const [image5, setImage5] = useState()
  const [eventId, setEventId] = useState("")

  const [section, setsection] = useState("events");
  const [subsection, setsubsection] = useState("upcoming");


  const { loading, Events, EventCategory, error: err, message: evtMessage, Sequence } = useSelector((state) => state.event)
  const { loading: load, description: explain, error, message } = useSelector((state) => state.description)
  // const [section, setsection]cons= useState("about");
  const [Topic, setTopic] = useState(false);
  const { loading: loadTitle, title: ttile, error: errTitle, message: msgTitle } = useSelector((state) => state.others)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [Title, setTitle] = useState({
    title1: "",
  })
  const { title1, } = Title;

  const handleUpdateSequence = async (e, id) => {
    // e.preventDefault()
    // setValue(e.target.value)
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateEventCategory(myForm, id))
    // dispatch(getDreamsPoint())
  }

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
    let value = await ttile?.is_active
    myForm.append('is_active', !value);
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
  const eventClickToOpen = () => {
    setEventDailog(!eventDailog);
  };
  const visionClickToOpen1 = () => {
    setImage()
    setImage2()
    setImage3()
    setEventCategory({
      title: "",
      description: "",
    })
    setUpcomingEvent({
      heading: "",
      subheading: "",
      date: "",
      startingTime: "",
      endingTime: "",
      address: ''
    });
    setVisionDailog1(!visionDailog1);
  };

  const visionToClose1 = () => {
    setImage()
    setImage2()
    setImage3()
    setEventCategory({
      title: "",
      description: "",
    })
    setUpcomingEvent({
      heading: "",
      subheading: "",
      date: "",
      startingTime: "",
      endingTime: "",
      address: ''
    });
    setVisionDailog1(!visionDailog1);
  };
  // cons
  const eventToClose = () => {
    setImage()
    setImage2()
    setImage3()
    setEventCategory({
      title: "",
      description: "",
    })
    setUpcomingEvent({
      heading: "",
      subheading: "",
      date: "",
      startingTime: "",
      endingTime: "",
      address: ''
    });
    setEventDailog(!eventDailog);
  };


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };


  const imageChange2 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage2(e.target.files[0]);
    }
  };

  const removeSelectedImage2 = () => {
    setImage2();
  };
  const imageChange3 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage3(e.target.files[0]);
    }
  };

  const removeSelectedImage3 = () => {
    setImage3();
  };

  const [upcomingEvent, setUpcomingEvent] = useState({
    heading: "",
    subheading: "",
    date: "",
    startingTime: "",
    endingTime: "",
    address: '',
    startTime: "",
    endTime: "",
  });

  const { heading, date, subheading, startingTime, endingTime, address, startTime, endTime } =
    upcomingEvent;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('date', date);
    myForm.append('startingTime', startingTime);
    myForm.append('endingTime', endingTime);
    myForm.append('address', address);
    myForm.append('image', image);
    myForm.append('document', image2);
    myForm.append('startTime', startTime);
    myForm.append('endTime', endTime);

    await dispatch(createEvent(myForm));
    dispatch(getUpcomingEvent())
  };
  const registerDatachange = (e) => {
    setUpcomingEvent({ ...upcomingEvent, [e.target.name]: e.target.value });

  };
  const submitUpdateHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('date', date);
    myForm.append('startingTime', startingTime);
    myForm.append('endingTime', endingTime);
    myForm.append('address', address);
    myForm.append('image', image);
    myForm.append('document', image2);
    myForm.append('startTime', startTime);
    myForm.append('endTime', endTime);

    await dispatch(updateEvent(myForm, eventId));
    dispatch(getUpcomingEvent())
  };

  const [eventCategory, setEventCategory] = useState({
    title: "",
    description: "",
  });

  const { title, desc } =
    eventCategory;
  const submitEventHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', title);
    myForm.append('description', desc);
    myForm.append('image', image3);

    await dispatch(createEventCategory(myForm));
    dispatch(getEventCategory())
  };
  const registerEventDatachange = (e) => {
    setEventCategory({ ...eventCategory, [e.target.name]: e.target.value });

  };


  const [descrip, setdescription] = useState({
    description1: "",
    description2: "",
    description3: "",
    description5: "",
  })
  const { description1, description2, description3, description5 } = descrip;

  const descriptionDataChange = (e) => {

    setdescription({ ...descrip, [e.target.name]: e.target.value });

  };

  const submitDescription = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description1', description1);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));
    setDescription(false)
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

    setFooter1(false)

  };
  const submitDescription5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description5', description5);

    await dispatch(updateDescriptionPoint(myForm, section, subsection));

    setFooter1(false)

  };
  const HandleUpdate = async (e, event) => {
    e.preventDefault()
    // setUpdateOpen(true)

    setUpcomingEvent({
      heading: event?.heading,
      subheading: event?.subheading,
      // date: event?.date,
      date: moment(event?.date).format('YYYY-MM-DD'),
      startingTime: event?.startingTime.split(" ")[0],
      endingTime: event?.endingTime.split(" ")[0],
      startTime: event?.startingTime.split(" ")[1],
      endTime: event?.endingTime.split(" ")[1],
      address: event?.address
    });
    setEventId(event?.id)
    setImage4(event?.image)
    setImage5(event?.document)
    setVisionDailog1(true)
  }

  const handleDeleteEvent = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteEvent(id))
    dispatch(getUpcomingEvent())
  }
  const handleDeleteEventcategory = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteEventCategory(id))
    dispatch(getEventCategory())
  }

  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setdescription({
        description1: ""
      })
      setDescription(false)
    }
    if (id === 2) {
      setdescription({
        description2: ""
      })
      setFooter(false)
    }
    if (id === 3) {
      setdescription({
        description2: ""
      })
      setFooter1(false)
    }
    if (id === 5) {
      setdescription({
        description5: ""
      })
      setDescription5(false)
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
    if (evtMessage) {
      toast.success(evtMessage);
      dispatch({ type: 'clearMessage' });
      setImage()
      setImage2()
      setImage3()
      setEventCategory({
        title: "",
        description: "",
      })
      setUpcomingEvent({
        heading: "",
        subheading: "",
        date: "",
        startingTime: "",
        endingTime: "",
        address: ''
      });
      setVisionDailog(false)
      setVisionDailog1(false)
      setEventDailog(false)

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


    dispatch(getUpcomingEvent())
    dispatch(getEventCategory())
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
                    <div class="flex p-2">
                      <div class="w-full my-5">
                        <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                          <input type="checkbox" name='active' value={ttile?.is_active ? ttile.is_active : true} class="sr-only peer" onClick={activeSubmit} />
                          <div class={`  w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                         ${!ttile?.is_active && ` bg-gray-200 after:left-[2px] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                          ${ttile?.is_active && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer   dark:border-gray-600   peer-checked: bg-green-600`}
                          ${!ttile && ` peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white  peer  dark:border-gray-600   peer-checked: bg-green-600`}
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
                            Heading
                          </label>
                          {description ? (
                            <form onSubmit={submitDescription} className='contents' >
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
                                    onClick={() => setDescription(description)}
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
                                {explain?.description1}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setDescription(!description)}
                                onClick={() => {
                                  setdescription({
                                    description1: explain?.description1
                                  })
                                  setDescription(!description)
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
                            Upcoming Event
                            <p className="text-xs text-red-600">*For Adding Event Page Click on Title</p>
                          </label>{" "}
                          <table class="w-4/5  my-5 border-2 border-violet-900/40">
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
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Time
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Venue
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Address
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
                              {Events && Events.map((event) => (
                                <tr key={event.id} className="border-b text-center hover:bg-blue-100">
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <Link to={`/events/${event.id}`}> {event.heading}</Link>
                                  </td>

                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {event.date}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {event.startingTime}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {event.endingTime}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {event.address}
                                  </td>

                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                                      <CiEdit className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => HandleUpdate(e, event)} />
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDeleteEvent(e, event.id)} />
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
                            Add Event
                          </button>
                        </div>

                        <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            {/* Set Title */}
                          </label>
                          {Description5 ? (
                            <form onSubmit={submitDescription5} className="contents">
                              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                                <textarea
                                  rows="2"
                                  name="description5"
                                  value={description5}
                                  onChange={descriptionDataChange}
                                  id="message"
                                  placeholder="Type Hosted Event Heading..."
                                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                                <div className="flex flex-col gap-2 mx-3 my-2">
                                  <button
                                    type="button"
                                    onClick={(e, id) => cancelDetail(e, id = 5)}
                                    // onClick={() => setDescription5(false)}
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
                                {explain?.description5 ? explain.description5 : "Some of the events we host include:"}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                                onClick={() => {
                                  // setVisionDes(!visionDes),
                                  setdescription({
                                    description5: explain?.description5
                                  })
                                  setDescription5(!Description5)
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
                            Event Category
                          </label>{" "}
                          <table class="w-4/5  my-5 border-2 border-violet-900/40">
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
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {EventCategory && EventCategory.map((event) => (
                                <tr key={event.id} className="border-b text-center hover:bg-blue-100">
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    {event.heading}
                                  </td>

                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <p className="w-72 mx-auto">
                                      {event.description}
                                    </p>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <select className="w-32 mx-auto"
                                      onChange={(e) => handleUpdateSequence(e, event.id)}>
                                      <option hidden='true' value={event.sequence} > {event.sequence}</option>
                                      {Sequence && Sequence.map((data) => (
                                        <option name="value"
                                          onChange={(e) => handleUpdateSequence(e, event.id)}
                                          value={data}>{data}</option>
                                      ))}

                                    </select>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDeleteEventcategory(e, event.id)} />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>

                          </table>{" "}
                          <button
                            className="px-4 py-2 my-auto mx-4 h-fit border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                            onClick={eventClickToOpen}
                          >
                            Hosted Event
                          </button>
                        </div>

                        {/* NewChanges */}
                        <div class="my-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Event Footer1
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
                              <p className={` w-full p-4 text-base`}>
                                {explain?.description2}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setFooter(!footer)}
                                onClick={() => {
                                  setdescription({
                                    description2: explain?.description2
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
                            Event Footer2
                          </label>
                          {footer1 ? (
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
                                    // onClick={setFooter1(false)}
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
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                              <p className={` w-full p-4 text-base`}>
                                {explain?.description3}
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                // onClick={() => setFooter(!footer)}
                                onClick={() => {
                                  setdescription({
                                    description3: explain?.description3
                                  })
                                  setFooter1(!footer1)
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
      {/* <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Event</p>}
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
                      value={heading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event Heading..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Sub Heading
                    </label>
                    <input
                      type="text"
                      name="subheading"
                      value={subheading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event subheading..."
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
                      onChange={registerDatachange}
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
                      Starting Time
                    </label>
                    <input
                      type="text"
                      name="startingTime"
                      value={startingTime}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="10:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <select
                      required
                      onChange={registerDatachange} name="startTime"
                      id="problem_cat"
                      className="w-2/5  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      <option hidden="true" value="">           select</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Ending  Time
                    </label>
                    <input
                      type="text"
                      value={endingTime}
                      onChange={registerDatachange}
                      name="endingTime"
                      id="email"
                      placeholder="2:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <select
                      required
                      onChange={registerDatachange} name="endTime"
                      id="problem_cat"
                      className="w-2/5 text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      <option hidden="true" value="">select </option>
                      <option name="endTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="endTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Venue
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="Event location..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Banner Image
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
      <Dialog open={eventDailog} onClose={() => eventToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Hosted Event</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitEventHandler}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={registerEventDatachange}
                      id="name"
                      placeholder="Title..."
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
                      rows="2"
                      name="desc"
                      value={desc}
                      onChange={registerEventDatachange}
                      id="message"
                      placeholder="Type your message"
                      class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Image
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {image3 ? (
                        <div className="w-full">
                          <img
                            src={URL.createObjectURL(image3)}
                            alt=""
                            accept="image/*"
                            // name='image'
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedImage3}
                          >
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          type="file"
                          accept="image/*"
                          // name="image"
                          id=""
                          value={image3}
                          onChange={imageChange3}
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
            onClick={eventToClose}
            color="primary"
            className="font-bold text-3xl"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Event</p>}
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
                      value={heading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event Heading..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Sub Heading
                    </label>
                    <input
                      type="text"
                      name="subheading"
                      value={subheading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event subheading..."
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
                      onChange={registerDatachange}
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
                      Starting Time
                    </label>
                    <input
                      type="text"
                      name="startingTime"
                      value={startingTime}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="10:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <select
                      required
                      onChange={registerDatachange} name="startTime"
                      id="problem_cat"
                      className="w-2/5  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      <option hidden="true" value="">select</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Ending  Time
                    </label>
                    <input
                      type="text"
                      value={endingTime}
                      onChange={registerDatachange}
                      name="endingTime"
                      id="email"
                      placeholder="2:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <select
                      required
                      onChange={registerDatachange} name="endTime"
                      id="problem_cat"
                      className="w-2/5 text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      <option hidden="true" value="">select </option>
                      <option name="endTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="endTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Venue
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="Event location..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Banner Image
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
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          // src={`${process.env.REACT_APP_SERVER}/${image4}`}
                          id=""
                          value={image}
                          onChange={imageChange}
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
                      Document
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {image2 ? (
                        <div className="w-full">
                          <img
                            // accept=""
                            src={URL.createObjectURL(image2)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedImage2}
                          >
                            Remove Document
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          // accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={image2}
                          onChange={imageChange2}
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
      <Dialog open={visionDailog1} onClose={() => visionToClose1}>
        <DialogTitle>
          {<p className="text-xl font-bold">Update Event</p>}
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
                      Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={heading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event Heading..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Sub Heading
                    </label>
                    <input
                      type="text"
                      name="subheading"
                      value={subheading}
                      onChange={registerDatachange}
                      id="name"
                      placeholder="Event subheading..."
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
                      onChange={registerDatachange}
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
                      Starting Time
                    </label>
                    <input
                      type="text"
                      name="startingTime"
                      // value={startingTime.split(" ")[0]}
                      value={startingTime}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="10:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <select
                      // required
                      onChange={registerDatachange} name="startTime"
                      id="problem_cat"
                      className="w-2/5  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      {/* <option hidden="true" value="">{startingTime.split(" ")[1]}</option> */}
                      <option hidden="true" value="">{startTime}</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="startTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Ending  Time
                    </label>
                    <input
                      type="text"
                      value={endingTime}
                      onChange={registerDatachange}
                      name="endingTime"
                      id="email"
                      placeholder="2:00 "
                      class="w-2/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <select
                      // required
                      onChange={registerDatachange} name="endTime"
                      id="problem_cat"
                      className="w-2/5 text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                    >
                      <option hidden="true" value="">{endTime} </option>
                      <option name="endTime" onChange={registerDatachange}
                        value="AM">AM</option>
                      <option name="endTime" onChange={registerDatachange}
                        value="PM">PM</option>

                    </select>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Venue
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={registerDatachange}
                      id="email"
                      placeholder="Event location..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Banner Image
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
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        (image4 ? (<><img src={`${process.env.REACT_APP_SERVER}/${image4}`} /> <input
                          type="file"
                          style={{
                            color: "transparent",
                            marginLeft: "90px"
                          }}
                          name="image"
                          accept="image/*"
                          value={image}
                          onChange={imageChange}
                          className="text-base z-0 ml-auto"
                        /></>) : (
                          <input
                            accept="image/*"
                            type="file"
                            // src={`${process.env.REACT_APP_SERVER}/${image4}`}
                            value={image}
                            onChange={imageChange}
                            className="text-base z-0 ml-auto"
                          />))
                      )}
                    </div>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Document
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {image2 ? (
                        <div className="w-full">
                          <img
                            // accept=""
                            src={URL.createObjectURL(image2)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedImage2}
                          >
                            Remove Document
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          // accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={image2}
                          onChange={imageChange2}
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
            onClick={visionToClose1}
            color="primary"
            className="font-bold text-3xl"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={eventDailog} onClose={() => eventToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Hosted Event</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitEventHandler}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="name"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={registerEventDatachange}
                      id="name"
                      placeholder="Title..."
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
                      rows="2"
                      name="desc"
                      value={desc}
                      onChange={registerEventDatachange}
                      id="message"
                      placeholder="Type your message"
                      class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Image
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {image3 ? (
                        <div className="w-full">
                          <img
                            src={URL.createObjectURL(image3)}
                            alt=""
                            accept="image/*"
                            // name='image'
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedImage3}
                          >
                            remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          type="file"
                          accept="image/*"
                          // name="image"
                          id=""
                          value={image3}
                          onChange={imageChange3}
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
            onClick={eventToClose}
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

export default UpcomingEvents;








