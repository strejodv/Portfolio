import casetwomain from './casetwomain.png';
import mainthree from './mainthree.jpg';
import colorful from './colorful.png';
import wireframethreeone from './wireframethreeone.jpg';
import flowthreeone from './flowthreeone.jpg';
import wireframesthreefinal from './wireframesthreefinal.jpg';
import insightsthree from './insightsthree.png';
import finalthree from './finalthree.png';


function Introthree () {

    return (
        
        <div id="introthree">
            <h1>New feature for Instagram</h1>
            <h2 className="h2caseothree">UX designer</h2>
            <img className="casethree-imageone" src={mainthree}></img>
            <h3 className="h3casethree">Overview</h3>
            <h4 className="h4casethree">Background</h4>
            <p className="paragraphcasethree">It's inconvenient not to have the ability to add a photo to an existing carousel.
             As an avid Instagram user, I occasionally encounter an old photo that I forgot to include 
             in a carousel I posted in the past. It's inconvenient not to have the option to add this 
             photo later to the original carousel.</p>
             <h4 className="h4casethree">Role</h4>
             <p className="paragraphcasethree">I spearheaded this project independently, 
             taking charge of concept development, brainstorming, user research, UX design, 
             and user testing.</p>
             <h3 className="h3casethree">Discovery</h3>
             <h4 className="h4casethree">User Validation</h4>
             <p className="paragraphcasethree">Does adding this feature actually improve the user experience? 
             I sought proof that others shared my annoyance, aiming to eliminate personal bias and confirm that 
             the feature aimed to enhance the experience for all users. I read numerous opinions on social media and 
             forums from app users.</p>
             <img className="casethree-imageone" src={colorful}></img>
             <h4 className="h4casethree">Conclusion</h4>
             <p className="paragraphcasethree">While reviewing numerous comments, I came across 
             a high volume of users requesting the same feature, in other words, 
             'saturation,' which is exactly what I was looking for.</p>
             <h3 className="h3casethree">Design</h3>
             <h4 className="h4casethree">Optimizing User Flows</h4>
             <p className="paragraphcasethree">Looking for the right location for the new 
             feature Once tasked with designing the feature, I focused on seamlessly 
             integrating it into the existing UI, aiming to ensure the new option's optimal 
             placement. My desired outcome for the new feature was:</p>
             <li className="licasestudyone">
             For the option to be easily found.
            </li>
            <li className="licasestudyone">
            To accomplish task quickly.
            </li>
            <li className="licasestudyone">
            For the process to be intuitively.
            </li>
            <p className="paragraphcasethree">I analyzed three user flows to find the most 
            efficient way to find and upload photos to an existing carousel.</p>
            <h4 className="h4casethree">User Flow 1</h4>
            <p className="paragraphcasethree">Six steps, with the feature placed in the 
            same menu as the 'Edit' button, potentially aiding users intuitively. However, 
            users might expect to find it within the 'Edit' button.</p>
            <h4 className="h4casethree">User Flow 2</h4>
            <p className="paragraphcasethree">The fastest with five steps, featuring the
             'Add Photo' option on the photo itself. The challenge is its brief appearance, 
             risking user oversight and potential interference with the existing UI. Users 
             might anticipate finding this option under the 'Edit' button.</p>
            <h4 className="h4casethree">User Flow 3</h4>
            <p className="paragraphcasethree">Seven steps, placing the feature within the 
            'Edit' functionality where users typically edit carousel text. Despite being 
            the longest, it might be the most intuitive, considering the context. However, 
            users might overlook the button on the photo designed primarily for text editing.</p>
                <div>
                    <img className="sideimgthree" src={wireframethreeone}></img>
                    <img className="sideimgthree" src={flowthreeone}></img>
                </div>
            <h4 className="h4casethree">Conclusion</h4>
            <p className="paragraphcasethree">Analyzed user flows, considering pros and cons. 
            Identifying the fastest was easy, but determining the most intuitive was challenging.
            Concluded user testing was the best approach, focusing on a detailed test of 
            selected user flow. Discarded User Flow 2 due to UI contradiction, opting for a 
            flow placing the feature in the 'Edit' menu with an added option inside the
            'Edit' button for minimal steps. Post-testing, observed behavior to decide if 
            dual locations were necessary.</p>
            <h4 className="h4casethree">New Screens and UI Approach</h4>
            <p className="paragraphcasethree">Options for new screens aim for minimal 
            disruption to the current UI state. Most screens in the flow will maintain
             the existing UI, except for the addition of options, requiring only a small 
             yet crucial tweak. A preference for low-fidelity wireframes persists, serving 
             as a guide to identify potential roadblocks in the iterative solution.</p>
            <img className="casethree-imageone" src={wireframesthreefinal}></img>
            <h3 className="h3casethree">User Testing</h3>
            <h4 className="h4casethree">Prototyping and User Testing</h4>
            <p className="paragraphcasethree">Gathering insights from user testing. Once I 
            finished analyzing the insights, I began working on creating a prototype with a 
            feel identical to the real Instagram app. I conducted user testing on high-fidelity
            wireframes.</p>
            <img className="casethree-imageone" src={insightsthree}></img>
            <button className="buttoncasethree">Prototype</button>
            <h4 className="h4casethree">Conclusion</h4>
            <p className="paragraphcasethree">In the initial user testing round, 
            I acknowledged a mistake on the home page screen, where multiple options 
            overwhelmed users. Despite valuable insights, I took responsibility for any 
            user confusion and committed to refining the home page for a second testing round. 
            In this subsequent round, users seamlessly added photos to carousels, indicating an 
            intuitive experience. Insights led to the decision to exclude the option to add a 
            photo within the 'edit' feature, as users didn't exhibit a preference for clicking 
            'edit' before accessing the carousel addition option in the dropdown menu.</p>
            <h3 className="h3casethree">Back To Design</h3>
            <p className="paragraphcasethree">After completing user testing and 
            analyzing insights, I felt confident about the chosen location for the 
            feature within the app. Here is a map outlining the user journey.</p>
            <img className="casethree-imageone" src={finalthree}></img>
            <footer className="footer-hometwo">STEFANO TREJO</footer>
        </div>
        
    );
}

export default Introthree