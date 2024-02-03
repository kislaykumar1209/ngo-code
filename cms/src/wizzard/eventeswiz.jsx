import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { createEvent } from "../redux/action/Event/event";

const EventsWiz = () => {

  const dispatch = useDispatch()


  const { loading, Events, error: err, message: msg } = useSelector((state) => state.event)

  const [image, setImage] = useState();
  const [image2, setImage2] = useState()
  const [inputFields, setInputFields] = useState([{ title: "" }]);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setImage();
  };
  const imageChange2 = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage2(e.target.files[0]);
    }
  };

  const removeSelectedImage2 = () => {
    setImage2();
  };
  const addFields = () => {
    let newfield = { name: "", age: "" };

    setInputFields([...inputFields, newfield]);
  };

  const [upcomingEvent, setUpcomingEvent] = useState({
    heading: "",
    subheading: "",
    date: "",
    startingTime: "",
    endingTime: "",
    address: ''
  });

  const { heading, date, subheading, startingTime, endingTime, address } =
    upcomingEvent;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('heading', heading);
    myForm.append('subheading', subheading);
    myForm.append('date', date);
    myForm.append('startingTime', startingTime);
    myForm.append('endingTime', endingTime);
    myForm.append('address', address);
    myForm.append('image', image);
    myForm.append('document', image2);

    await dispatch(createEvent(myForm));
  };
  const registerDatachange = (e) => {
    setUpcomingEvent({ ...upcomingEvent, [e.target.name]: e.target.value });

  };

  useEffect(() => {


    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }

    if (msg) {
      toast.success(msg);
      dispatch({ type: 'clearMessage' });
      setUpcomingEvent({
        heading: "",
        subheading: "",
        date: "",
        startingTime: "",
        endingTime: "",
        address: ''
      })
      setImage2(); setImage();
    }



  }, [dispatch, err, msg]);



  return (
    <div className="flex justify-evenly">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">


          <div className="border-2 bg-blue-200/40  rounded-lg py-4 px-4">
            <div className="flex gap-4 my-4">
              <h1 className="text-lg font-semibold w-44">Heading : </h1>
              <input
                type="text"
                name="heading"
                value={heading}
                onChange={registerDatachange}
                id=""
                placeholder="Event Heading...    "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 my-4">
              <h1 className="text-lg font-semibold w-44">Subheading : </h1>
              <input
                type="text"
                name="subheading"
                value={subheading}
                onChange={registerDatachange}
                id=""
                placeholder="Event subheading...  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 my-4">
              <h1 className="text-lg font-semibold w-44">Date : </h1>
              <input
                type="date"
                name="date"
                value={date}
                onChange={registerDatachange}
                id=""
                placeholder="date  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 my-4">
              <h1 className="text-lg font-semibold w-44">Starting Time : </h1>
              <input
                type="text"
                name="startingTime"
                value={startingTime}
                onChange={registerDatachange}
                id=""
                placeholder="10:00  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 my-4">
              <h1 className="text-lg font-semibold w-44">Ending Time : </h1>
              <input
                type="text"
                value={endingTime}
                onChange={registerDatachange}
                name="endingTime"
                id=""
                placeholder="15:00  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4">
              <h1 className="text-lg font-semibold w-44">Venue : </h1>
              <input
                type="text"
                name="address"
                value={address}
                onChange={registerDatachange}
                id=""
                placeholder="Event Location  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <h1 className="text-lg font-semibold w-44">Image : </h1>
              <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip bg-white  border-2 border-gray-700 mr-auto">
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
            <div className="flex gap-4 mt-4 items-center">
              <h1 className="text-lg font-semibold w-44">Document : </h1>
              <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip bg-white  border-2 border-gray-700 mr-auto">
                {image2 ? (
                  <div className="w-full">
                    <img
                      src={URL.createObjectURL(image2)}
                      alt=""
                      className="object-fill z-40"
                    />
                    <button
                      className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                      onClick={removeSelectedImage2}
                    >
                      Remove image
                    </button>{" "}
                  </div>
                ) : (
                  <input
                    type="file"
                    name=""
                    id=""
                    value={image2}
                    onChange={imageChange2}
                    // onChange={registerDataChange}
                    className="text-base z-0 ml-auto"
                  />
                )}
              </div>
            </div>
            {/* <button type="submit" className="relative  rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
                >
                  submit
                </button> */}
          </div>


        </div>
        <div className="flex my-4 mx-auto justify-center">
          {/* <div onClick={addFields}>
          <a
            href="#_"
            class="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Button Text</span>
          </a>
        </div> */}
          <button type="submit" className="relative  rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventsWiz;
