import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>This page is not found!</p>
            <Link to='/'> Go to homepage...</Link>
        </div>
    );
}
 
export default NotFound;