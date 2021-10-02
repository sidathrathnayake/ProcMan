import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

//Import components
import Welcome from './components/Home/Welcome';
import AdminHome from './components/Home/Admin_Home';
import AdminLogin from './components/Login/Admin_Login';

import AccountantHome from './components/Home/Accountant_Home';

//Dhananjaya
import SupplierQuotationComponent from "./components/SupplierQuotation/SupplierQuotation.page";

//Import css
import "./css/sidebar.css";
import "./css/font.css";


const App = () => {

  return (

    <Router>
      <div className="app">
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/adminhome" component={AdminHome}/>
            <Route exact path="/adminlogin" component={AdminLogin}/>
            <Route exact path="/accountanthome" component={AccountantHome}/>
            <Route exact path="/supplier-quotation" component={SupplierQuotationComponent}/>
        </Switch>   
      </div>
    </Router>

  )

}


export default App;
