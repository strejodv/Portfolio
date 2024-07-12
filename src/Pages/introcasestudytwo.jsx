import casetwomain from './casetwomain.png';
import veganmilk from './veganmilk.jpg';
import insights from './insights.png';
import personas from './personas.png';
import flowmap from './flowmap.png';
import checkout from './checkout.png';
import clearingredients from './clearingredients.png';
import aboutus from './aboutus.png';
import ordering from './ordering.png';



function Introtwo () {

    return (
        
        <div id="introtwo">
            <h1>Website's UX Redesign</h1>
            <h2 className="h2caseotwo">UX designer</h2>
            <p className="paragraphcasetwo">As the UX designer, I focused on solving all of
            the usability issues and revamped the visual style by re-imagining what its like 
            for users with plant-based dietary needs to use a restaurant website to order food.</p>
            <img className="casetwo-imageone" src={casetwomain}></img>
            <h3 className="h3casetwo">Background</h3>
            <p className="paragraphcasetwo">Loving Hut is a global chain of restaurants that serves 
            vegan food. The main idea behind Loving Hut is to encourage people all over the world 
            to eat vegan and provide them with meals that don't harm animals or the environment.</p>
            <h3 className="h3casetwo">Problem Space</h3>
            <h4 className="h4casetwo">Addressing an outdated UI and non-standard UX</h4>
            <p className="paragraphcasetwo">Loving Hut's UI did not align with modern design 
            standards and best practices. Furthermore, the UX didn't adhere to the industry's 
            mental model standards, making it confusing for visitor.</p>
            <h3 className="h3casetwo">Design Challenges</h3>
            <p className="paragraphcasetwo">How do I optimize the ordering experience to 
            provide a seamless and accommodating experience for users with specific dietary 
            requirements?</p>
            <p className="paragraphcasetwo">What steps can I take to bring the visual design of the
             website up to date, aligning it with modern UX and UI trends and ensuring it remains 
             visually engaging and appealing to users?</p>
             <h3 className="h3casetwo">Identifying UX Best Practices</h3>
             <h4 className="h4casetwo">Exploring UX Excellence</h4>
             <p className="paragraphcasetwo">I examined websites from top restaurants and similar 
             businesses known for their modern web design. My aim was to understand the strategies 
             and UX practices they used. I wanted to find out what works well in the restaurant 
             industry in terms of UX.</p>
             <h4 className="h4casetwo">Evaluating UX Against Nielsen's Heuristic Laws</h4>
             <p className="paragraphcasetwo">I did an analysis based on Jakob Nielsen's 
             well-established heuristic laws, which have long been recognized as valuable 
             guidelines for evaluating and improving the usability of user interfaces.</p>
             <img className="casetwo-imageone" src={veganmilk}></img>
             <h3 className="h3casetwo">Understanding User Needs</h3>
             <h4 className="h4casetwo">Uncovering Insights From Restaurant Customers</h4>
             <p className="paragraphcasetwo">I conducted interviews with people who currently 
             visit the restaurant and those who might consider dining there in the future. 
             This step helped me understand what customers like, how they behave, and what 
             difficulties they face when using restaurant websites.</p>
             <h4 className="h4casetwo">Gathering Insights on Online Dining Preferences</h4>
             <p className="paragraphcasetwo">Besides talking to users directly, I also asked 
             a wide range of people to fill out surveys.  I wanted to find out what people 
             like about restaurant websites, how they want these websites to look, and what 
             kind of information they want to find when they visit them.</p>
             <img className="casetwo-imageone" src={insights}></img>
             <h3 className="h3casetwo">Strategy</h3>
             <h4 className="h4casetwo">Shaping Design With User Insights</h4>
             <p className="paragraphcasetwo">To make sure my design process is well-informed 
             and on the right track, I created fictional user profiles. These profiles were 
             based on the information I collected from our talks with users and the surveys 
             and they acted as stand-ins for real users. They reminded me what the target 
             audience needs and likes.</p>
             <h4 className="h4casetwo">Streamlining Structure and Navigation</h4>
             <p className="paragraphcasetwo">I set my mind to improve how the website is
              organized. I made a new plan for how the website's content is organized, 
              and I created a user-friendly way for people to move around the site.</p>
                <div>
                    <img className="sideimg" src={personas}></img>
                    <img className="sideimg" src={flowmap}></img>
                </div>
            <h3 className="h3casetwo">Design</h3>
            <h4 className="h4casetwo">Crafting - User Centric Designs</h4>
            <p className="paragraphcasetwo">I focused on creating designs that included
             modern design elements, making the website look up-to-date and visually 
             appealing. I also paid special attention to where I put menus, ordering options, 
             and important features like the search function. My goal was to make it easy 
             for users to find what they need and interact with the website in an intuitive way.</p> 
             <h4 className="h4casetwo">Crafting Cohesive and Brand-Aligned User Interface</h4>
             <p className="paragraphcasetwo">I paid special attention to things like colors, 
             fonts, icons, and pictures. My aim was to make the website not only look nice 
             but also have a consistent and well-organized design</p>
                <div>
                    <img className="sideimg2" src={personas}></img>
                    <img className="sideimg2" src={flowmap}></img>
                    <img className="sideimg2" src={flowmap}></img>
                </div>
            <h4 className="h4casetwo">Bringing the User Experience to life</h4>
            <p className="paragraphcasetwo">I made detailed and interactive examples 
            of how the website should work. These examples act like a real version of the 
            website, so I can see how users would interact with it. By doing this, I found 
            problems with how the website worked and areas where we could make it better.</p>
            <h3 className="h3casetwo">Solution</h3>
            <h4 className="h4casetwo">Ordering Online Feature</h4>
            <img className="casetwo-imageone" src={checkout}></img>
            <h4 className="h4casetwo">Clear ingredient information and allergen labels</h4>
            <img className="casetwo-imageone" src={clearingredients}></img>
            <h4 className="h4casetwo">About Us page to establish trust and credibility</h4>
            <img className="casetwo-imageone" src={aboutus}></img>
            <h4 className="h4casetwo">Career page for job seekers</h4>
            <img className="casetwo-imageone" src={ordering}></img>
            <footer className="footer-hometwo">STEFANO TREJO</footer>
        </div>
        
    );
}

export default Introtwo