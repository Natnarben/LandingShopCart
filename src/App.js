import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AllData from "./data/products";
import ShopPlace from "./components/ShopPlace";



export default function App() {

    
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Banner />
                <ShopPlace/>
                
            </Router>
            
        </div>
    );
}

