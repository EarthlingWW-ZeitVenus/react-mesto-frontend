import { Route, Redirect } from 'react-router-dom';
import React from 'react';


function ProtectedRoute({ component: Component, ...props }) {
//   debugger;
  console.log("попал в протектед роут");
  console.log(props.isLoggedIn);


  return (
    <Route>
      { () => props.isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" /> }
    </Route>
  );
};


export default ProtectedRoute;