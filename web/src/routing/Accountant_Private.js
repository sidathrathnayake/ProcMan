import {Redirect, Route} from 'react-router-dom';



const AccountantPrivate = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={(props) => 
                    localStorage.getItem("accountantToken") ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to="/"/>
                    )                
            }
        />
    );
};

export default AccountantPrivate;