import profileImage from './jpgfromlgUI-131.jpg'
import { Link } from "react-router-dom";


function Navtwo () {

    return (
        
        <div id="top-imagetwo">
            <nav id="nav-two">
                <ul className="ul-two">
                    <li><Link to="/">PROJECTS</Link></li>
                    <li><Link to="/strejodv.github.io/about">ABOUT</Link></li>
                    <li><a href="https://github.com/strejodv">GITHUB</a></li>
                    <li><a href="https://www.linkedin.com/in/stefanotrejo/">LINKEDIN</a></li>
                </ul>
            </nav>
            <div id="hero-sectiontwo">
                <div className="hero-text">
                    <h1 id="h1">Who is this guy anyways?</h1>
                        <p id="texttwo">My name is Stefano Trejo, I'm a junior front-end developer with a background in UX / Interactive and Graphic Design, plus over two
                            years of sales experience. I’m skilled in React, JavaScript, HTML, CSS, Tailwind, and Bootstrap. I truly enjoy
                            learning new technologies and skills, and I love combining design and development to solve business
                            challenges. I'm ambitious and eager to prove myself as a dedicated developer and designer.
                        </p>
                        <p id="texttwo">Outside of the professional environment, I'm passionate about sports, 
                        technology, photography, and video games. Over the past few months, I've been delving into 
                        wildlife photography, though I'm eager to explore other genres as well. Soccer has been a 
                        lifelong passion—I've played at a competitive level for as long as I can remember, 
                        so you'll often find me on the soccer field in my free time, unless I'm 
                        playing table tennis at a nearby center, of course. During my college years, 
                        I discovered table tennis and quickly became competitive in it too. 
                        As I mentioned earlier, I'm a sports enthusiast, and while I may 
                        not compete in them all, I also enjoy activities like chess, swimming, and volleyball.</p>
                        <p id="texttwo"></p>
                </div>
                <div className="hero-image-div">
                        <img className="profile-img" src={profileImage}></img>
                </div>        
      </div>
      <footer className="footer-hometwo">STEFANO TREJO</footer>
        </div>
        
    );
}

export default Navtwo