import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

//Import css
import "./css/container.css";
import "./css/sidebar.css";
import "./css/font.css";
import "./css/table.css";
import "./css/form.css";
import "./css/card.css";


//Import components
import Welcome from './components/Home/Welcome';
import AdminHome from './components/Home/Admin_Home';
import AdminLogin from './components/Login/Admin_Login';
import AccountantLogin from './components/Login/Accountant_Login';
import Apply from './components/Register/Apply';
import ViewApply from './components/ReadData/View_Apply';
import ViewAccountant from './components/ReadData/View_Accountant';
import ViewSiteManager from './components/ReadData/View_SiteManager';
import ViewPayment from './components/ReadData/View_Payment';
import AccountantRegister from './components/Register/Accountant_Register';
import SiteManagerRegister from './components/Register/SiteManager_Register';
import SupplierRegister from './components/Register/Supplier_Register';
import ViewSupplier from './components/ReadData/View_Supplier';
import AccountantHome from './components/Home/Accountant_Home';
import Stripe_Container from './components/Payment/Stripe_Container';


const App = () => {

  return (
    
    <Router>
      <div className="app">
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/adminhome" component={AdminHome}/>
            <Route exact path="/accountanthome" component={AccountantHome}/>

            <Route exact path="/adminlogin" component={AdminLogin}/>
            <Route exact path="/accountantlogin" component={AccountantLogin}/>

            <Route exact path="/viewapply" component={ViewApply}/>
            <Route exact path="/viewsupplier" component={ViewSupplier}/>
            <Route exact path="/viewaccountant" component={ViewAccountant}/>
            <Route exact path="/viewsitemanager" component={ViewSiteManager}/>
            <Route exact path="/viewpayment" component={ViewPayment}/>
            
            <Route exact path="/supplierapply" component={Apply}/>
            <Route exact path="/accountantregister" component={AccountantRegister}/>
            <Route exact path="/sitemanagerregister" component={SiteManagerRegister}/>
            <Route exact path="/supplierregister/:id" component={SupplierRegister}/>

            <Route exact path="/payment" component={Stripe_Container}/>
            
            
        </Switch>   
      </div>
    </Router>

  )

}


export default App;
