import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobAplication } from "../Utility/LocalStorage";
import { list } from "postcss";


const AppliedJobs = () => {

    const [appliedJobs, setappliedJobs] = useState([]);
    const [displayjob, setdisplayjob] = useState([]);


    const jobs = useLoaderData();
    useEffect(() => {
        const storeApliedjob = getStoreJobAplication();
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storeApliedjob.includes(job.id));
            setappliedJobs(appliedJobs);
            setdisplayjob(appliedJobs);
        }
    }, [])

    const handleDisplayjob = filter => {
        if (filter === 'all') {
            setdisplayjob(appliedJobs);
        }
        else if (filter === 'remote') {
            const remotejobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setdisplayjob(remotejobs);
        }
        else if (filter === 'on-site') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setdisplayjob(onsite);
        }

    }

    return (
        <div>
            <div className="flex justify-between m-6">
                <h2 className=" font-bold text-xl"> Applied Jobs : {appliedJobs.length}</h2>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                        <li onClick={() => handleDisplayjob('all')}><a>All</a></li>
                        <li onClick={() => handleDisplayjob('remote')}><a>Remote</a></li>
                        <li onClick={() => handleDisplayjob('on-site')}><a>On-site</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayjob.map(job =>
                        <ul className="flex justify-between  p-3 m-4 items-center shadow-xl ">
                            <div className="mt-5">
                                <img src={job.logo} alt="" />
                            </div>
                            <div className="p-4">
                                <h1 className="text-green-900">{job.job_title}</h1>
                                <h1 className="">{job.company_name}</h1>
                            </div>
                            <div className="mt-4">
                                <p className="bg-green-500 rounded-md p-1 ">{job.remote_or_onsite}</p>
                            </div>
                        </ul>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;