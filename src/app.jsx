import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Main from './scripts/components/index.jsx';

const app = document.getElementById('app');

ReactDOM.render(<Main/>, app);
