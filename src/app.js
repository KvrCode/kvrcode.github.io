import AOS from 'aos';

import { linkEventListener } from './components/links.js';

import 'aos/dist/aos.css';
import "./styles.css";

import img from './assets/whiteboard.jpeg';

document.addEventListener('DOMContentLoaded', () => {
    console.log('starting...')
    AOS.init(); //still gotta add styles in html...
    linkEventListener();
});
