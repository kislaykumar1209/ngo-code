import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { createOverview } from "../redux/action/whatwedo/whatwedo";

const GloablCauseWiz = () => {

  const dispatch = useDispatch()


  const { loading, overview, error: err, message: msg } = useSelector((state) => state.whatwedo)

  const [image, setImage] = useState();
  const [inputFields, setInputFields] = useState([{ title: "" }]);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setImage();
  };

  const addFields = () => {
    let newfield = { category: "", description: "" };

    setInputFields([...inputFields, newfield]);
  };


  const [overviewPoint, setOverviewPoint] = useState({
    category: "",
    description: "",
  });

  const { category: topic, description } = overviewPoint;
  const registerDataChange = (e) => {

    setOverviewPoint({ ...overviewPoint, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('category', topic);
    myForm.append('description', description);
    myForm.append('image', image);

    await dispatch(createOverview(myForm));

  };

  useEffect(() => {

    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }

    if (msg) {
      toast.success(msg);
      dispatch({ type: 'clearMessage' });
      setOverviewPoint({
        category: "",
        description: ""
      })
      setImage();
    }


  }, [dispatch, err, msg]);

  return (
    <div className="flex justify-evenly">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">
          {/* {inputFields.map((inputField, index) => { */}
          {/* return ( */}

          <div className="border-2 bg-blue-200/40 rounded-lg py-4 px-4" >
            <div className="flex gap-4">
              <h1 className="text-lg font-semibold w-44">Title : </h1>
              <input
                type="text"
                name="category"
                value={topic}
                onChange={registerDataChange}
                // value={inputField.description}
                // onChange={event => handleChangeInput(inputField.id, event)}
                id=""
                placeholder="Write Your Motive here...  "
                className="w-3/5 border-2 border-gray-800 rounded-lg p-1 "
              />
            </div>
            <div className="flex gap-4 mt-4">
              <h1 className="text-lg font-semibold w-44">Explaination : </h1>
              <input
                type="text"
                name="description"
                value={description}
                onChange={registerDataChange}
                id=""
                placeholder="Explain your motive...  "
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
                      value={image}
                      onChange={imageChange}
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
            {/* <button type="submit"
              className="relative  rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
            >submit</button> */}

          </div>

          {/* ); */}
          {/* })} */}
        </div>
        <div className="flex  my-4">
          <button type="submit"
            className="rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 mx-auto"
          >submit</button>
          {/* <div onClick={addFields}>
            <a
              href="#_"
              class="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Button Text</span>
            </a>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default GloablCauseWiz;
