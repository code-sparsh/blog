import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>Page is not Found</p>
            <Link to="/">Back to the Home page....</Link>
        </div>
     );
}
 
export default NotFound;