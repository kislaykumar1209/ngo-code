import React, { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
import { useDispatch, useSelector } from "react-redux";
import { getClubInfo, getLogoInfo, updateClubInfo, updateLogo } from "../../redux/action/club/clubInfo";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import WizardPage from "../../wizzard/main-page";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";


const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);



  const { info, loading, logo, error, message } = useSelector((state) => state.club)
  const { isAuthenticated, loading: load, user } = useSelector((state) => state.auth)
  const [clubLogo, setClubLogo] = useState()
  // const [clubLogo, setClubLogo] = useState(logo?.image)
  const [clubTitle, setClubTitle] = useState(logo?.title)

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      setClubLogo(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setClubLogo();
  };

  // console.log(logo?.image)

  const [clubInfo, setClubInfo] = useState({
    number: "",
    facebook: "",
    twitter: "",
    instagram: "",
    email: "",
    clublocation: "",
    address: "",
    googlemapUrl: ""
  });

  const { number, facebook, instagram, twitter, email, clublocation, address, googlemapUrl } =
    clubInfo;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('number', number);
    myForm.append('facebook', facebook);
    myForm.append('instagram', instagram);
    myForm.append('twitter', twitter);
    myForm.append('email', email);
    myForm.append('clublocation', clublocation);
    myForm.append('address', address);
    myForm.append('googlemapUrl', googlemapUrl);

    dispatch(updateClubInfo(myForm));

  };
  const registerDataChange = (e) => {
    setClubInfo({ ...clubInfo, [e.target.name]: e.target.value });
  };

  const logoSubmit = (e) => {
    e.preventDefault()
    dispatch(updateLogo(clubTitle, clubLogo));
  }




  useEffect(() => {
    if (error) {
      toast.error(error);
      console.log(error, "dash")
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      dispatch(getClubInfo())
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    // console.log(isAuthenticated, user)
    dispatch(getClubInfo());
    dispatch(getLogoInfo())
  }, [dispatch, error, message, isAuthenticated, user]);




  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          {/* {!logo?.image ? */}

          <>
            {/* <nav className="sticky top-0 z-30">
            <div className="flex items-center top-0 justify-between py-2 sticky bg-[rgb(255,255,255)] shadow-lg shadow-slate-700/50">
              <h1 className=" md:text-3xl font-semibold mx-10">General Settings</h1>{" "}
              <div className="flex relative my-auto ">
                <img
                  src={user}
                  className="mx-3 w-8 h-8 my-auto sm:w-16 sm:h-16 rounded-full hover:cursor-pointer sm:block"
                  alt=""
                  onClick={() => profileOpen(!profile)}
                />
                <div className="flex flex-col my-auto mr-10">
                  <p className="text-sm md:text-lg">Mayank Jha</p>
                  <p className="text-xs md:text-base mx-auto">Manager</p>
                </div>
              </div>
            </div>
          </nav> */}

            {/* Profile Cart */}
            {/* <div
            className={`${profile ? "opacity-100 block" : "opacity-0 hidden"
              } transition-all duration-700 min-w-[16px] min-h-[16px] max-w-[calc(100%-32px)] max-h-[calc(100%-32px)] rounded-lg bg-white shadow-xl shadow-blue-600/40 border-2 border-gray-900/20 right-10 translate-y-2 absolute z-50`}
          >
            <div className="flex flex-col p-5 border-b-2 border-b-slate-500/50 justify-center items-center">
              <img
                src={user}
                className="mx-3 hidden w-16 h-16 rounded-full hover:cursor-pointer sm:block"
                alt=""
              />
              <h2 className="text-lg">Mayank Jha</h2>
              <h3 className="text-base font-normal">mayankjha014@gmail.com</h3>
            </div>
            <div className="flex flex-col justify-center my-2">
              <div className="hover:bg-slate-200/50 flex h-8 items-center">
                <FaRegUser className="mx-4 my-[0.1rem] w-4 text-gray-600" />
                <p className="text-base text-gray-600">Profile</p>
              </div>
              <div className="hover:bg-slate-200/50 flex rounded-lg h-8 items-center">
                <BiLogOut className="mx-4 my-[0.1rem] text-gray-800 w-4" />
                <p className="text-base text-gray-600">Logout</p>
              </div>
            </div>
          </div> */}
            <Sidebar >
              <Navbar title="Club Info" />
              <div className="flex h-full scroll-smooth">
                <div className="w-full h-full">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <ul
                        className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-4/5"
                        role="tablist"
                      >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                            <p>Club Details</p>
                          </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                            <p>Club Information</p>
                          </a>
                        </li>
                      </ul>
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <div class="flex p-2">
                                <div class="w-full">
                                  <form onSubmit={submitHandler}>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="name"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Contact Number
                                      </label>
                                      <input
                                        type="text"
                                        name="number"
                                        // value={number}
                                        value={number}
                                        onChange={registerDataChange}
                                        id="number"
                                        placeholder={info?.data?.number ? `${info.data.number}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Email Address
                                      </label>
                                      <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        // value={email}
                                        onChange={registerDataChange}
                                        id="email"
                                        placeholder={info?.data?.email ? `${info.data.email}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    {/* <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Club Location
                                      </label>
                                      <input
                                        type='text'
                                        name="clublocation"
                                        value={clublocation}
                                        onChange={registerDataChange}
                                        placeholder={info?.data?.clublocation ? `${info.data.clublocation}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div> */}
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Complete Address
                                      </label>
                                      <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={registerDataChange}
                                        placeholder={info?.data?.address ? `${info.data.address}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="message"
                                        class="mx-3 my-auto block text-base font-medium sm:whitespace-nowrap text-[#07074D] w-32"
                                      >
                                        Google Map URL
                                      </label>
                                      <input
                                        name="googlemapUrl"
                                        value={googlemapUrl}
                                        onChange={registerDataChange}
                                        // id="message"
                                        placeholder={info?.data?.googlemapUrl ? `${info.data.googlemapUrl}` : ""}
                                        class="w-4/5 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <h2 className="mx-5 my-10 font-bold text-lg">
                                      Social Media
                                    </h2>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Facebook
                                      </label>
                                      <input
                                        type="text"
                                        name="facebook"
                                        value={facebook}
                                        onChange={registerDataChange}
                                        placeholder={info?.data?.facebook ? `${info.data.facebook}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Twitter
                                      </label>
                                      <input
                                        name="twitter"
                                        value={twitter}
                                        onChange={registerDataChange}
                                        // id="email"
                                        placeholder={info?.data?.twitter ? `${info.data.twitter}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Instagram
                                      </label>
                                      <input
                                        name="instagram"
                                        value={instagram}
                                        onChange={registerDataChange}
                                        placeholder={info?.data?.instagram ? `${info.data.instagram}` : ""}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div className="flex justify-center items-center my-7">
                                      <button disabled={loading}
                                        type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div
                              className={openTab === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              <div class="flex p-2">
                                <div class="w-full">
                                  <form onSubmit={logoSubmit}>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="name"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Club Name
                                      </label>
                                      <input
                                        type="text"
                                        name="title"

                                        value={clubTitle}
                                        onChange={(e) => setClubTitle(e.target.value)}
                                        id="name"
                                        placeholder={logo?.title ? `${logo.title}` : "Club Name..."}
                                        class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                      <label
                                        for="email"
                                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                      >
                                        Club Logo
                                      </label>
                                      <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                                        {clubLogo ? (
                                          <div className="w-full">
                                            <img
                                              src={URL.createObjectURL(clubLogo)}
                                              // src={clubLogo}
                                              accept="image/*"
                                              alt=""
                                              name="logo"
                                              value={clubLogo}
                                              onChange={(e) => setClubLogo(e.target.files[0])}

                                              className="object-fill z-40"
                                            />
                                            <button
                                              className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                              onClick={removeSelectedImage}
                                            >
                                              Remove
                                            </button>{" "}
                                          </div>
                                        ) : (
                                          (logo?.image ? (<><img src={`${process.env.REACT_APP_SERVER}/${logo?.image}`} /> <input
                                            type="file"
                                            style={{
                                              color: "transparent"
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

                                    <div className="flex justify-center items-center my-7">

                                      <button disabled={loading} type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Sidebar>
          </>
          {/* : <WizardPage /> */}
          {/* } */}
        </>

      )
      }
    </>
  );
};

export default Dashboard;
