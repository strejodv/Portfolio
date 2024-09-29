import Landingpage from './components/Landingpage';
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'

function App() {

  return (
    <div className='container'>
        {/*stars container */}
        <Navbar />

        {/*stars container */}
      <div className="stars">
        
        {/* Stars inside the .stars container */}
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

        {/* Nebula elements */}
        <div className="nebula"></div>
        <div className="nebula"></div>
        <div className="nebula"></div>
        <div className="nebula"></div>
        <div className="nebula"></div>
        <div className="nebula"></div>
        <div className="nebula"></div>
        
        
      
        {/* Your landing page component */}
        <Herosection />
        <Landingpage />
    </div>
  )
}

export default App;