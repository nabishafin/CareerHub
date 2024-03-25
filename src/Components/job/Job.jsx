import { CiLocationOn } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job;



    return (
        <div>
            <div className="card  bg-base-100 border shadow-xl p-4">

                <figure><img src={logo} alt="Shoes" /></figure>

                <div className="card-body ">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 border rounded border-[#7E90FE] mr-4
                         text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 border rounded border-[#7E90FE] mr-4  text-[#7E90FE]" >{job_type}</button>
                    </div>
                    <div className="mt-4 flex justify-between ">
                        <h2 className="flex "><CiLocationOn className="text-xl mt-1"></CiLocationOn> <span className="mr-2 text-lg ">{location}</span></h2>
                        <h2 className="flex"><BiDollar className="text-xl mt-1" ></BiDollar> <span className="mr-2 text-lg sm:text-sm ">{salary}</span></h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">View-Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;