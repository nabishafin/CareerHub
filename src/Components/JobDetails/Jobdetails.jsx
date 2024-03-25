import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobdetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const currentId = parseInt(id)
    const details = jobs.find(job => job.id === currentId)

    const handleApplyJob = () => {
        toast('you have applid sucsessfully')
    }

    return (
        <div>
            <div>
                <h1>Job Details</h1>
            </div>
            <div className=" grid md:grid-cols-4 gap-4">
                <div className=" border md:col-span-3">
                    <h2>details</h2>
                </div>
                <div className="border md:col-span-1">
                    <h1>job details</h1>
                    <div>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply-Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>



        </div>
    );
};

export default Jobdetails;