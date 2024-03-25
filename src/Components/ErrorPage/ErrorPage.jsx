import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Ooops!!</h2>
            <br />
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;