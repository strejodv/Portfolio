import Landingpage from './Components/Landingpage'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Footer from './Components/Footer'

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
        <Footer />
    </div>
  )
}

export default App;