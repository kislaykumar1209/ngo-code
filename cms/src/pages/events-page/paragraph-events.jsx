import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEventDescription } from "../../redux/action/Event/event";
import { updateDonate } from "../../redux/action/others/others";

const ParagraphEvents = ({ eventDescription, id }) => {
  const dispatch = useDispatch()
  const [Heading2, setHeading2] = useState(false);
  const [Heading3, setHeading3] = useState(false);
  const [Heading4, setHeading4] = useState(false);
  const [Heading1, setHeading1] = useState(false);
  const [Heading12, setHeading12] = useState(false);
  const [Heading13, setHeading13] = useState(false);
  const [Heading14, setHeading14] = useState(false);
  const [Heading5, setHeading5] = useState(false);
  const [Heading6, setHeading6] = useState(false);
  const [Heading7, setHeading7] = useState(false);
  const [Heading8, setHeading8] = useState(false);
  const [Heading9, setHeading9] = useState(false);
  const [Description1, setDescription1] = useState(false);
  const [Description2, setDescription2] = useState(false);
  const [Description3, setDescription3] = useState(false);
  const [Description4, setDescription4] = useState(false);
  const [Description5, setDescription5] = useState(false);
  const [Description6, setDescription6] = useState(false);
  const [Description7, setDescription7] = useState(false);
  const [Description8, setDescription8] = useState(false);
  const [Description9, setDescription9] = useState(false);
  const [Description10, setDescription10] = useState(false);
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();

  const [image, setImage] = useState();
  const [image1, setImage1] = useState();



  const imageChange2 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage2(e.target.files[0]);
    }
  };

  const removeSelectedImage2 = () => {
    setImage2();
  };

  const imageChange3 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage3(e.target.files[0]);
    }
  };

  const removeSelectedImage3 = () => {
    setImage3();
  };

  const imageChange4 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage4(e.target.files[0]);
    }
  };

  const removeSelectedImage4 = () => {
    setImage4();
  };
  const imageChange5 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage5(e.target.files[0]);
    }
  };

  const removeSelectedImage5 = () => {
    setImage5();
  };
  const [eventBody, setEventBody] = useState({
    heading2: "",
    heading3: "",
    heading4: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
  })
  const { heading2, heading3, heading4, description1, description2, description3, description4, description5, description6, description7, description8, description10, description9 } = eventBody;

  const eventDataChange = (e) => {

    setEventBody({ ...eventBody, [e.target.name]: e.target.value });

  };

  const submitHeading2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading2', heading2);
    await dispatch(updateEventDescription(myForm, id));
    setHeading2(false)
  };
  const submitHeading3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading3', heading3);
    await dispatch(updateEventDescription(myForm, id));
    setHeading3(false)
  };
  const submitHeading4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('heading4', heading4);
    await dispatch(updateEventDescription(myForm, id));
    setHeading4(false)
  };

  const submitDescription9 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('description9', description9);
    await dispatch(updateEventDescription(myForm, id));
    setDescription9(false)
  };
  const submitDescription10 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('description10', description10);
    await dispatch(updateEventDescription(myForm, id));
    setDescription10(false)
  };

  const submitImage2 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image2', image2);
    await dispatch(updateEventDescription(myForm, id));
    setImage2()


  };
  const submitImage3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image3', image3);
    await dispatch(updateEventDescription(myForm, id));
    setImage3()


  };
  const submitImage4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image4', image4);
    await dispatch(updateEventDescription(myForm, id));
    setImage4()
  }
  const submitImage5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('image5', image5);
    await dispatch(updateEventDescription(myForm, id));
    // setImage5()
  }

  const { loading, error, message, } = useSelector((state) => state.others)
  const [Detail, setDetail] = useState({
    heading1: "",
    heading12: "",
    heading13: "",
    heading14: "",
    heading5: "",
    heading6: "",
    heading7: "",
    heading8: "",
    heading9: "",
    button: ""
  })

  const { heading1, heading12, heading13, heading14, heading5, heading6, heading7, heading8, heading9, button } = Detail;
  const descriptionDataChange = (e) => {

    setDetail({ ...Detail, [e.target.name]: e.target.value });

  };



  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };

  const imageChange1 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage1(e.target.files[0]);
    }
  };

  const removeSelectedImage1 = () => {
    setImage1();
  };


  // const submitButton = async (e) => {
  //   e.preventDefault();
  //   const myForm = new FormData();
  //   myForm.append('button', button);
  //   await dispatch(updateDonate(myForm));
  //   setButton(false)
  // };
  const submitImage1 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Image2', image1);
    await dispatch(updateEventDescription(myForm, id));
    // setButton(false)
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Image1', image);
    await dispatch(updateEventDescription(myForm, id));
    // setButton(false)
  };

  const submitDetail3 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading3', heading13);
    await dispatch(updateEventDescription(myForm, id));
    setHeading13(false)
  };
  const submitDetail4 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading4', heading14);
    await dispatch(updateEventDescription(myForm, id));
    setHeading14(false)
  };
  const submitDetail5 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading5', heading5);
    await dispatch(updateEventDescription(myForm, id));
    setHeading5(false)
  };
  const submitDetail6 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading6', heading6);
    await dispatch(updateEventDescription(myForm, id));
    setHeading6(false)
  };
  const submitDetail7 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading7', heading7);
    await dispatch(updateEventDescription(myForm, id));
    setHeading7(false)
  };
  const submitDetail8 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading8', heading8);
    await dispatch(updateEventDescription(myForm, id));
    setHeading8(false)
  };
  const submitDetail9 = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('Heading9', heading9);
    await dispatch(updateEventDescription(myForm, id));
    setHeading9(false)
  };


  return (
    <div class="flex p-2">
      <div class="w-full my-5">
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Paragraph 1
          </label>
          {Description9 ? (
            <form onSubmit={submitDescription9} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="description9"
                  value={description9}
                  onChange={eventDataChange}
                  id="message"
                  placeholder="Type your message"
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    onClick={() => setDescription9(!Description9)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
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
                {eventDescription?.description9}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => {
                  setDescription9(!description9)
                  setEventBody({
                    description9: eventDescription?.description9,
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
            Paragraph 2
          </label>
          {Description10 ? (
            <form onSubmit={submitDescription10} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="description10"
                  value={description10}
                  onChange={eventDataChange}
                  id="message"
                  placeholder="Type your message"
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    onClick={() => setDescription10(!Description10)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
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
                {eventDescription?.description10}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                onClick={() => {
                  setDescription10(!description10)
                  setEventBody({
                    description10: eventDescription?.description10,
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
            QR Image
          </label>
          <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
            {image5 ? (
              <form onSubmit={submitImage5}>
                <div className="w-full">
                  <img
                    accept="image/*"
                    src={URL.createObjectURL(image5)}
                    // src={clubLogo}
                    alt=""
                    name="image5"
                    value={image5}
                    onChange={(e) => setImage5(e.target.files[0])}
                    className="object-fill z-40 w-60 h-60"
                  />
                  <button
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                    onClick={removeSelectedImage5}
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
              (eventDescription?.image4 ? (<><img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.image4}`} /> <input
                type="file"
                style={{
                  color: "transparent",
                  marginLeft: "150px"
                }}
                name="image"
                accept="image/*"
                id=""
                onChange={imageChange5}
                className="text-base z-0 mx-auto ml-11 mt-3"
              /></>) : (<input
                type="file"

                title=" "
                name=""
                accept="image/*"
                id=""
                onChange={imageChange5}
                className="text-base z-0 mx-auto"
              />))
            )}
          </div>
        </div>

        <h1 className=" md:text-xl font-extrabold mx-5 my-4  text-lg">Donate Option</h1>{" "}
        <h2 className=" md:text-xl font-bold mx-5 my-5  text-lg">Option 1:</h2>{" "}
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Donation To:
          </label>
          {Heading13 ? (
            <form onSubmit={submitDetail3} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading13"
                  value={heading13}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading13(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings3}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading13: eventDescription?.Headings3
                  })
                  setHeading13(!Heading13)
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
        <h2 className=" md:text-xl font-bold mx-5 my-10  text-lg">Option 2:</h2>{" "}
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            Scan to:
          </label>
          {Heading14 ? (
            <form onSubmit={submitDetail4} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading14"
                  value={heading14}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading14(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings4}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading14: eventDescription?.Headings4
                  })
                  setHeading14(!Heading14)
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
            QR
          </label>
          <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
            {image ? (
              <form onSubmit={submitImage} className="contents">
                <div className="w-full">
                  <img
                    accept="image/*"
                    src={URL.createObjectURL(image)}
                    alt=""
                    name="image"
                    value={image}
                    className="object-fill z-40"
                  />
                  <button
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                    onClick={removeSelectedImage}
                  >
                    remove
                  </button>{" "}
                  <button
                    type="submit"
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  // onClick={removeSelectedImage1}
                  >
                    submit
                  </button>{" "}
                </div>
              </form>
            ) : (
              (eventDescription?.Images1 ? (<><img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images1}`} /> <input
                type="file"
                style={{
                  color: "transparent",
                  marginLeft: "90px"
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
        <h2 className=" md:text-xl font-bold mx-5 my-10  text-lg">Option 3:</h2>{" "}
        <div class="mb-5 flex flex-col sm:flex-row">
          <label
            for="name"
            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
          >
            App Advertisment
          </label>
          {Heading5 ? (
            <form onSubmit={submitDetail5} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading5"
                  value={heading5}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading5(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings5}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading5: eventDescription?.Headings5
                  })
                  setHeading5(!Heading5)
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
            App logo:
          </label>
          <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
            {image1 ? (
              <form onSubmit={submitImage1} className="contents">
                <div className="w-full">
                  <img
                    accept="image/*"
                    src={URL.createObjectURL(image1)}
                    alt=""
                    name="image1"
                    value={image1}
                    className="object-fill z-40"
                  />
                  <button
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                    onClick={removeSelectedImage1}
                  >
                    remove
                  </button>{" "}
                  <button
                    type="submit"
                    className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  // onClick={removeSelectedImage1}
                  >
                    submit
                  </button>{" "}
                </div>
              </form>
            ) : (
              (eventDescription?.Images2 ? (<><img src={`${process.env.REACT_APP_SERVER}/${eventDescription?.Images2}`} /> <input
                type="file"
                style={{
                  color: "transparent",
                  marginLeft: "90px"
                }}
                name="image"
                accept="image/*"
                id=""
                onChange={imageChange1}
                className="text-base z-0 mx-auto ml-11 mt-3"
              /></>) : (<input
                type="file"

                title=" "
                name=""
                accept="image/*"
                id=""
                onChange={imageChange1}
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
            Club
          </label>
          {Heading6 ? (
            <form onSubmit={submitDetail6} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading6"
                  value={heading6}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading6(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings6}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading6: eventDescription?.Headings6
                  })
                  setHeading6(!Heading6)
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
            Payment to
          </label>
          {Heading7 ? (
            <form onSubmit={submitDetail7} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading7"
                  value={heading7}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading7(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings7}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading7: eventDescription?.Headings7
                  })
                  setHeading7(!Heading7)
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
            Device
          </label>
          {Heading8 ? (
            <form onSubmit={submitDetail8} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading8"
                  value={heading8}
                  onChange={descriptionDataChange}
                  id="message"
                  //   placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading8(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings8}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading8: eventDescription?.Headings8
                  })
                  setHeading8(!Heading8)
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
            Mobile
          </label>
          {Heading9 ? (
            <form onSubmit={submitDetail9} className="contents">
              <div className="w-36 sm:w-3/5 min-h-44 border-2 border-black/70 rounded-lg flex flex-col sm:flex-row">
                <textarea
                  rows="2"
                  name="heading9"
                  value={heading9}
                  onChange={descriptionDataChange}
                  id="message"
                  placeholder="Type Your Page Title..."
                  class="w-full h-40 sm:min-h-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <div className="flex flex-col gap-2 mx-3 my-2">
                  <button
                    type="button"
                    // onClick={(e, id) => cancelDetail(e, id = 1)}
                    onClick={() => setHeading9(false)}
                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    // onClick={() => setHeading1(heading1)}
                    class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="w-60 sm:w-3/5 h-60 overflow-clip sm:min-h-40 sm:h-auto border-2 border-black/50 rounded-lg flex">
              <p className={` p-4 text-base w-full`}>
                {eventDescription?.Headings9}
              </p>
              <button
                class="flex w-10 h-12 mr-2 my-auto p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"

                onClick={() => {
                  // setVisionDes(!visionDes),
                  setDetail({
                    heading9: eventDescription?.Headings9
                  })
                  setHeading9(!Heading9)
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
  );
};

export default ParagraphEvents;
