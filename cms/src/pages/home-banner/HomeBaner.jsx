import React, { useEffect, useState } from "react";
import walpaper from "../../assets/4.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { createBanner, deleteBanner, getAllBannerInfo, getBannerInfo, getSectionBannerInfo, getTitle, updateBanner } from "../../redux/action/others/others";
import { useDispatch, useSelector } from "react-redux";
import { getDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import Navbar from "../navbar";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";

const HomeBaner = () => {

    const dispatch = useDispatch()
    const [openTab, setOpenTab] = useState(3);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState("");
    const [point, setPoint] = useState("");
    const [updateOpen, setUpdateOpen] = useState(false);
    const [image, setImage] = useState()
    const [prevImage, setPrevImage] = useState("")
    const [sect, setsection] = useState("home");
    const [subsect, setsubsection] = useState("home");

    const { loading, sectionBanner, sequence, error: err, message: othMessage, title } = useSelector((state) => state.others)
    const { isAuthenticated } = useSelector((state) => state.auth)

    const handleClickToOpen = () => {
        setOpen(!open);
    };

    const handleToClose = () => {

        setOpen(!open);
    };
    const handleUpdateToClose = () => {
        setImage()
        setBannerBody({
            heading: "",
            subheading: "",
            section: "",
            subsection: ""
        })
        setUpdateOpen(!updateOpen);
    };


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };



    const [bannerBody, setBannerBody] = useState({
        subheading: "",
        heading: "",
        link: "",
        button: ""
    });

    const { heading, subheading, link, button } =
        bannerBody;
    const submitHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('heading', heading);
        myForm.append('subheading', subheading);
        myForm.append('section', sect);
        myForm.append('subsection', subsect);
        myForm.append('link', link);
        myForm.append('button', button);
        myForm.append('image', image);

        await dispatch(createBanner(myForm, sect, subsect));

    };
    const submitUpdateHandler = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('heading', heading);
        myForm.append('subheading', subheading);
        myForm.append('section', sect);
        myForm.append('subsection', subsect);
        myForm.append('link', link);
        myForm.append('button', button);
        myForm.append('image', image);

        await dispatch(updateBanner(myForm, sect, subsect, Id));

    };
    const handleUpdateSequence = async (e, id) => {
        const myForm = new FormData();
        myForm.append('point', e.target.value);
        await dispatch(updateBanner(myForm, sect, subsect, id))

        // dispatch(getDreamsPoint())
    }
    const registerDataChange = (e) => {
        setBannerBody({ ...bannerBody, [e.target.name]: e.target.value });

    };

    const handleDelete = async (e, id, sect, subsect) => {
        e.preventDefault()
        await dispatch(deleteBanner(id, sect, subsect))
        dispatch(getAllBannerInfo())

    }
    const HandleUpdate = async (e, id) => {
        e.preventDefault()

        await setId(id?.id)
        await setPoint(id?.sequence)

        setBannerBody({
            heading: id?.heading,
            subheading: id?.subheading,
            section: id?.section,
            subsection: id?.subsection,
            link: id?.link,
            button: id?.button,
            image: id?.image
        });
        setPrevImage(id?.image)

        setUpdateOpen(true)

    }



    useEffect(() => {


        if (err) {
            toast.error(err);
            dispatch({ type: 'clearError' });
        }

        if (othMessage) {
            toast.success(othMessage);
            dispatch({ type: 'clearMessage' });
            setImage()
            setBannerBody({
                heading: "",
                subheading: "",
                section: "",
                subsection: ""
            })
            setUpdateOpen(false)
            setOpen(false);
            dispatch(getSectionBannerInfo(sect, subsect));
        }
        if (!isAuthenticated) {
            navigate('/login')
        }
        dispatch(getTitle())
        dispatch(getSectionBannerInfo(sect, subsect));
    }, [dispatch, err, othMessage, isAuthenticated]);

    return (
        <>
            <Sidebar>
                <Navbar title="Banner" />
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
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                            <p>Home-Banner</p>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                            <Link to='/banner'>

                                                <p>Banners</p>
                                            </Link>
                                        </a>
                                    </li>

                                    {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
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
                                            <Link to='/banner/others'>
                                                <p>Comebelion Banner</p>
                                            </Link>
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                                    <div className="px-4 flex-auto"></div>
                                    <div className="tab-content tab-space">
                                        <div className="flex justify-end items-center my-4  mx-16  ">
                                            <button
                                                className="hover:shadow-form rounded-md bg-[#2a2938] py-3 px-8 text-base font-semibold text-white outline-none"
                                                onClick={handleClickToOpen}
                                            >
                                                Add New Banner
                                            </button>
                                        </div>
                                        <div class="flex p-2">
                                            <div class="w-full">
                                                <form>
                                                    <div className="flex flex-col my-1 mx-5">
                                                        <div className="">
                                                            <div className="p-1.5 w-full inline-block align-middle">
                                                                <div className="overflow-auto border rounded-lg">
                                                                    <table class="min-w-full">
                                                                        <thead class="border-b">
                                                                            <tr className="bg-slate-400">

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
                                                                                    Section
                                                                                </th>

                                                                                <th
                                                                                    scope="col"
                                                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-2 border-violet-900/40"
                                                                                >
                                                                                    Link to
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
                                                                            {sectionBanner && sectionBanner.map((banners) => (
                                                                                <tr key={banners.id} className="border-b text-center hover:bg-blue-100">
                                                                                    {/* <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 border-2 border-violet-900/40">
                                <p className="w-72 mx-auto">
                                  Tailwind CSS makes it quicker to write and
                                  maintain the code of your application. By using
                                  this utility-first framework, you don't have to
                                  write custom CSS to style your application.
                                </p>
                              </td> */}
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                                        <img
                                                                                            // src={walpaper}
                                                                                            src={`${process.env.REACT_APP_SERVER}/${banners.image}`}
                                                                                            alt=""
                                                                                            className="w-56 h-24 object-fill mx-auto"
                                                                                        />{" "}
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                                        {banners.section}
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                                        {banners.link}
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                                        <select className="w-32 mx-auto"
                                                                                            onChange={(e) => handleUpdateSequence(e, banners.id)}
                                                                                        >
                                                                                            <option hidden='true' value={banners.sequence} > {banners.sequence}</option>
                                                                                            {sequence && sequence.map((data) => (
                                                                                                <option name="value"
                                                                                                    onChange={(e) => handleUpdateSequence(e, banners.id)}
                                                                                                    value={data}>{data}</option>
                                                                                            ))}

                                                                                        </select>
                                                                                    </td>
                                                                                    <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                                        <div className="flex justify-center items-center">
                                                                                            <CiEdit className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => HandleUpdate(e, banners)} />
                                                                                            <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, banners.id, sect, subsect)} />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div></div></div>
                        </div>
                    </div></div>
            </Sidebar>
            {/* Dailog Box */}
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>
                    {<p className="text-xl font-bold">Add New Banner</p>}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="flex p-2">
                            <div class="w-full">
                                <form onSubmit={submitHandler}>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Headline
                                        </label>
                                        <input
                                            type="text"
                                            name="heading"
                                            value={heading}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner heading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Text
                                        </label>
                                        <input
                                            type="text"
                                            name="subheading"
                                            value={subheading}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Link to
                                        </label>
                                        <input
                                            type="text"
                                            name="link"
                                            value={link}
                                            onChange={registerDataChange}
                                            id="email"
                                            // placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Button
                                        </label>
                                        <input
                                            type="text"
                                            name="button"
                                            value={button}
                                            onChange={registerDataChange}
                                            id="email"
                                            // placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    {/* <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Section
                                        </label>
                                        <select
                                            onChange={registerDataChange} name="section"
                                            id="problem_cat"
                                            className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                                        >

                                            <option name="section" onChange={registerDataChange}
                                                value="home">Home</option>

                                        </select>

                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">

                                        <label
                                            for="message"
                                            className="mx-3 my-auto block text-base font-medium sm:whitespace-nowrap text-[#07074D] w-32"
                                        >
                                            Subsection
                                        </label>

                                        <select
                                            onChange={registerDataChange} name="subsection"
                                            id="problem_cat"
                                            className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                                        >

                                            <option name="subsection" onChange={registerDataChange}
                                                value="home">Home</option>


                                        </select>


                                    </div> */}
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Banner Image
                                        </label>
                                        <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                                            {image ? (
                                                <div className="w-full">
                                                    <img
                                                        accept="image/*"
                                                        src={URL.createObjectURL(image)}
                                                        alt=""
                                                        className="object-fill z-40"
                                                    />
                                                    <button
                                                        className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                        onClick={removeSelectedImage}
                                                    >
                                                        remove image
                                                    </button>{" "}
                                                </div>
                                            ) : (
                                                <div>


                                                    <input
                                                        accept="image/*"
                                                        type="file"
                                                        name=""
                                                        id=""
                                                        value={image}
                                                        onChange={imageChange}
                                                        className="text-base z-0 ml-auto"
                                                    />
                                                    <p className="text-sm text-red-600">Image width 1020 x 350 px is preferable</p> </div>

                                            )}
                                        </div>
                                    </div>



                                    <div className="flex justify-center items-center my-7">
                                        <button
                                            disabled={loading}
                                            type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
                        onClick={handleToClose}
                        color="primary"
                        className="font-bold text-3xl"
                    // autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={updateOpen} onClose={handleUpdateToClose}>
                <DialogTitle>
                    {<p className="text-xl font-bold">Update Banner</p>}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="flex p-2">
                            <div class="w-full">
                                <form onSubmit={submitUpdateHandler}>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Headline
                                        </label>
                                        <input
                                            type="text"
                                            name="heading"
                                            value={heading}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner heading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Text
                                        </label>
                                        <input
                                            type="text"
                                            name="subheading"
                                            value={subheading}
                                            onChange={registerDataChange}
                                            id="email"
                                            placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Link to
                                        </label>
                                        <input
                                            type="text"
                                            name="link"
                                            value={link}
                                            onChange={registerDataChange}
                                            id="email"
                                            // placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Button
                                        </label>
                                        <input
                                            type="text"
                                            name="button"
                                            value={button}
                                            onChange={registerDataChange}
                                            id="email"
                                            // placeholder="write your banner subheading here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                    {/* <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Section
                                        </label>
                                        <select
                                            onChange={registerDataChange} name="section"
                                            id="problem_cat"
                                            className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                                        >

                                            <option name="section" onChange={registerDataChange}
                                                value="home">Home</option>

                                        </select>

                                    </div>
                                    <div class="mb-5 flex flex-col sm:flex-row">

                                        <label
                                            for="message"
                                            className="mx-3 my-auto block text-base font-medium sm:whitespace-nowrap text-[#07074D] w-32"
                                        >
                                            Subsection
                                        </label>

                                        <select
                                            onChange={registerDataChange} name="subsection"
                                            id="problem_cat"
                                            className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none text-base p-2 appearance-none focus:border-indigo-600"
                                        >

                                            <option name="subsection" onChange={registerDataChange}
                                                value="home">Home</option>


                                        </select>


                                    </div> */}
                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Banner Image
                                        </label>

                                        <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                                            {image ? (
                                                <div className="w-full">
                                                    <img
                                                        src={URL.createObjectURL(image)}
                                                        alt=""
                                                        accept="image/*"
                                                        className="object-fill z-40"
                                                    />
                                                    <button
                                                        className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                        onClick={removeSelectedImage}
                                                    >
                                                        remove image
                                                    </button>{" "}
                                                </div>
                                            ) : (
                                                <div>
                                                    <input
                                                        type="file"
                                                        name=""
                                                        id=""
                                                        accept="image/*"
                                                        value={image}
                                                        onChange={imageChange}
                                                        className="text-base z-0 ml-auto"
                                                    />
                                                    <p className="text-sm text-red-600">Image width 600 x 500 px is preferable</p> </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center my-7">
                                        <button
                                            disabled={loading}
                                            type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
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
                        onClick={handleUpdateToClose}
                        color="primary"
                        className="font-bold text-3xl"
                    // autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default HomeBaner