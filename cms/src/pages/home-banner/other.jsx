import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { createLionBanner, getForm, getLionBannerInfo } from "../../redux/action/others/others";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Spinner from "../spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Sidebar from "../../sidebar/sidebar";

const Other = () => {

  const dispatch = useDispatch()

  const [openTab, setOpenTab] = useState(2);
  const navigate = useNavigate()

  const [visionDailog, setVisionDailog] = useState(false);

  const { loading, lionbanner, error, message } = useSelector((state) => state.others)
  const { isAuthenticated } = useSelector((state) => state.auth)

  const [document, setDocument] = useState()
  const [image, setImage] = useState()

  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };


  const documentChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument(e.target.files[0]);
    }
  };

  const removeSelectedDocument = () => {
    setDocument();
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };


  const [bannerBody, setBannerBody] = useState({
    subheading: "",
    heading: "",
  });

  const { heading, subheading } =
    bannerBody;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('document', document);
    myForm.append('image', image);

    await dispatch(createLionBanner(myForm));

  };
  const registerDataChange = (e) => {
    setBannerBody({ ...bannerBody, [e.target.name]: e.target.value });

  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      dispatch(getLionBannerInfo())
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    dispatch(getLionBannerInfo())
    dispatch(getForm())
  }, [dispatch, error, message, isAuthenticated]);

  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <>
      <Sidebar>
        <Navbar title="Banner" />
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
                  <div className="tab-content tab-space"></div>
                  <div class="flex p-2">
                    <div class="w-full my-5">
                      <div class="flex p-2">
                        <div class="w-full">
                          <form onSubmit={submitHandler}>

                            <div class="mb-5 flex flex-col sm:flex-row">
                              <label
                                for="email"
                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                              >
                                Heading (Big)
                              </label>
                              <input
                                type="text"
                                name="heading"
                                value={heading}
                                onChange={registerDataChange}
                                id="email"
                                placeholder={`${lionbanner?.heading ? lionbanner.heading : "Type heading here..."}`}
                                class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>
                            <div class="mb-5 flex flex-col sm:flex-row">
                              <label
                                for="email"
                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                              >
                                Heading (Small)
                              </label>
                              <input
                                type="text"
                                name="subheading"
                                value={subheading}
                                onChange={registerDataChange}
                                id="email"
                                placeholder={`${lionbanner?.subheading ? lionbanner.subheading : "Type subheading here..."}`}
                                class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              />
                            </div>


                            {/* <div class="mb-5 flex flex-col sm:flex-row">
                      <label
                        for="email"
                        class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                      >
                        Banner Image
                      </label>
                      <div className="w-3/5 min-h-44 p-4 overflow-clip  border-2 border-violet-900/40 flex flex-col justify-center items-center">
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
                              remove image
                            </button>{" "}
                          </div>
                        ) : (
                          <input
                            type="file"
                            name=""
                            id=""
                            value={image}
                            onChange={imageChange}
                            className="text-base z-0 ml-auto"
                          />
                        )}
                      </div>
                    </div> */}
                            <div class="mb-5 flex flex-col sm:flex-row">
                              <label
                                for="name"
                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                              >
                                Banner Image
                              </label>
                              <div className="w-3/5 min-h-44 p-4 overflow-clip  border-2 border-violet-900/40 flex flex-col justify-center items-center">
                                {image ? (
                                  <form onSubmit={submitHandler} className='contents'>
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
                                        remove Image
                                      </button>{" "}
                                      {/* <button
                                type="submit"
                                // onClick={() => setFooter(footer)}
                                class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Updates
                              </button> */}
                                    </div>
                                  </form>
                                ) : (
                                  (lionbanner?.document ? (<><img src={`${process.env.REACT_APP_SERVER}/${lionbanner?.document}`} /> <input
                                    type="file"
                                    style={{
                                      color: "transparent",
                                      marginLeft: "200px"
                                    }}
                                    name="image"
                                    accept="image/*"
                                    id=""
                                    onChange={imageChange}
                                    className="text-base z-0  ml-200 mt-3"
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
                            <div class="mb-5 flex flex-col sm:flex-row">
                              <label
                                for="name"
                                class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                              >
                                Membership Form
                              </label>
                              <div className="w-3/5 min-h-44 p-4 overflow-clip  border-2 border-violet-900/40 flex flex-col justify-center items-center">
                                {document ? (
                                  <form onSubmit={submitHandler} className='contents'>
                                    <div className="w-full">
                                      <img
                                        src={URL.createObjectURL(document)}
                                        alt=""
                                        className="object-fill z-40"
                                      />
                                      <button
                                        className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                        onClick={removeSelectedDocument}
                                      >
                                        remove Document
                                      </button>{" "}
                                      {/* <button
                                type="submit"
                                // onClick={() => setFooter(footer)}
                                class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Updates
                              </button> */}
                                    </div>
                                  </form>
                                ) : (
                                  <input
                                    type="file"
                                    name=""
                                    id=""
                                    value={document}
                                    onChange={documentChange}
                                    className="text-base z-0 mx-auto"
                                  />

                                )}
                              </div>
                            </div>

                            <div className="flex justify-center items-center my-7">
                              <button
                                disabled={loading}

                                type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                {/* {loading ? <Spinner /> : null}  Submit */}
                                Submit
                              </button>
                              {/* disabled={isSubmitting}
                   style={{ float: 'right' }}>
                   {isSubmitting ? <Spinner animation="border" size="sm" /> : null} Submit */}
                            </div>
                          </form>
                        </div>
                      </div>{" "}


                    </div>
                  </div>
                </div></div></div>
          </div></div>
      </Sidebar>
      {/* Dailog Box */}
      {/* <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Vision</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Description
                    </label>
                    <textarea
                      rows="2"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>

                  <div className="flex justify-center items-center my-7">
                    <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
      </Dialog> */}
    </>
    //   )}

    // </>
  );
};

export default Other;
