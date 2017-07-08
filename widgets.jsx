import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

document.addEventListener("DOMContentLoaded", () => {
	const clockRoot = document.getElementById("clockRoot");
	const weatherRoot = document.getElementById("weatherRoot");
	ReactDOM.render(<Clock/>, clockRoot);
	ReactDOM.render(<Weather/>, weatherRoot);
});
