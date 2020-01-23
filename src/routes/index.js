import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../views/Home';
const Error404 = React.lazy( () => {
    return import('../views/404');
});
const Auth = React.lazy( () => {
    return import('../views/Auth');
});
const Guarded = React.lazy( () => {
    return import('../views/Guarded');
});

export default (store) => {
    
    // public routes
    let routes = [
        <Route path="/auth" render={(props) => <Auth {...props}/>} />,
        <Route path="/" exact component={Home} />
    ];

    // guarded routes
    if( store.getState().auth.token !== null ) {
        routes = routes.concat([
            <Route path="/guarded" render={(props) => <Guarded {...props}/>}/>,
        ]);
    }

    // catch all route
    routes.push( <Route component={Error404} /> );

    return routes;
};