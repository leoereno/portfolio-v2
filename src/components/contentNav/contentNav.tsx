import { NavLink } from "react-router"
import './contentNav.css';

export default function ContentNav () {
    return(
        <div className="content-nav">
            <NavLink to={{pathname:"/tools"}} className="btn-nav">Tools</NavLink>
            <NavLink to={{pathname:"/skills"}} className="btn-nav">Skills</NavLink>
            <NavLink to={{pathname:"/about-me"}} className="btn-nav">About Me</NavLink>
        </div>
    );
}