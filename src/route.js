import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import './static/index.css';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import LayoutComponent from './share-components/layout';

import Home from './pages/home/container';
import Login from './pages/login/container';
import About from './pages/about/container';
import User from './pages/user-info/container';

import { isLoggedIn } from '../src/utils/auth';
import {href, history} from "./history";
import {ConnectedRouter} from "react-router-redux";


const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/user',
        component: User
    }
];

const RouteWithSubRoutes = (route) => {
    const RouteComponent = route.component;
    return <Route exact path={route.path} render={
        (props) => !isLoggedIn(true) ? (<Redirect to="/login"/>) : (<LayoutComponent>
            <RouteComponent {...props} routes={route.routes}/>
        </LayoutComponent>)
    }/>
};

// eslint-disable-next-line
const PageNotFound = () => (
    <div className="content" style={{"textAlign":"center"}}>
        <h1>404</h1>
        <h2>页面不存在</h2>
        <p>
            <a href={href("/")}>回到首页</a>
        </p>
    </div>
);

const Rou = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <RouteWithSubRoutes exact path="/" component={Home}/>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
            <Route exact path="/login" component={Login}/>
            <Route component={PageNotFound}/>
        </Switch>
    </ConnectedRouter>
)

const Local =  () => (
    <LocaleProvider locale={zh_CN}>
        <Rou/>
    </LocaleProvider>
);

export default Local;

