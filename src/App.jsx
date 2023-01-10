import './App.css'
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function App() {
    return (
        <div className="card-main">
            <div>
                <Info />
                <div className='container-text'>
                    <About />
                    <Interests />
                </div>
            </div>
            <Footer />
        </div>
    )
}