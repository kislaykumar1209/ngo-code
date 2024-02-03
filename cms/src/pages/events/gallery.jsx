import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
import add from "../../assets/add.png";
// import walpaper from "../assets/4.jpg";
import { AiFillDelete } from "react-icons/ai";
import { createAlbumImages, deleteAlbumImage, getAlbumImages } from "../../redux/action/Event/event";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import Sidebar from "../../sidebar/sidebar";

const Gallery = () => {
  const { id } = useParams()
  // console.log(id)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [image, setImage] = useState();
  const [headline, setHeadline] = useState();
  const [openTab, setOpenTab] = useState(3);
  const [profile, profileOpen] = useState(false);
  const { loading, Images, error: err, message: evtMessage } = useSelector((state) => state.event)
  const { loading: load, description, error, message } = useSelector((state) => state.description)
  const { isAuthenticated } = useSelector((state) => state.auth)

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    // const myForm = new FormData();
    // myForm.append('heading', headline);


    dispatch(createAlbumImages(id, image, headline));

  };

  const handleDelete = async (e, Id) => {
    e.preventDefault()
    await dispatch(deleteAlbumImage(Id))
    // dispatch

  }


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }

    if (evtMessage) {
      toast.success(evtMessage);
      dispatch({ type: 'clearMessage' });
      setImage()
      setHeadline("")
      dispatch(getAlbumImages(id))
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    dispatch(getAlbumImages(id))

  }, [dispatch, error, message, err, evtMessage, isAuthenticated]);

  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (
    <>
      <Sidebar>
        <Navbar title="Events" />
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
                  <div className="px-4 flex-auto"></div>
                  <div className="flex h-full scroll-smooth">
                    <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <form onSubmit={submitHandler}>
                        <div className="w-11/12 sm:w-full h-56 rounded-lg border-4 border-gray-800/30 flex items-center justify-center hover:bg-slate-300/20 hover:border-gray-800 hover:translate-x-2 hover:translate-y-2 transition-all duration-300">

                          {image ? (
                            <div className="w-full h-full">
                              <img
                                accept="image/*"
                                src={URL.createObjectURL(image)}
                                alt=""
                                className="object-fill z-40 h-full"
                              />
                              {/* <button
                                className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                onClick={removeSelectedImage}
                              >
                                Remove image
                              </button>{" "} */}
                            </div>
                          ) : (
                            <>
                              <label htmlFor="data-upload">
                                <img src={add} className="" for="data-upload" alt="" />
                              </label>
                              <input
                                type="file"
                                name="image"
                                accept="image/*"
                                value={image}
                                onChange={imageChange}
                                id="data-upload"
                                // accept="image/png, image/gif, image/jpeg"
                                className="hidden"
                              />
                            </>
                          )}
                        </div>
                        <div className="width-auto border-black ">
                          <input className=" mt-2 ml-2 border-black w-11/12 text-base border border-width-2px rounded-md" type="text" name="headline" value={headline} onChange={(e) => setHeadline(e.target.value)}></input>
                        </div>
                        <button disabled={loading} type="submit" id='data-submit' className=" flex justify-center item-center w-full bg-red-700 rounded-lg text-white text-lg font-roboto my-2">Submit</button>
                      </form>
                      {/* Make this widget continously and image automaticlay come in sequence */}
                      {Images && Images.map((images) => (
                        <div key={images.id} className=" w-11/12 sm:w-full h-full rounded-lg relative border-2 border-gray-800/30 flex items-center justify-center overflow-hidden">
                          <AiFillDelete className=" absolute top-0 right-0 z-30 bg-white rounded-full w-7" onClick={(e) => handleDelete(e, images.id)} />
                          <img src={`${process.env.REACT_APP_SERVER}/${images.image}`} className="object-cover w-full h-56 mb-16" alt="" />

                          <p className="flex items-center justify-center  absolute bottom-0  w-full z-50 rounded-full w-7  text-base"> {images?.heading}</p>

                        </div>
                        // <div key={images.id} className=" w-11/12 sm:w-full h-full rounded-lg relative border-2 border-gray-800/30 flex items-center justify-center overflow-hidden">
                        //   <AiFillDelete className=" absolute top-0 right-0 z-30 bg-white rounded-full w-7" onClick={(e) => handleDelete(e, images.id)} />
                        //   <img src={`${process.env.REACT_APP_SERVER}/${images.image}`} className="object-cover w-full h-56" alt="" />
                        //   {/* {images.image} */}
                        // </div>
                      ))}

                    </div>
                  </div>{" "}
                </div></div></div></div></div>
      </Sidebar>
      {/* Dailog Box */}
    </>
    //   )}

    // </>
  );
};

export default Gallery;
