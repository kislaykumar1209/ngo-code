import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import logos from "../assets/logo-apiero1.png";
import settings from "../assets/settings.png";
import about from "../assets/about-icon.png";
import homeIcon from "../assets/home-icon.png";
import business from "../assets/business.png";
import photo from "../assets/photo.png";
import testimonial from "../assets/testimonial.png";
import event from "../assets/event-icon.png";
import whatwedo from "../assets/whatwe-icon.png";
import resource from "../assets/resource-icon.png";
import otherIcon from "../assets/other-icon.png";
import banner from "../assets/image-icon.png";
import { NavLink } from "react-router-dom";
import { getLogoInfo } from "../redux/action/club/clubInfo";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { RxHamburgerMenu } from "react-icons/rx";



const Sidebar = ({ children }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true);
  const { loading, logo, error, message } = useSelector((state) => state.club)

  const { loading: loads, isAuthenticated, user } = useSelector((state) => state.auth)
  const Menus = [
    { title: "Club Information", src: settings, path: "/" },
    { title: "Banners", src: banner, path: "/home-banner" },
    { title: "Home Page", src: homeIcon, path: "/home-page-info/about" },
    { title: "About", src: about, path: "/about" },

    { title: "What we do", src: whatwedo, path: "/whatwedo" },
    { title: "Events", src: event, path: "/events" },
    // { title: "Event Page", src: eventstore, path: "/events/page" },
    { title: "Resources", src: resource, path: "/resources" },
    { title: "Sponsor", src: business, path: "/sponsor" },
    { title: "Other", src: otherIcon, path: "/others/partnerwithus" },
  ];

  const navigate = useNavigate();

  function home() {
    navigate("/");
  }


  useEffect(() => {
    if (error) {
      // toast.error(error);
      // console.log(error, "side")
      dispatch({ type: 'clearError' });
    }
    if (!isAuthenticated) {
      navigate('/login')
    }

    dispatch(getLogoInfo())
  }, [dispatch, error, message]);

  return (
    <>
      <div className="flex w-full  z-40 h-screen">
        {/* <div
          className={`${open ? "w-72" : "w-20"
            } duration-500 h-screen relative p-5 z-50 pt-8 bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-sm shadow-xl shadow-blue-600  overflow-scroll scrollbar-hide`}
        > */}
        <div
          className={`${open ? "w-72" : "w-20"
            }  duration-500 h-screen relative p-5 z-50 pt-8 bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-sm shadow-xl shadow-blue-600   overflow-scroll scrollbar-hide `}
        >
          <BiLeftArrowAlt
            className={`absolute border-2 z-50 cursor-pointer  border-slate-100 -right-2  rounded-full top-9 bg-teal-50 ${!open && "rotate-180"
              }`}
            size="1.5rem"
            src={arrow}
            onClick={() => setOpen(!open)}
          />
          <div className=" flex gap-x-4 items-center" onClick={home}>
            {/* <img
              // src={logo}
              src={logo?.image ? `${process.env.REACT_APP_SERVER}/${logo.image}` : logos}
              alt=""
              className={`cursor-pointer duration-500 w-20 ${!open && "rotate-[360deg]"
                }`}
            /> */}
            <h1
              className={`text-white cursor-pointer font-bold mx-auto origin-left text-2xl duration-500 ${!open && "scale-75"
                }`}
            >
              {/* {logo?.title ? logo.title : "Lions Club"} */}
              CMS
            </h1>
          </div>
          <ul className="pt-8">
            {Menus.map((menu, index) => (
              <NavLink key={index} to={menu.path} className="contents" activeClassName='active'>
                <li
                  className={`text-white/90 flex items-center  text-sm gap-x-4 cursor-pointer hover:bg-neutral-100/30 rounded-md p-1 my-3 ${open && ""
                    }   ${menu.gap ? "mt-5" : "mt-2"}  `}
                >
                  <img src={menu.src} alt="" className="w-9" />
                  <span
                    className={`${!open && "hidden"
                      } origin-left duration-500 text-[1.05rem] font-semibold mx-6`}
                  >
                    {menu.title}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="text-2xl font-semibold flex-1 min-h-full  overflow-y-scroll scroll-smooth bg-[rgb(245,247,250)]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
