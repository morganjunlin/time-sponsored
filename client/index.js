import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Time from './components/App';
import Sponsor from './components/Sponsor/Sponsor';

ReactDOM.render(<Time />, document.getElementById('time-root'))
ReactDOM.render(<Sponsor />, document.getElementById('sponsored-root'))