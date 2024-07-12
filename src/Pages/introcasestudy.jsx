import Subheader from "./subheader";
import Introduction from './Introduction.png';
import Oldtac from './Oldtac.png';
import Features from './Features.png';
import Researchcaseone from './Researchcaseone.png';
import Wireframescaseone from './Wireframescaseone.png';
import Visualdesigncaseone from './Visualdesigncaseone.png';
import Solutioncaseone from './Solutioncaseone.png';
import Layoutcaseone from './Layoutcaseone.png';
import Beforeaftercaseone from './Beforeaftercaseone.png';
import Beforeafterchat from './Beforeafterchat.png';
import Beforeafterhint from './Beforeafterhint.png';
import Beforeafterfinal from './Beforeafterfinal.png';

function Introone () {

    return (
        
        <div id="introone">
            <h1>UI Redesign</h1>
            <h2 className="h2caseoone">UX designer</h2>
            <img className="intro-casestudy" src={Introduction}></img>
            <h3 className="h3caseone">Overview</h3>
            <h4 className="h4caseone">Background</h4>
            <p className="paragraphcaseone">TAC AI is an in-house application designed to assist police officers in training 
                non-violent communication skills through an AI-driven conversation format 
                The stakeholder had already conducted user research, requested a redesign of the UI/Visual 
                design to incorporate new features derived from the research insights.</p>
            <h4 className="h4caseone">Solution</h4>
            <li className="licasestudyone">
                I created low-fidelity wireframes and conducted user testing to design the optimal layout for the main screen,
                ensuring an optimal user experience.
            </li>
            <li className="licasestudyone">
            I developed a small fraction of a new design system for the app, encompassing the color palette, typography, icons, 
            and components. This serves as the foundation for many more elements that will be integrated into the application as 
            it evolves over time.
            </li>
            <li className="licasestudyone">
            I redesigned each screen's UI by simplifying and organizing its content.
            </li>
            <h4 className="h4caseone">Role</h4>
            <p className="paragraphcaseone">I spearheaded this project independently, taking charge of concept development, 
            brainstorming, UI design, and user testing.</p>
            <h3 className="h3caseone">Discovery / Research Time</h3>
            <h4 className="h4caseone">1. Getting to know the app's current state</h4>
            <p className="paragraphcaseone">After receiving the initial message from the client, along with a brief 
            and examples of the app's current state, I reviewed the screens. My goal was to grasp the existing visual design, 
            including layout, color scheme, typography, and overall visual elements, as well as any additional 
            information that could provide a clearer understanding of the app.</p>
            <img className="caseone-imagetwo" src={Oldtac}></img>
            <h4 className="h4caseone">2. First meeting with client</h4>
            <p className="paragraphcaseone">Had a meeting with the client to gain a better understanding of their expectations 
            for the visual redesign and the overall scope of their product, allowing for more informed design decisions.</p>
            <h4 className="h4caseone">Outcome</h4>
            <p className="paragraphcaseone">The client had a clear idea of the features users needed to ensure an intuitive and 
            optimal experience, formulated from insights gathered in previous user research conducted before my involvement in 
            the project. Despite having clarity on the required features, the client expressed a desire to experiment with a 
            different layout for the main screen (focus screen). Additionally, no design system had been established for the 
            app at that point.</p>
            <img className="caseone-imagetwo" src={Features}></img>
            <h4 className="h4caseone">Research</h4>
            <p className="paragraphcaseone">I examined other chatbots in the industry to understand the prevailing design trends 
            and standards in the industry. This knowledge ensures that the redesigned UI aligns with user expectations and 
            industry norms.</p>
            <img className="caseone-imagetwo" src={Researchcaseone}></img>
            <h4 className="h4caseone">Conclusion</h4>
            <p className="paragraphcaseone">I was able to identify best practices and successful strategies in UI design for 
            AI chatbots. This can include effective conversational flows, clear user prompts, and optimal use of visual elements.</p>
            <h3 className="h3caseone">Ideation</h3>
            <h4 className="h4caseone">4. Brainstorming Information Architecture</h4>
            <p className="paragraphcaseone">Given the absence of time constraints, I opt for conducting user testing on hi-res screens. 
            Following the analysis of the collected data, my objective was to create low-fidelity wireframes that would serve as guides 
            for the high-res designs.</p>
            <h4 className="h4caseone">How I approached the wireframes process</h4>
            <p className="paragraphcaseone">The app currently only has the login screen alongside the main screen (conversation screen). 
            To determine the optimal placement for the new features, after sketching tens of solutions I opted to proceed with two layouts 
            and turn them into low-fidelity wireframes. This approach allowed me to, later on, incorporate new visual design elements and 
            produce high-res versions of the screens. I did this so that I could conduct an A/B test to identify the most effective layout.</p>
            <img className="caseone-imagetwo" src={Wireframescaseone}></img>
            <h3 className="h3caseone">Design</h3>
            <h4 className="h4caseone">5. Designing the visual design</h4>
            <p className="paragraphcaseone">Worked on the visual elements for the app, including typography, fonts, and foundational components 
            that will shape the future design system.</p>
            <img className="caseone-imagetwo" src={Visualdesigncaseone}></img>
            <h4 className="h4caseone">How I choose the components</h4>
            <p className="paragraphcaseone">When choosing the color palette for the app, the selected colors reflect calmness and an inclusive, 
            positive tone. This is important as the app focuses on providing assistance in learning non-violence, aiming to help people connect
            empathetically with themselves and others. Together, the colors create a harmonious and comfortable environment that supports the principles 
            of non-violence communication.</p>
            <h4 className="h4caseone">6. Working on high-res wireframes</h4>
            <p className="paragraphcaseone">Once I completed the visual design, I was ready to tackle the task of 
            creating a high-resolution version of the wireframes I had worked on, allowing me to test both 
            solutions.</p>
            <h4 className="h4caseone">Outcomes</h4>
            <p className="paragraphcaseone">When considering the two solutions, my focus in determining the layout centered on two key aspects: ensuring that 
            users could easily access the features and optimizing the flows for speed. In the first solution, the features 
            are positioned at the upper part of the screen, which might pose a challenge for users with small hands, 
            although accessibility shouldn't be a significant issue for most users. The second solution situates the 
            features closer to the thumb but conceals them behind a single button to maintain UI coherence during 
            interactions with the bot. This makes the second solution easier to access but potentially longer to execute. 
            The ultimate determination of which solution works best was based on insights gathered from user testing.</p>
            <img className="caseone-imagetwo" src={Solutioncaseone}></img>
            <h3 className="h3caseone">Testing</h3>
            <h4 className="h4caseone">7. A-B Testing</h4>
            <p className="paragraphcaseone">After creating high-fidelity wireframes, I proceeded to prototype 
            the two design solutions. Employing a pool of 25 users, I conducted usability testing to evaluate 
            the conversion rates of the two layouts.</p>
            <h4 className="h4caseone">Conclusion</h4>
            <p className="paragraphcaseone">After conducting user testing for several weeks, I gathered 
            sufficient insights from the conversion rates to determine the best solution. Solution one, 
            featuring the button behind a Floating Action Button (FAB), exhibited a lower conversion rate 
            of 28.00%. On the contrary, the second solution, placing the button in the upper part of the layout, 
            demonstrated a higher conversion rate of 72.00%.</p>
            <button className="buttoncaseone">Prototype</button>
            <img className="caseone-imagetwo" src={Layoutcaseone}></img>
            <h3 className="h3caseone">Final Design</h3>
            <h4 className="h4caseone">8. Mockups and Presenting to the Stakeholder</h4>
            <p className="paragraphcaseone">After completing the testing phase, I proceeded to create 
            polished mockups and scheduled another meeting to present the data along with the finalized designs.</p>
            <h4 className="h4caseone">Conclusion</h4>
            <p className="paragraphcaseone">Once the final design was presented to the stakeholder,
             we reached an agreement to continue meeting in the future to iterate and enhance the overall 
             user experience of the app.</p>
             <img className="caseone-imagetwo" src={Beforeaftercaseone}></img>
             <img className="caseone-imagetwo" src={Beforeafterchat}></img>
             <img className="caseone-imagetwo" src={Beforeafterhint}></img>
             <img className="caseone-imagetwo" src={Beforeafterfinal}></img>
             <footer className="footer-hometwo">STEFANO TREJO</footer>
        </div>
        
    );
}

export default Introone