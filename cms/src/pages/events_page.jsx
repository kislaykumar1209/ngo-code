import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../assets/user.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import BannerEvents from "./events-page/banner-events";
import ParagraphEvents from "./events-page/paragraph-events";
import LiveEvents from "./events-page/live-events";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getEventDescription } from "../redux/action/Event/event";
import SectionEvent from "./events-page/section-event";
import SectionEventPart from "./events-page/section-event-part";
import Navbar from "./navbar";
import Section from "./events-page/section";
import Sidebar from "../sidebar/sidebar";
import NewSection from "./events-page/NewSection";

const EventsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  // console.log(openTab)
  // const navigate = useNavigate()

  const { loading, eventDescription, error, message } = useSelector((state) => state.event)
  const { isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });

    }
    if (!isAuthenticated) {
      navigate('/login')
    }

    dispatch(getEventDescription(id));
  }, [dispatch, message, error, isAuthenticated]);

  return (
    <>
      <Sidebar>
        <Navbar title="Event Page " />
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
                      <p className="px-5 py-3">Banner</p>
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
                      <p className="px-5 py-3">Section</p>
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
                      <p className="px-5 py-3">Section 2</p>
                    </a>
                  </li>


                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                        (openTab === 5
                          ? "text-white bg-blue-800"
                          : "text-black bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                      }}
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                      <p className="px-5 py-3">Section 3</p>
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
                      <p className="px-5 py-3">Donate us </p>
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
                      href="#link4"
                      role="tablist"
                    >
                      <p className="px-5 py-3">Add Link </p>
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                  <div className="px-4 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <BannerEvents eventDescription={eventDescription} id={id} />
                        {/* <UpcomingEvents /> */}
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <LiveEvents eventDescription={eventDescription} id={id} />
                      </div>
                      <div
                        className={openTab === 5 ? "block" : "hidden"}
                        id="link5"
                      >
                        <Section eventDescription={eventDescription} id={id} />
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <SectionEvent eventDescription={eventDescription} id={id} />
                      </div>
                      <div
                        className={openTab === 4 ? "block" : "hidden"}
                        id="link4"
                      >
                        <ParagraphEvents eventDescription={eventDescription} id={id} />
                      </div>
                      <div
                        className={openTab === 6 ? "block" : "hidden"}
                        id="link6"
                      >
                        <NewSection eventDescription={eventDescription} id={id} />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
      {/* Dailog Box */}
    </>
  );
};

export default EventsPage;
