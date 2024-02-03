import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from "../navbar";
import walpaper from "../../assets/4.jpg";
import { createCauseExplain, deleteCauseExplain, getCauseExplain, getOverview, updateCauseExplain, updateOverview } from "../../redux/action/whatwedo/whatwedo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Sidebar from "../../sidebar/sidebar";

const CauseDeatil = () => {
  const { category } = useParams()

  const dispatch = useDispatch()

  const { id } = useParams()

  const [heading, setHeading] = useState(false);
  const [footer, setFooter] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [Image, setImage] = useState();
  const [section, setsection] = useState("whatwedo");
  const [subsection, setsubsection] = useState(category);
  const navigate = useNavigate()
  const { loading, explain, overview, error: err, message: whtMessage, Sequence } = useSelector((state) => state.whatwedo)
  const { loading: load, description: desc, error, message } = useSelector((state) => state.description)
  const { isAuthenticated } = useSelector((state) => state.auth)


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

  const removeSelectedCauseImage = () => {
    setImage();
  };

  const handleUpdateSequence = async (e, cid) => {
    e.preventDefault()
    // setValue(e.target.value)
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateCauseExplain(myForm, id, cid))
  }



  const [causeExplain, setCauseExplain] = useState({
    heading: "",
    description: "",
  });

  const { heading: title, description } =
    causeExplain;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('description', description);
    myForm.append('heading', title);
    myForm.append('image', Image);


    dispatch(createCauseExplain(myForm, id));

  };
  const registerdataChange = (e) => {

    setCauseExplain({ ...causeExplain, [e.target.name]: e.target.value });

  };


  const handleDelete = async (e, Id) => {
    e.preventDefault()
    await dispatch(deleteCauseExplain(Id))
    dispatch(getCauseExplain(id))
  }
  const [descp, setdescription] = useState({
    description1: "",
    description2: "",
  })
  const { description1, description2 } = descp;

  const descriptionDataChange = (e) => {

    setdescription({ ...descp, [e.target.name]: e.target.value });

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

  const cancelDetail = async (e, id) => {
    e.preventDefault()
    console.log(id)
    if (id === 1) {
      setdescription({
        description1: ""
      })
      setHeading(false)
    }
    if (id === 2) {
      setdescription({
        description2: ""
      })
      setFooter(false)
    }


  }
  const activeSubmit = async (e) => {
    e.preventDefault()

    // console.log(value)
    const myForm = new FormData();
    let value = await overview[id - 1]?.is_active
    myForm.append('is_active', !value);
    // console.log(section)
    await dispatch(updateOverview(myForm, id));
    // setTopic(false)
    await dispatch(getOverview(id));


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

    if (whtMessage) {
      toast.success(whtMessage);
      dispatch({ type: 'clearMessage' });

      dispatch(getCauseExplain(id))
      setCauseExplain({
        heading: "",
        description: ""
      })
      setImage()
      setVisionDailog(false)
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    dispatch(getOverview())
    dispatch(getCauseExplain(id));
    dispatch(getDescriptionPoint(section, subsection))
  }, [dispatch, error, message, err, whtMessage, isAuthenticated]);



  return (
    // <>
    //   {loading || load ? (
    //     <Loader />
    //   ) : (

    <>

      <Sidebar>
        <Navbar title="What we Do" />

        <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 my-8 shadow-lg rounded">
          <div className="px-4 py-2 flex-auto">
            <div className="tab-content tab-space">
              <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
                <h2 className="text-2xl font-source mx-4 font-bold text-gray-700 mt-6">
                  {`${subsection}`}
                </h2>
                <label class="relative inline-flex items-center cursor-pointer my-8  scale-125">
                  <input type="checkbox" name='active' value={overview && overview[id - 1]?.is_active ? overview[id - 1].is_active : true} class="sr-only peer" onClick={activeSubmit} />
                  <div class={` w-11 h-6 rounded-full   
                          after:content-[''] after:absolute after:top-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                            ${overview && !overview[id - 1]?.is_active && `bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800   dark:bg-gray-700 `}
                            ${overview && overview[id - 1]?.is_active && `peer-checked:after:translate-x-full after:left-[20px] peer-checked:after:border-white   dark:border-gray-600   peer-checked: bg-green-600`}
                           
                            `}></div>
                  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visibility</span>
                </label>
                <div class="my-5 flex flex-col sm:flex-row">
                  <label
                    for="name"
                    class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                  >
                    Description
                  </label>
                  {heading ? (
                    <form onSubmit={submitDescription} className='contents'>
                      <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                            onClick={() => setHeading(heading)}
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
                        {desc?.description1}
                      </p>
                      <button
                        class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                        // onClick={() => setHeading(!heading)}
                        onClick={() => {
                          setdescription({
                            description1: desc?.description1
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
                    // <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
                    //   <p className={` p-4 text-base`}>
                    //     {/* {desc?.description1 ? desc.description1 : "The Parsippany Lions Club is committed to improving the lives of those in need through our focus on vision health. We understand that the gift of sight is essential for leading a healthy and fulfilling life, and we are dedicated to making sure that everyone in our community has access to the vision care they need."} */}
                    //     {desc?.description1} </p>
                    //   <button
                    //     class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                    //     onClick={() => setHeading(!heading)}
                    //   >
                    //     <svg
                    //       xmlns="http://www.w3.org/2000/svg"
                    //       class="h-6 w-6"
                    //       fill="none"
                    //       viewBox="0 0 24 24"
                    //       stroke="currentColor"
                    //       stroke-width="2"
                    //     >
                    //       <path
                    //         stroke-linecap="round"
                    //         stroke-linejoin="round"
                    //         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    //       />
                    //     </svg>
                    //   </button>
                    // </div>
                  )}
                </div>
                <h2 className="text-xl font-source font-bold text-gray-700 mt-6">
                  Cause Points :
                </h2>

                <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                  <label
                    for="name"
                    class="text-center my-auto block text-base font-medium text-[#07074D] w-32"
                  >
                    Points
                  </label>
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
                      {explain && explain.map((descp) => (
                        <tr key={descp.id} className="border-b text-center hover:bg-blue-100">
                          <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                            {descp.heading}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 ">
                            <p className="w-72 mx-auto">
                              {descp.description}
                            </p>
                          </td>
                          <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                            <img
                              src={`${process.env.REACT_APP_SERVER}/${descp.image}`}
                              alt=""
                              className="w-52 h-20 object-fill mx-auto"
                            />{" "}
                          </td>
                          <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 ">
                            <select className="w-32 mx-auto"
                              name="value"
                              onChange={(e) => handleUpdateSequence(e, descp.id)}>
                              <option hidden='true' value={descp.sequence} > {descp.sequence}</option>
                              {Sequence && Sequence.map((data) => (
                                <option name="value"
                                  onChange={(e) => handleUpdateSequence(e, descp.id)}
                                  value={data}>{data}</option>
                              ))}

                            </select>
                          </td>
                          <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                            <div className="flex justify-center items-center">
                              {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                              <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, descp.id)} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>{" "}
                  {/* <div className="flex justify-center items-center my-0 w-1/2"> */}
                  <button
                    className="px-4 py-2 my-auto mx-4 h-fit border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                    onClick={visionClickToOpen}
                  >
                    Add Services
                  </button>
                  {/* </div> */}
                </div>
                <div class="my-5 flex flex-col sm:flex-row">
                  <label
                    for="name"
                    class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                  >
                    Cause Footer
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
                        // onClick={() => setFooter(!footer)}
                        onClick={() => {
                          setdescription({
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
              </div>
            </div>
          </div>
        </div>
      </Sidebar>

      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>{<p className="text-xl font-bold">Vision</p>}</DialogTitle>
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
                      name="heading"
                      value={title}
                      onChange={registerdataChange}
                      id="name"
                      placeholder="Write your title here..."
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
                      name='description'
                      value={description}
                      onChange={registerdataChange}
                      id="email"
                      placeholder="Explain your title..."
                      class="w-4/5 h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                    // class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Cause Image
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                      {Image ? (
                        <div className="w-full">
                          <img
                            accept="image/*"
                            src={URL.createObjectURL(Image)}
                            alt=""
                            className="object-fill z-40"
                          />
                          <button
                            className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                            onClick={removeSelectedCauseImage}
                          >
                            Remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          accept="image/*"
                          type="file"
                          name=""
                          id=""
                          value={Image}
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
    </>

    //   )}

    // </>
  );
};

export default CauseDeatil;
