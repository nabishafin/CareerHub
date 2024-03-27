import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobAplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();


    return (
        <div>
            job i applied
        </div>
    );
};

export default AppliedJobs;