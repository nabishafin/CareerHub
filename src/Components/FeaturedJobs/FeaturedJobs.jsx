import { useEffect, useState } from "react";
import Job from "../job/Job";
const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([]);
    console.log(jobs)

    const [dataLength, sedataLengtht] = useState(4)

    const HandleDataLength = () => {
        sedataLengtht(jobs.length)
    }

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(res => setjobs(res))
    }, [])

    return (
        <div className="text-center ">
            <div>
                <h2 className="md: text-3xl font-bold lg:text-6xl">Featured Job:{jobs.length}</h2>
                <p className=" md:font-bold lg:text-3xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=" grid md:grid-cols-2 gap-6  sm: grid-cols-1 m-10 md:m-20 w-auto ">
                {
                    jobs.slice(0, dataLength).map(job =>
                        <Job
                            job={job}
                            key={job.id}
                        ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={HandleDataLength} className=" btn btn-primary m-6">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;