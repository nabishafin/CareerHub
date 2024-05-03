import pic from "../../../public/user.png"
const Banner = () => {
    return (
        <div className="grid grid-cols-2 rounded ">
            <div className=" p-6 mx-auto my-auto ml-4">
                <h1 className="sm:text-2xl md:text-5xl font-bold">CareerJob</h1>
                <p className=" mt-5 md:text-xl font-bold">The future belongs to those who believe in the beauty of their dreams.</p>
            </div>
            <div className="">
                <img src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;