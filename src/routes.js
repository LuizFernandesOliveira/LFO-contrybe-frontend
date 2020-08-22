import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';
import PageProfile from './pages/PageProfile';
import NewPost from './pages/NewPost';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PageLogin} />
                <Route path="/register" component={PageRegister} />

                <Route path="/profile" exact component={PageProfile} />
                <Route path="/profile/:block/:day" component={PageProfile} />
                <Route path="/post/new" component={NewPost} />
            </Switch>
        </BrowserRouter>
    );
}