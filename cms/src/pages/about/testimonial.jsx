import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { createTestimonial, deleteTestimonialPoint, getTestimonial } from "../../redux/action/about/about";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../navbar";

const Testimonial = () => {
  const dispatch = useDispatch()
  const [profile, profileOpen] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [openTab, setOpenTab] = useState(4);

  const { loading, testimonial, error, message } = useSelector((state) => state.about)

  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };


  const [testimonialInfo, setTestimonialInfo] = useState({
    name: "",
    designation: "",
    comment: ""
  });

  const { name, designation, comment } = testimonialInfo;

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('designation', designation);
    myForm.append('comment', comment);

    dispatch(createTestimonial(myForm));

  };
  const registerDataChange = (e) => {
    setTestimonialInfo({ ...testimonialInfo, [e.target.name]: e.target.value });
  };

  const handleDelete = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteTestimonialPoint(id))
    // dispatch(getDreamsPoint())
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      setTestimonialInfo({
        name: "",
        designation: "",
        comment: ""
      })
      setVisionDailog(false)
      dispatch(getTestimonial())
    }
    dispatch(getTestimonial())
  }, [dispatch, error, message]);


  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (

    <>
      <Navbar title="Testimonial" />

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
                    <NavLink exact to='/about' >

                      <p className="px-5 py-3">Overview</p>
                    </NavLink>
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
                    {/* <Link to='/about/mission'> */}
                    <NavLink exact to='/about/mission'>

                      <p className="px-5 py-3">Mission & Dreams</p>
                    </NavLink>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
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
                    <Link to='/about/our-team'>

                      <p className="px-5 py-3">Team</p>
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
                    <Link to='/about/testimonial'>

                      <p className="px-5 py-3">Testimonial</p>
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                <div className="px-4 flex-auto">
                  <div className="tab-content tab-space">
                    <div className="flex h-full scroll-smooth">
                      <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
                        <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Testimonial
                          </label>{" "}
                          <table class="w-3/5  my-5 border-2 border-violet-900/40">
                            <thead class="border-b">
                              <tr className="bg-slate-200">
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                >
                                  Designation
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
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {testimonial && testimonial.map((testimonial) => (
                                <tr key={testimonial.id} className="border-b text-center hover:bg-blue-100">
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {testimonial.name}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                    <p className="w-72 mx-auto">
                                      {testimonial.designation}
                                    </p>
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    {testimonial.comment}
                                  </td>
                                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                    <div className="flex justify-center items-center">
                                      <CiEdit className="w-8 h-8 mx-2 cursor-pointer" />
                                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, testimonial.id)} />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>{" "}
                          <button
                            className="px-4 py-2 border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md mx-4 h-fit my-auto"
                            onClick={visionClickToOpen}
                          >
                            Add Testimonial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div></div></div>
            </div></div></div>
      </div>
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Testimonial</p>}
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
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                      id="name"
                      placeholder="Your name..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={designation}
                      onChange={registerDataChange}
                      placeholder="Your designation"
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
                      name="comment"
                      value={comment}
                      onChange={registerDataChange}
                      placeholder="Explain ..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
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
      </Dialog>
      {/* Dailog Box */}
    </>
    //   )}

    // </>
  );
};

export default Testimonial;
