import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBanner } from "../redux/action/others/others";
import { toast } from "react-hot-toast";

const BannerWiz = () => {

  const dispatch = useDispatch()

  const [homeImage, setHomeImage] = useState();
  const [aboutImage, setAboutImage] = useState();
  const [whatWeDoImage, setWhatWeDoImage] = useState();
  const [eventImage, setEventImage] = useState();
  const [resourceImage, setResourceImage] = useState();
  const [sponserImage, setSponserImage] = useState();

  const { loading, Allbanner, error: err, message: msg } = useSelector((state) => state.others)

  const [section, setsection] = useState("");
  const [subsection, setsubsection] = useState("");
  const homeImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setHomeImage(e.target.files[0]);
      setAboutImage();
      setWhatWeDoImage();
      setEventImage();
      setResourceImage();
      setSponserImage();
    }
    setsection("home")
    setsubsection("home")

  };
  const aboutImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAboutImage(e.target.files[0]);
      setHomeImage();
      setWhatWeDoImage();
      setEventImage();
      setResourceImage();
      setSponserImage();
    }
    setsection("about")
    setsubsection("overview")
  };
  const whatWeDoImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setWhatWeDoImage(e.target.files[0]);
      setHomeImage();
      setAboutImage();
      setEventImage();
      setResourceImage();
      setSponserImage();
    }
    setsection("whatwedo")
    setsubsection("overview")
  };
  const eventImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setEventImage(e.target.files[0]);
      setHomeImage();
      setAboutImage();
      setWhatWeDoImage();
      setResourceImage();
      setSponserImage();
    }
    setsection("events")
    setsubsection("upcoming")
  };
  const resourceImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResourceImage(e.target.files[0]);
      setHomeImage();
      setAboutImage();
      setWhatWeDoImage();
      setEventImage();
      setSponserImage();
    }
    setsection("resource")
    setsubsection("overview")
  };
  const sponserImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSponserImage(e.target.files[0]);
      setHomeImage();
      setAboutImage();
      setWhatWeDoImage();
      setEventImage();
      setResourceImage();
    }
    setsection("sponser")
    setsubsection("overview")
  };
  const removeHomeImage = () => {
    setHomeImage();
  };
  const removeAboutImage = () => {
    setAboutImage();
  };
  const removeWhatwedoImage = () => {
    setWhatWeDoImage();
  };
  const removeEventImage = () => {
    setEventImage();
  };
  const removeResourceImage = () => {
    setResourceImage();
  };
  const removeSponserImage = () => {
    setSponserImage();
  };


  const homeSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData();

    console.log(section, subsection)

    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', homeImage);
    await dispatch(createBanner(myForm, section, subsection))
  }
  const aboutSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData();


    console.log(section, subsection)

    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', aboutImage);
    await dispatch(createBanner(myForm, section, subsection))
  }
  const whatwedoSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData();


    console.log(section, subsection)

    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', whatWeDoImage);
    await dispatch(createBanner(myForm, section, subsection))
  }
  const eventSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData();

    console.log(section, subsection)

    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', eventImage);
    await dispatch(createBanner(myForm, section, subsection))
  }
  const resourceSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData();


    console.log(section, subsection)

    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', resourceImage);
    await dispatch(createBanner(myForm, section, subsection))
  }
  const sponserSubmit = async (e) => {
    e.preventDefault()


    const myForm = new FormData();



    myForm.append('section', section);
    myForm.append('subsection', subsection);
    myForm.append('image', sponserImage);
    await dispatch(createBanner(myForm, section, subsection))
  }

  useEffect(() => {

    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }

    if (msg) {
      toast.success(msg);
      dispatch({ type: 'clearMessage' });
    }

  }, [dispatch, err, msg]);


  return (
    <div className="">
      <div className="flex gap-4 my-4 items-center">
        <h1 className="text-lg font-semibold w-44">Home Banner: </h1>
        <form onSubmit={homeSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {homeImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(homeImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeHomeImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={homeImage}
                onChange={homeImageChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 my-4 items-center">
        <h1 className="text-lg font-semibold w-44">About Banner: </h1>
        <form onSubmit={aboutSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {aboutImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(aboutImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeAboutImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  Submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={aboutImage}
                onChange={aboutImageChange}
                // onChange={registerDataChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 my-4 items-center">
        <h1 className="text-lg font-semibold w-44">What we do Banner: </h1>
        <form onSubmit={whatwedoSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {whatWeDoImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(whatWeDoImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeWhatwedoImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={whatWeDoImage}
                onChange={whatWeDoImageChange}
                // onChange={registerDataChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 my-4 items-center">
        <h1 className="text-lg font-semibold w-44">Event Banner: </h1>
        <form onSubmit={eventSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {eventImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(eventImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeEventImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={eventImage}
                onChange={eventImageChange}
                // onChange={registerDataChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 my-4 items-center">
        <h1 className="text-lg font-semibold w-44">Resources Banner: </h1>
        <form onSubmit={resourceSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {resourceImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(resourceImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeResourceImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={resourceImage}
                onChange={resourceImageChange}
                // onChange={registerDataChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold w-44">Sponsor Banner: </h1>
        <form onSubmit={sponserSubmit}>
          <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip  border-2 border-gray-700 mr-auto">
            {sponserImage ? (
              <div className="w-full">
                <img
                  src={URL.createObjectURL(sponserImage)}
                  alt=""
                  className="object-fill z-40"
                />
                <button
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                  onClick={removeSponserImage}
                >
                  Remove image
                </button>{" "}
                <button
                  type="submit"
                  className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"

                >
                  submit image
                </button>{" "}
              </div>
            ) : (
              <input
                type="file"
                name=""
                id=""
                value={sponserImage}
                onChange={sponserImageChange}
                // onChange={registerDataChange}
                className="text-base z-0 ml-auto"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerWiz;
