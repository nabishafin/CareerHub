import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const Jobdetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const currentId = parseInt(id)
    const details = jobs.find(job => job.id === currentId)

    const handleApplyJob = () => {
        saveJobApplication(currentId);
        toast('you have applid sucsessfully')
    }

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="font-bold">
                <h1 className="lg:text-4xl p-5">Job Details</h1>
            </div>
            <div className=" grid md:grid-cols-4 gap-4">
                <div className="  md:col-span-3">
                    <div className=" font-bold p-6">
                        <p> Job Title: Frontend Developer</p>
                        <p>    Location: [City, State/Country]</p>
                        <p> Company Description:
                            [Insert brief description of the company and its mission.]</p>
                        <p>
                            Job Description:
                            We are seeking a talented Frontend Developer to join our dynamic team. The ideal candidate should have a passion for creating innovative, user-friendly interfaces and experiences. You will be responsible for translating design mockups and wireframes into high-quality code, collaborating closely with our design and backend teams to deliver seamless frontend solutions.
                        </p>
                        <p>
                            Responsibilities:

                            Develop responsive and visually appealing frontend components and features using HTML, CSS, and JavaScript frameworks (e.g., React, Angular, Vue.js).
                            Collaborate with designers to implement pixel-perfect designs, ensuring consistency across different browsers and devices.
                            Optimize frontend performance to deliver fast and smooth user experiences.
                            Conduct thorough testing and debugging to identify and fix issues promptly.
                        </p>


                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold p-2"> Tittle : {details.job_title}</h1>
                        <h3 className="text-xl font-bold  p-2"> company: {details.company_name}</h3>
                        <h5 className="font-bold p-2"> location : {details.remote_or_onsite}</h5>
                    </div>
                    <div className=" lg:mt-40">
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply-Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>



        </div>
    );
};

export default Jobdetails;