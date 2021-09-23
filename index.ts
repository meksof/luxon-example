// Import stylesheets
import './style.css';
import { DateTime } from 'luxon';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
const millis = DateTime.now().toMillis();
const textDiv: HTMLElement = document.createElement('div');
textDiv.innerHTML = `millis: ${millis}`;
appDiv.appendChild(textDiv);
