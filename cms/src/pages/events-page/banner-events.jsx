import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEventDescription } from "../../redux/action/Event/event";

const BannerEvents = ({ eventDescription, id }) => {
  const dispatch = useDispatch()
  const [Heading1, setHeading1] = useState(false);
  const [Heading2, setHeading2] = useState(false);
  const [image1, setImage1] = useState();


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage1(e.target.files[0]);
    }
  };

  const removeSelectedImage1 = () => {
    setImage1();
  };

  const [eventBody, setEventBody] = useState({
    heading: "",
    bannerSubHeading: ""
  })

  const { heading, bannerSubHeading } = eventBody;

  const eventDataChange = (e) => {

    setEventBody({ ...eventBody, [e.target.name]: e.target.value });

  };

  const submitHeading1 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading', heading);
    await dispatch(updateEventDescription(myForm, id));
    setHeading1(false)
  };
  const submitHeading2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('bannerSubHeading', bannerSubHeading);
    await dispatch(updateEventDescription(myForm, id));
    setHeading2(false)
  };

  const submitImage1 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image1', image1);
    await dispatch(updateEventDescription(myForm, id));
    // setImage1()


  };

  return (
    <div class="flex p-2">
      <div class="w-full my-5">
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Heading
          </label>
          {Heading1 ? (
            <form onSubmit={submitHeading1} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading"
                  value={heading}
                  onChange={eventDataChange}
                  id="message"
                  placeholder="Type your message"
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, (id = 1))}
                    onClick={() => setHeading1(!Heading1)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    // disabled={loading}
                    // onClick={() => setHeading1(Heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            // 
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.heading}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => {
                  setHeading1(!Heading1)
                  setEventBody({
                    heading: eventDescription?.heading,
                  });

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
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Sub-Heading
          </label>
          {Heading2 ? (
            <form onSubmit={submitHeading2} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="bannerSubHeading"
                  value={bannerSubHeading}
                  onChange={eventDataChange}
                  id="message"
                  placeholder="Type your message"
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, (id = 1))}
                    onClick={() => setHeading2(!Heading2)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    // disabled={loading}
                    // onClick={() => setHeading1(Heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            // 
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.bannerSubHeading}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => {
                  setHeading2(!Heading2)
                  setEventBody({
                    bannerSubHeading: eventDescription?.bannerSubHeading,
                  });

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
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="email"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Image
          </label>
          <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
            {image1 ? (
              <form onSubmit={submitImage1}>
                <div className="w-full">
                  <img
                    accept="image/*"
                    src={URL.createObjectURL(image1)}
                    // src={clubLogo}
                    alt=""
                    name="image1"
                    value={image1}
                    onChange={(e) => setImage1(e.target.files[0])}
                    className="object-fill z-40 w-60 h-60"
                  />
                  <button
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                    onClick={removeSelectedImage1}
                  >
                    Remove image
                  </button>{" "}
                  <button
                    type="submit"
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  // onClick={removeSelectedImage}
                  >
                    Submit
                  </button>{" "}
                </div>
              </form>
            ) : (
              (eventDescription?.image1 ? (<><img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image1}`} /> <input
                type="file"
                style={{
                  color: "transparent",
                  marginLeft: "150px"
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
      </div>
    </div>
  );
};

export default BannerEvents;
