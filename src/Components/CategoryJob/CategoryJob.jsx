import React from 'react';

const CategoryJob = ({ jobinfo }) => {
    const { logo, category_name, availability } = jobinfo

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl md: mx-11 md: my-4 ">
                <figure className="px-10 pt-10">
                    <img src={logo} className="rounded-xl  mx-auto" />
                </figure>
                <div className="card-body items-center text-center font-bold">
                    <h2 className=" text-2xl">{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div >
    );
};

export default CategoryJob;