import "./index.css";
import "./fonts.css";
import { BrowserRouter as Router} from "react-router-dom";
import ShopPlace from "./components/ShopPlace";



export default function App() {

    
    return (
        <div className="App">
            <Router>
                <ShopPlace />
            </Router>
            
        </div>
    );
}

