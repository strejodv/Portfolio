import cardOne from './cardOne.png'
import cardTwo from './cardTwo.png'
import cardThree from './cardThree.png'
import { Link } from "react-router-dom";



function Card() {

return(

<div id="card-group">
    <div className="card">
        <Link to="/projectone"><img className="card-img" src={cardOne}></img></Link>
        <h2>AI Chat Bot</h2>
        <p>Design process for an AI chatbot app that helps users train 
            in non-violent communication.
        </p>
    </div>

    <div className="card">
        <Link to="/projecttwo"><img className="card-img" src={cardTwo}></img></Link>
        <h2>Website Redesign</h2>
        <p>A demonstration of my approach to redesigning the UX 
            for a restaurant's website.
        </p>
    </div>

    <div className="card">
        <Link to="/projectthree"><img className="card-img" src={cardThree}></img></Link>
        <h2>New Feature</h2>
        <p>The way I would tackle adding a new necessary feature for the Instagram app.
        </p>
    </div>

    </div>
    

);

}

export default Card