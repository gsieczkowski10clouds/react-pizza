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

export const paths = {
    home: '/',
    auth: '/auth',
    guarded: '/guarded',
};

export default (store) => {
    
    // public routes
    let routes = [
        <Route key={paths.auth} path={paths.auth} render={(props) => <Auth {...props}/>} />,
        <Route key={paths.home} path={paths.home} exact component={Home} />
    ];

    // guarded routes
    if( store.getState().auth.token !== null ) {
        routes = routes.concat([
            <Route key={paths.guarded} path={paths.guarded} render={(props) => <Guarded {...props}/>}/>,
        ]);
    }

    // catch all route
    routes.push( <Route key="404" component={Error404} /> );

    return routes;
};