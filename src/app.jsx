import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Router from './scripts/config/Router.jsx';

const app = document.getElementById('app');

ReactDOM.render(<Router />, app);
