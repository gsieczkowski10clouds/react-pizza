import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import store from './store';
import routes from './routes';

import Layout from './hoc/Layout';
import ViewLoading from './components/loading/ViewLoading';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<ViewLoading/>}>
                        <Switch>
                            {routes(store)}
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
