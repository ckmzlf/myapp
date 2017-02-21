import React from 'react';
import {render} from 'react-dom';

import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import nav from './component/nav.js'
import Home from './component/home.js'
import About from './component/about.js'
import api from './component/api.js'
import login from './component/login.js'
import reg from './component/reg.js'
import DetailList from './layout/DetailList.js'


render((
    <Router history={hashHistory}>
       <Route path="/" component={nav}>
       		<IndexRoute component={Home}/>
       		<Route path="/home" component={Home}/>
       		<Route path="/about" component={About}/>
	        <Route path="/api" component={api}/>
	        <Route path="/login" component={login}/>
	        <Route path="/reg" component={reg}/>
	        <Route path="/DetailList" component={DetailList}/>
       </Route>
    </Router>
),document.getElementById("content"));

