import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClubInfo, updateLogo } from "../redux/action/club/clubInfo";
import { toast } from "react-hot-toast";

const PersonalDetail = () => {

  const dispatch = useDispatch()

  const { info, loading, logo, error, message } = useSelector((state) => state.club)

  const [clubLogo, setClubLogo] = useState()
  // const [clubLogo, setClubLogo] = useState(logo?.image)
  const [clubTitle, setClubTitle] = useState(logo?.title)

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      setClubLogo(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setClubLogo();
  };



  const [clubInfo, setClubInfo] = useState({
    number: "",
    facebook: "",
    instagram: "",
    email: "",
    address: "",
  });

  const { number, facebook, instagram, email, address } =
    clubInfo;
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('number', number);
    myForm.append('facebook', facebook);
    myForm.append('instagram', instagram);
    myForm.append('email', email);
    myForm.append('address', address);

    dispatch(updateClubInfo(myForm));

  };
  const registerDataChange = (e) => {
    setClubInfo({ ...clubInfo, [e.target.name]: e.target.value });
  };

  const logoSubmit = (e) => {
    e.preventDefault()
    dispatch(updateLogo(clubTitle, clubLogo));
  }


  useEffect(() => {
    if (error) {
      toast.error(error);
      // console.log(error, "perdwiz")
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      // dispatch(getClubInfo())
    }
    // dispatch(getClubInfo());
    // dispatch(getLogoInfo())
  }, [dispatch, error, message]);

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <form onSubmit={logoSubmit} className="contents">
        <div className="border-2 bg-blue-200/40 col-span-2 grid grid-cols-2 gap-4">
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Name of the Club
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                type="text"
                name="title"
                value={clubTitle}
                onChange={(e) => setClubTitle(e.target.value)}
                placeholder="Club title..."
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
          </div>
          <div className="w-full mx-2 flex-1 svelte-1l8159u">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Logo of the Club
            </div>
            {/* <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              placeholder="jhon@doe.com"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
          </div> */}
            <div className="w-72 rounded-xl min-h-44 p-4 overflow-clip bg-white  border-2 border-gray-700 mr-auto">
              {/* <div className="w-2/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center"> */}
              {clubLogo ? (
                <div className="w-full">
                  <img
                    src={URL.createObjectURL(clubLogo)}
                    // src={clubLogo}
                    alt=""
                    name="logo"
                    value={clubLogo}
                    onChange={(e) => setClubLogo(e.target.files[0])}
                    className="object-fill h-20 z-40"

                  // className="object-fill z-40"
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
                  onChange={imageChange}
                  className="text-base z-0 mx-auto"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="relative col-span-2 my-4 w-32 mx-auto  rounded-lg px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      <form onSubmit={submitHandler} className='contents'>
        <div className="border-2 bg-blue-200/40 grid grid-cols-2 gap-4 px-4 col-span-2 my-4">
          <div className="w-full mx-2 ">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Contact Number
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                type="text"
                name="number"
                // value={number}
                value={number}
                onChange={registerDataChange}
                placeholder=""
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
          </div>

          <div className="w-full mx-2 ">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Address
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                type="text"
                name="address"
                value={address}
                onChange={registerDataChange}
                placeholder=""
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
          </div>
          <div className="w-full mx-2 ">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Email Id
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                type="email"
                name="email"
                value={email}
                // value={email}
                onChange={registerDataChange}
                placeholder=""
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
          </div>
          <div className="w-full mx-2 ">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Facebook Id
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={registerDataChange}
                placeholder=""
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
          </div>
          <div className="w-full mx-2 justify-self-center col-span-2 ">
            <div className="font-bold h-6 mt-3 text-gray-800 text-xs leading-8 uppercase">
              {" "}
              Instagram Id
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <input
                name="instagram"
                value={instagram}
                onChange={registerDataChange}
                placeholder=""
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />{" "}
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-4"></div>
          </div>
          <button
            type="submit"
            className="relative col-span-2 w-32 mx-auto  rounded-lg px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
