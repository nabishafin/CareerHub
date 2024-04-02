import { useState } from "react";
import jobs from "../../../public/categories.json"
import CategoryJob from "../CategoryJob/CategoryJob";


const CategoryList = () => {
    const [jobsinfo, setjobsinfo] = useState(jobs)



    return (
        <div className="text-center  bg-emerald-100  ">
            <h2 className="md: text-3xl font-bold lg:text-6xl">Jobs Category List</h2>
            <div>
                <p className=" md:font-bold lg:text-3xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:mx-16 ">
                {
                    jobsinfo.map(jobinfo =>
                        <CategoryJob
                            jobinfo={jobinfo}
                            key={jobinfo.id}
                        ></CategoryJob>)
                }
            </div>

        </div >
    );
};

export default CategoryList;