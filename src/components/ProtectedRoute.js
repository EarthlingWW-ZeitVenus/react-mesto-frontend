import { Route, Redirect } from 'react-router-dom';
import React from 'react';


function ProtectedRoute({ component: Component, ...props }) {


  return (
    <Route>
      { () => props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" /> }
    </Route>
  );
};


export default ProtectedRoute;