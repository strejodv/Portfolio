import { Link } from "react-router-dom";


function Nav () {

    return (
        
        <div id="top-image">
            <nav id="navbar">
                <ul>
                    <li><Link to="/Portfolio/">PROJECTS</Link></li>
                    <li><Link to="/strejodv.github.io/about">ABOUT</Link></li>
                    <li><a href="https://github.com/strejodv">GITHUB</a></li>
                    <li><a href="https://www.linkedin.com/in/stefanotrejo/">LINKEDIN</a></li>
                </ul>
            </nav>
            <div id="hero-section">
                <h1 id="h1">Stefano Trejo</h1>
                <p id="texttwo">Front-end / UX design</p>
                <button id="button" onClick={() => window.location.href = "https://github.com/strejodv"}>Github</button>
      </div>
        </div>
        
    );
}

export default Nav

