import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { createResource, getResource, updateResource } from "../../redux/action/resources/resource";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const ResOverview = () => {

  const dispatch = useDispatch()
  const [heading, setHeading] = useState(false);
  const [footer, setFooter] = useState(false);
  const [visionDailog, setVisionDailog] = useState(false);
  const [Id, setId] = useState(1)
  const navigate = useNavigate()


  const [point, setPoint] = useState("")
  const { loading, points, error, message, Sequence } = useSelector((state) => state.resource)
  const { isAuthenticated } = useSelector((state) => state.auth)

  const visionClickToOpen = () => {
    setVisionDailog(!visionDailog);
  };

  const visionToClose = () => {
    setVisionDailog(!visionDailog);
  };


  const submitPoint = async (e) => {
    e.preventDefault()
    const myForm = new FormData();;
    myForm.append('point', point);
    myForm.append('CID', Id);
    await dispatch(createResource(myForm, Id))

  }
  const handleUpdateSequence = async (e, cid) => {
    e.preventDefault()
    // setValue(e.target.value)
    const myForm = new FormData();
    myForm.append('point', e.target.value);
    await dispatch(updateResource(myForm, Id, cid))
  }


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      dispatch(getResource(Id))
    }
    if (!isAuthenticated) {
      navigate('/login')
    }
    dispatch(getResource(Id))
  }, [dispatch, isAuthenticated]);


  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <>
      <div className="w-4/5 h-fit rounded-md p-4 m-7 bg-white">
        <div class="my-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Heading
          </label>
          {heading ? (
            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                  onClick={() => setHeading(!heading)}
                  class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setHeading(heading)}
                  class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
              <p className={` w-full p-4 text-base`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                expedita beatae quas sit laboriosam! Accusamus enim, iusto ullam
                magnam possimus vel expedita reiciendis, eos suscipit nesciunt,
                soluta fugit eligendi incidunt.
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => setHeading(!heading)}
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
        <h2 className="text-xl font-source font-bold text-gray-700 mt-6">
          Our Resources page includes:
        </h2>

        <div class="mb-5 flex flex-col sm:flex-row overflow-auto">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Points
          </label>{" "}
          <table class="w-3/5  my-5 border-2 border-violet-900/40">
            <thead class="border-b">
              <tr className="bg-slate-200">
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                >
                  Points
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
              {points && points.map((data) => (
                <tr key={data.id} className="border-b text-center hover:bg-blue-100">
                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                    <p className="w-72 mx-auto">
                      {data.point}
                    </p>
                  </td>
                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                    <select className="w-32 mx-auto"
                      name="value"
                      onChange={(e) => handleUpdateSequence(e, data.id)}>
                      <option hidden='true' value={data.sequence} > {data.sequence}</option>
                      {Sequence && Sequence.map((data) => (
                        <option name="value"
                          onChange={(e) => handleUpdateSequence(e, data.id)}
                          value={data}>{data}</option>
                      ))}

                    </select>
                  </td>

                  <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                    <div className="flex justify-center items-center">
                      {/* <CiEdit className="w-8 h-8 mx-2 cursor-pointer" /> */}
                      <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" />
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
            Add Points
          </button>
        </div>
        <div class="my-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Resources Footer
          </label>
          {footer ? (
            <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/5 rounded-sm flex flex-col sm:flex-row">
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
                  onClick={() => setFooter(!footer)}
                  class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setFooter(footer)}
                  class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/10 rounded-lg flex">
              <p className={` p-4 text-base`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                expedita beatae quas sit laboriosam! Accusamus enim, iusto ullam
                magnam possimus vel expedita reiciendis, eos suscipit nesciunt,
                soluta fugit eligendi incidunt.
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => setFooter(!footer)}
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
      <Dialog open={visionDailog} onClose={() => visionToClose}>
        <DialogTitle>
          {<p className="text-xl font-bold">Add Point</p>}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div class="flex p-2">
              <div class="w-full">
                <form onSubmit={submitPoint}>
                  <div class="mb-5 flex flex-col sm:flex-row">
                    <label
                      for="email"
                      class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                    >
                      Description
                    </label>
                    <textarea
                      rows="2"
                      name="point"
                      value={point}
                      onChange={e => setPoint(e.target.value)}
                      id="message"
                      placeholder="Type your message"
                      class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
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

export default ResOverview;