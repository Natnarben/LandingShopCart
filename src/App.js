import "./css/index.css";
import "./css/fonts.css";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from "react-router-dom";
import ShopPlace from "./components/ShopPlace";
import CartProducts from './components/Product';



export default function App() {

    
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/shopping-cart"><CartProducts /></Route>
                    <Route exact path="/" component={ShopPlace}/>
                </Switch>
            </Router>
        </div>
    );
}

