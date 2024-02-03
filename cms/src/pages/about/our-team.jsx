import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../../assets/user.webp";
// import walpaper from "../assets/4.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createTeamInfo, deleteTeamInfo, getTeamInfo } from "../../redux/action/about/about";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../navbar";


const OurTeam = () => {
  const dispatch = useDispatch()

  const [openTab, setOpenTab] = useState(3);
  const [profile, profileOpen] = useState(false);
  const [description, setDescription] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [section, setsection] = useState("about");
  const [subsection, setsubsection] = useState("ourteam");
  const [image, setImage] = useState()

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
  const removeSelectedImage = () => {
    setImage();
  };


  const { loading, team, error, message } = useSelector((state) => state.about)

  const [member, setMember] = useState({
    name: "",
    designation: "",
    description: "",
  });

  const { name, designation, description: desc } =
    member;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('name', name);
    myForm.append('designation', designation);
    myForm.append('description', desc);
    myForm.append('image', image);

    dispatch(createTeamInfo(myForm));

  };
  const registerDataChange = (e) => {

    setMember({ ...member, [e.target.name]: e.target.value });

  };

  const handleDelete = async (e, id) => {
    e.preventDefault()
    await dispatch(deleteTeamInfo(id))
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
      setMember({
        name: "",
        designation: "",
        description: "",
      })
      setVisionDailog(false)
      dispatch(getTeamInfo())
    }
    dispatch(getTeamInfo());
    dispatch(getDescriptionPoint(section, subsection))
  }, [dispatch, error, message,]);


  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (

    <>
      <Navbar title="Our-Team" />

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
                  <div className="tab-content tab-space"></div>

                  <div className="flex h-full scroll-smooth">
                    <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
                      <form>
                        <div class="mb-5 flex flex-col sm:flex-row">
                          <label
                            for="name"
                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                          >
                            Description
                          </label>
                          {description ? (
                            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                              <textarea
                                rows="2"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              ></textarea>
                              <div className="flex flex-col gap-2 mx-3 my-2">
                                <button
                                  type="button"
                                  onClick={() => setDescription(!description)}
                                  class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setDescription(description)}
                                  class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
                              <p className={`w-full p-4 text-base`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Harum expedita beatae quas sit laboriosam! Accusamus enim,
                                iusto ullam magnam possimus vel expedita reiciendis, eos
                                suscipit nesciunt, soluta fugit eligendi incidunt.
                              </p>
                              <button
                                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                onClick={() => setDescription(!description)}
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
                      </form>
                      <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
                        <label
                          for="name"
                          class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                        >
                          Team Memebers
                        </label>{" "}
                        <table class="w-3/5  my-5 border-2 border-violet-900/40">
                          <thead class="border-b">
                            <tr className="bg-slate-200">
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
                                Designation
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                              >
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {team && team.map((member) => (
                              <tr className="border-b text-center hover:bg-blue-100">
                                <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                  <img
                                    src={`${process.env.REACT_APP_SERVER}/${member.image}`}
                                    alt=""
                                    className="w-56 h-24 object-fill mx-auto"
                                  />{" "}
                                </td>
                                <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                  {member.name}
                                </td>
                                <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                  {member.designation}
                                </td>
                                <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                  <p className="w-72 mx-auto">
                                    {member.description}
                                  </p>
                                </td>


                                <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                  <div className="flex justify-center items-center">
                                    <CiEdit className="w-8 h-8 mx-2 cursor-pointer" />
                                    <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, member.id)} />
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>{" "}
                        <button
                          className="px-4 py-2 mx-4 my-auto h-fit border border-gray-800 hover:bg-gray-900 text-gray-800 hover:text-white text-sm font-medium rounded-md"
                          onClick={visionClickToOpen}
                        >
                          Add Member
                        </button>
                      </div>

                    </div>
                  </div>
                </div></div></div>
          </div></div></div>
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Memeber</p>}
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
                      placeholder="Team member name..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Desgination
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={designation}
                      onChange={registerDataChange}
                      placeholder="Member designation..."
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
                      name="description"
                      value={desc}
                      onChange={registerDataChange}
                      id="email"
                      placeholder="Explain about member's role..."
                      class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Photo
                    </label>
                    <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
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
                            Remove image
                          </button>{" "}
                        </div>
                      ) : (
                        <input
                          type="file"
                          name=""
                          id=""
                          value={image}
                          onChange={imageChange}
                          // onChange={registerDataChange}
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
      {/* Dailog Box */}
    </>
    //   )}

    // </>
  );
};

export default OurTeam;
