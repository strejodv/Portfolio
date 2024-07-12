import { Link } from "react-router-dom";

    function Standardnav () {

        return (
            
            
            <nav id="standard-nav">
                <ul className="standard-nav-ul">
                    <li><Link to="/">PROJECTS</Link></li>
                    <li><Link to="/strejodv.github.io/about">ABOUT</Link></li>
                    <li><a href="https://github.com/strejodv">GITHUB</a></li>
                    <li><a href="https://www.linkedin.com/in/stefanotrejo/">LINKEDIN</a></li>
                </ul>
            </nav>
        
            
        );
    }
    
    export default Standardnav