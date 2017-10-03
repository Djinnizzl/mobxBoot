import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../components/index.jsx';
import NotFound from '../components/NotFound.jsx';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Main} exact={true} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);