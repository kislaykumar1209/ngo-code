import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { createBanner, deleteBanner, getAllBannerInfo, getBannerInfo, getTitle, updateBanner } from "../../redux/action/others/others";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [image, setImage] = useState()
  const [Id, setId] = useState("");
  const [sect, setsection] = useState("whatwedo");
  const [subsect, setsubsection] = useState("overview");

  const { loading, Allbanner, error: err, message: othMessage, allCategory } = useSelector((state) => state.others)
  const { loading: load, description, error, message } = useSelector((state) => state.description)
  const { isAuthenticated, loading: loads } = useSelector((state) => state.auth)

  const handleClickToOpen = () => {
    setOpen(!open);
  };

  const handleToClose = () => {
    setOpen(!open);
  };
  const handleUpdateToClose = () => {
    setImage()
    setBannerBody({
      heading: "",
      subheading: "",
      section: "",
      subsection: ""
    })
    setUpdateOpen(!updateOpen);
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
    section: "",
    subsection: "",
  });

  const { heading, subheading, section, subsection } =
    bannerBody;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', image);

    await dispatch(createBanner(myForm, section, subsection));

  };
  const submitUpdateHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', image);

    await dispatch(updateBanner(myForm, section, subsection, Id));

  };
  const registerDataChange = (e) => {
    setBannerBody({ ...bannerBody, [e.target.name]: e.target.value });

  };

  const handleDelete = async (e, id, sect, subsect) => {
    e.preventDefault()
    await dispatch(deleteBanner(id, sect, subsect))
    dispatch(getAllBannerInfo())

  }
  const HandleUpdate = async (e, id) => {
    e.preventDefault()
    await setId(id?.id)


    setBannerBody({
      heading: id?.heading,
      subheading: id?.subheading,
      section: id?.section,
      subsection: id?.subsection,
      image: id?.image
    });
    setUpdateOpen(true)

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

    if (othMessage) {
      toast.success(othMessage);
      dispatch({ type: 'clearMessage' });
      setImage()
      setBannerBody({
        heading: "",
        subheading: "",
        section: "",
        subsection: ""
      })
      setUpdateOpen(false)
      setOpen(false);
      dispatch(getAllBannerInfo())
    }
    if (!isAuthenticated) {
      // navigate('/login')
      console.log("banner logout")
      navigate('/')
    }
    dispatch(getTitle())
    dispatch(getAllBannerInfo());
    dispatch(getDescriptionPoint(sect, subsect))
  }, [dispatch, error, message, err, othMessage, isAuthenticated]);


  return (
    <>
      {loads ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-end items-center my-4  mx-16  ">
            <button
              className="hover:shadow-form rounded-md bg-[#2a2938] py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={handleClickToOpen}
            >
              Add New Banner
            </button>
          </div>
          <div class="flex p-2">
            <div class="w-full">
              <form>
                <div className="flex flex-col my-1 mx-5">
                  <div className="">
                    <div className="p-1.5 w-full inline-block align-middle">
                      <div className="overflow-auto border rounded-lg">
                        <table class="min-w-full">
                          <thead class="border-b">
                            <tr className="bg-slate-400">

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
                                Page
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                              >
                                SubPage
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
                            {Allbanner && Allbanner.map((banners) => (
                              (banners.section !== 'home' &&
                                <tr key={banners.id} className="border-b text-center hover:bg-blue-100">
                                  {/* <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                <p className="w-72 mx-auto">
                                  Tailwind CSS makes it quicker to write and
                                  maintain the code of your application. By using
                                  this utility-first framework, you don't have to
                                  write custom CSS to style your application.
                                </p>
                              </td> */}
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <img
                                      // src={walpaper}
                                      src={`${process.env.REACT_APP_SERVER}/${banners.image}`}
                                      alt=""
                                      className="w-56 h-24 object-fill mx-auto"
                                    />{" "}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {banners.section}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {banners.subsection}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      <CiEdit className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => HandleUpdate(e, banners)} />
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, banners.id, sect, subsect)} />
                                    </div>
                                  </td>
                                </tr>
                              )
                            ))}
                          </tbody>
                        </table>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Dailog Box */}
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>
              {<p className="text-xl font-bold">Add New Banner</p>}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div class="flex p-2">
                  <div class="w-full">
                    <form onSubmit={submitHandler}>

                      <div class="mb-5 flex flex-col sm:flex-row">
                        <label
                          for="email"
                          class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                        >
                          Headline
                        </label>
                        <input
                          type="text"
                          name="heading"
                          value={heading}
                          onChange={registerDataChange}
                          id="email"
                          placeholder="write your banner heading here..."
                          class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      {/* <div class="mb-5 flex flex-col sm:flex-row">
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
                      placeholder="write your banner subheading here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div> */}
                      <div class="mb-5 flex flex-col sm:flex-row">
                        <label
                          for="email"
                          class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                        >
                          Page
                        </label>
                        <select
                          onChange={registerDataChange} name="section"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Section--</option>

                          <option name="section" onChange={registerDataChange}
                            value="about">About</option>
                          <option name="section" onChange={registerDataChange}
                            value="whatwedo"> Whatwedo</option>
                          <option name="section" onChange={registerDataChange}
                            value="events">Events</option>
                          <option name="section" onChange={registerDataChange}
                            value="resource">Resources</option>
                          <option name="section" onChange={registerDataChange}
                            value="sponser">Sponsers</option>

                        </select>

                      </div>
                      <div class="mb-5 flex flex-col sm:flex-row">
                        {section &&
                          <label
                            for="message"
                            className="mx-3 my-auto block text-base font-medium sm:whitespace-nowrap text-[#07074D] w-32"
                          >
                            Subpage
                          </label>
                        }

                        {section === `about` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Subsection--</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="mission">Goal & Mission</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="team">our-Team</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="testimonial">Testimonials</option>

                        </select>}
                        {section === `whatwedo` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Subsection--</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          {allCategory && allCategory.map((menu) => (
                            <option name="subsection" onChange={registerDataChange}
                              value={`${menu.category}`}>{menu.category}</option>
                          ))}


                        </select>}

                        {section === `events` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Subsection--</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="upcoming">Events</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="photogallery">Photo Gallery</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="belion">Come Be Lion</option>

                        </select>}

                        {section === `resource` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Subsection--</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="operationalresource">Operational Resources</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="collaterals">Collaterals</option>

                        </select>}

                        {section === `sponser` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">--select Subsection--</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="globalsponser">Global Sponser</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="local">Local Sponser</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="partnerwithus">Partner With Us</option>

                        </select>}

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
                            <div>
                              <input
                                accept="image/*"
                                type="file"
                                name=""
                                id=""
                                value={image}
                                onChange={imageChange}
                                className="text-base z-0 ml-auto"
                              />
                              <p className="text-sm text-red-600">Image width 600 x 500 px is preferable</p> </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-center items-center my-7">
                        <button
                          disabled={loading}
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
                onClick={handleToClose}
                color="primary"
                className="font-bold text-3xl"
              // autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={updateOpen} onClose={handleUpdateToClose}>
            <DialogTitle>
              {<p className="text-xl font-bold">Update Banner</p>}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div class="flex p-2">
                  <div class="w-full">
                    <form onSubmit={submitUpdateHandler}>

                      <div class="mb-5 flex flex-col sm:flex-row">
                        <label
                          for="email"
                          class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                        >
                          Headline
                        </label>
                        <input
                          type="text"
                          name="heading"
                          value={heading}
                          onChange={registerDataChange}
                          id="email"
                          placeholder="write your banner heading here..."
                          class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      {/* <div class="mb-5 flex flex-col sm:flex-row">
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
                      placeholder="write your banner subheading here..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div> */}
                      <div class="mb-5 flex flex-col sm:flex-row">
                        <label
                          for="email"
                          class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                        >
                          Page
                        </label>
                        <select
                          onChange={registerDataChange} name="section"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{section ? section : `--select Section--`}</option>

                          <option name="section" onChange={registerDataChange}
                            value="about">About</option>
                          <option name="section" onChange={registerDataChange}
                            value="whatwedo"> Whatwedo</option>
                          <option name="section" onChange={registerDataChange}
                            value="events">Events</option>
                          <option name="section" onChange={registerDataChange}
                            value="resource">Resources</option>
                          <option name="section" onChange={registerDataChange}
                            value="sponser">Sponsers</option>

                        </select>

                      </div>
                      <div class="mb-5 flex flex-col sm:flex-row">
                        {section &&
                          <label
                            for="message"
                            className="mx-3 my-auto block text-base font-medium sm:whitespace-nowrap text-[#07074D] w-32"
                          >
                            SubPage
                          </label>
                        }

                        {section === `about` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{subsection ? subsection : `--select Subsection--`}</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="mission">Goal & Mission</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="team">our-Team</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="testimonial">Testimonials</option>

                        </select>}
                        {section === `whatwedo` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{subsection ? subsection : `--select Subsection--`}</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          {allCategory && allCategory.map((menu) => (
                            <option name="subsection" onChange={registerDataChange}
                              value={`${menu.category}`}>{menu.category}</option>
                          ))}


                        </select>}

                        {section === `events` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{subsection ? subsection : `--select Subsection--`}</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="upcoming">Events</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="photogallery">Photo Gallery</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="belion">Come Be Lion</option>

                        </select>}

                        {section === `resource` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{subsection ? subsection : `--select Subsection--`}</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="operationalresource">Operational Resources</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="collaterals">Collaterals</option>

                        </select>}

                        {section === `sponser` && <select
                          onChange={registerDataChange} name="subsection"
                          id="problem_cat"
                          className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                        >
                          <option hidden="true">{subsection ? subsection : `--select Subsection--`}</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="overview">Overview</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="globalsponser">Global Sponser</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="local">Local Sponser</option>
                          <option name="subsection" onChange={registerDataChange}
                            value="partnerwithus">Partner With Us</option>

                        </select>}

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
                            <div>
                              <input
                                accept="image/*"
                                type="file"
                                name=""
                                id=""
                                value={image}
                                onChange={imageChange}
                                className="text-base z-0 ml-auto"
                              />
                              <p className="text-sm text-red-600">Image width 1020 x 350 px is preferable</p> </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-center items-center my-7">
                        <button
                          disabled={loading}
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
                onClick={handleUpdateToClose}
                color="primary"
                className="font-bold text-3xl"
              // autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}

    </>
  );
};

export default Banner;
