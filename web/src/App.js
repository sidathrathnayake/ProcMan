import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

//Import components
import Welcome from './components/Home/Welcome';
import AdminHome from './components/Home/Admin_Home';
import AdminLogin from './components/Login/Admin_Login';

import AccountantHome from './components/Home/Accountant_Home';

//Dhananjaya
import SupplierQuotationComponent from "./components/SupplierQuotation/SupplierQuotation.page";

//Yathushan
import Add_Raised_Orders from './components/Orders/add_raised_order';
import Approve_Order from './components/Orders/approveOrder';
import Reject_Order from './components/Orders/rejectOrder';
import View_All_Orders from './components/Orders/view_all_purchase_orders';
import View_Approved_Orders from './components/Orders/view_approved_purchase_orders';
import View_Pending_Orders from './components/Orders/view_pending_purchase_orders';

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

            <Route exact path="/add_raised_order" component={Add_Raised_Orders}/>
            <Route exact path="/approve_order" component={Approve_Order}/>
            <Route exact path="/reject_order" component={Reject_Order}/>
            <Route exact path="/view_all_orders" component={View_All_Orders}/>
            <Route exact path="/view_approved_orders" component={View_Approved_Orders}/>
            <Route exact path="/view_pending_orders" component={View_Pending_Orders}/>
        </Switch>   
      </div>
    </Router>

  )

}


export default App;
