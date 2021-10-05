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

//Dhananjaya
import SupplierQuotationComponent from "./components/SupplierQuotation/SupplierQuotation.page";

//Import css
import "./css/sidebar.css";
import "./css/font.css";
import Stripe_Container from './components/Payment/Stripe_Container';

//Yathushan
import Add_Raised_Orders from './components/Orders/add_raised_order';
import Approve_Order from './components/Orders/approveOrder';
import Reject_Order from './components/Orders/rejectOrder';
import View_All_Orders from './components/Orders/view_all_purchase_orders';
import View_Approved_Orders from './components/Orders/view_approved_purchase_orders';
import View_Pending_Orders from './components/Orders/view_pending_purchase_orders';


const App = () => {

  return (
    
    <Router>
      <div className="app">
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/adminhome" component={AdminHome}/>
            <Route exact path="/accountanthome" component={AccountantHome}/>
            <Route exact path="/supplier-quotation" component={SupplierQuotationComponent}/>

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
            <Route exact path="/add_raised_order/:order_id" component={Add_Raised_Orders}/>
            <Route exact path="/approve_order/:order_id" component={Approve_Order}/>
            <Route exact path="/reject_order/:order_id" component={Reject_Order}/>
            <Route exact path="/view_all_orders" component={View_All_Orders}/>
            <Route exact path="/view_approved_orders" component={View_Approved_Orders}/>
            <Route exact path="/view_pending_orders" component={View_Pending_Orders}/>
            
        </Switch>   
      </div>
    </Router>

  )

}


export default App;
