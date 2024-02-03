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
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import { useDispatch, useSelector } from "react-redux";
import { createCollateralPdf, createResource, deleteCollateralPdf, deleteResource, getCollateralPDF, getResource } from "../../redux/action/resources/resource";
import { getDescriptionPoint, updateDescriptionPoint } from "../../redux/action/description/description";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { getTitleInfo, updateTitleInfo } from "../../redux/action/others/others";
import Sidebar from "../../sidebar/sidebar";

const CollateralPDF = () => {
    const dispatch = useDispatch()
    const [openTab, setOpenTab] = useState(4);
    const [open, setOpen] = useState(false);
    const [heading, setHeading] = useState(false);
    const [visionDailog, setVisionDailog] = useState(false);
    const [Id, setId] = useState(3)
    const [image, setImage] = useState()
    const [Pdf, setPDF] = useState()
    const [point, setPoint] = useState("")
    const { loading, points, error: err, pdf, message: resMessage } = useSelector((state) => state.resource)

    const handleClickToOpen = () => {
        setOpen(!open);
    };

    const handleToClose = () => {
        setOpen(!open);
    };


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };
    const pdfChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setPDF(e.target.files[0]);
        }
    };

    const removeSelectedPdf = () => {
        setPDF();
    };



    const [Topic, setTopic] = useState(false);
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector((state) => state.auth)

    const [detail, setDetail] = useState({
        title: "",
    })
    const { title } = detail;

    const descriptionDataChange = (e) => {

        setDetail({ ...detail, [e.target.name]: e.target.value });

    };

    const submitPDF = async (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('title', title);
        myForm.append('image', image);
        myForm.append('pdf', Pdf);

        await dispatch(createCollateralPdf(myForm));

    };

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deleteCollateralPdf(id))
        dispatch(getCollateralPDF())

    }
    useEffect(() => {


        if (!isAuthenticated) {
            navigate('/login')
        }




        if (err) {
            toast.error(err);
            dispatch({ type: 'clearError' });
        }

        if (resMessage) {
            toast.success(resMessage);
            dispatch({ type: 'clearMessage' });
            setImage()
            setDetail({
                title: "",
            })
            setPDF()
            setImage()
            setOpenTab(false)
            // setVisionDailog(false)
            setOpen(false);
            dispatch(getCollateralPDF())
        }

        dispatch(getResource(Id))
        dispatch(getCollateralPDF())
    }, [dispatch, err, resMessage, isAuthenticated]);

    return (
        // <>
        //   {loading || load ? (
        //     <Loader />
        //   ) : (

        <>
            <Sidebar>
                <Navbar title="Resource" />
                <div className="flex h-full scroll-smooth">
                    <div className="w-full h-full">

                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap md:flex-nowrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5"
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
                                            <Link to='/resources'>
                                                <p className=" px-5 py-3 whitespace-nowrap">Overview</p>
                                            </Link>
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
                                            <Link to='/resources/operational_resources'>
                                                <p className=" px-5 py-3 whitespace-nowrap">Operational Resources</p>
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 text-center">
                                        <a
                                            className={
                                                "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
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
                                            <Link to='/resources/collaterls'>   <p className=" px-5 py-3 whitespace-nowrap">Collateral</p></Link>
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
                                            <Link to='/resources/collaterlsPDF'>   <p className=" px-5 py-3">Collaterals PDF</p></Link>
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                                    <div className="px-4 py-4 flex-auto ml-auto">
                                        <button
                                            className="hover:shadow-form rounded-md bg-[#2a2938] ml-0 py-3 px-8 text-base font-semibold text-white outline-none"
                                            onClick={handleToClose}
                                        >
                                            Add  Pdf
                                        </button>
                                    </div>

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
                                                                        Title
                                                                    </th>
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
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {pdf && pdf.map((document) => (
                                                                    <tr key={document.id} className="border-b text-center hover:bg-blue-100">

                                                                        <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                            {document.title}
                                                                        </td>

                                                                        <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                            <img

                                                                                src={`${process.env.REACT_APP_SERVER}/${document.image}`}
                                                                                alt=""
                                                                                className="w-56 h-24 object-fill mx-auto"
                                                                            />{" "}
                                                                        </td>
                                                                        {/* <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                            {document.subsection}
                                                                        </td> */}
                                                                        <td className="text-sm text-gray-900 font-roboto font-medium px-6 py-4 whitespace-nowrap border-2 border-violet-900/40">
                                                                            <div className="flex justify-center items-center">
                                                                                <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" onClick={(e) => handleDelete(e, document.id)} />
                                                                                {/* <MdDeleteOutline className="w-8 h-8 mx-2 cursor-pointer" /> */}
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
                                </div></div>
                        </div></div></div>
            </Sidebar >

            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>
                    {<p className="text-xl font-bold">Add PDF</p>}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div class="flex p-2">
                            <div class="w-full">
                                <form onSubmit={submitPDF}>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={title}
                                            onChange={descriptionDataChange}
                                            id="email"
                                            placeholder="write your pdf Title here..."
                                            class="w-4/5 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Image
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
                                                    <p className="text-sm text-red-600">Image width 600 x 500 px is preferable</p> </div>
                                            )}
                                        </div>
                                    </div>

                                    <div class="mb-5 flex flex-col sm:flex-row">
                                        <label
                                            for="email"
                                            class="mx-3 my-auto block text-base font-medium text-[#07074D] w-32"
                                        >
                                            Pdf
                                        </label>
                                        <div className="w-4/5 min-h-44 p-4 overflow-clip  border-2 border-gray-700 flex flex-col justify-center items-center">
                                            {Pdf ? (
                                                <div className="w-full">
                                                    <img
                                                        accept="image/*"
                                                        src={URL.createObjectURL(Pdf)}
                                                        alt=""
                                                        className="object-fill z-40"
                                                    />
                                                    <button
                                                        className="text-base p-2 m-2 bg-red-800/80 rounded-xl text-white"
                                                        onClick={removeSelectedPdf}
                                                    >
                                                        remove Pdf
                                                    </button>{" "}
                                                </div>
                                            ) : (
                                                <div>
                                                    <input
                                                        accept="*"
                                                        type="file"
                                                        name=""
                                                        id=""
                                                        value={Pdf}
                                                        onChange={pdfChange}
                                                        className="text-base z-0 ml-auto"
                                                    />
                                                    <p className="text-sm text-red-600"></p> </div>
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
        </>
        //   )}

        // </>
    );
};

export default CollateralPDF;
