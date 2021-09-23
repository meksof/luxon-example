// Import stylesheets
import './style.css';
import { DateTime } from 'luxon';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
const textDiv: HTMLElement = document.createElement('div');

const millis = DateTime.utc().toMillis();

textDiv.innerHTML = `millis: ${millis}`;
appDiv.appendChild(textDiv);
