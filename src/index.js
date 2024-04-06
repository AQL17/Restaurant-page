import './styles.css';
import { menufunction } from './menu';
import { homeFunction } from './home';
import { contactFunction } from './contact';


const nav = document.querySelector('nav');
nav.classList.add('head');
console.log('It\'s ');

const content = document.getElementById('content');

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');


homeFunction();

menu.addEventListener('click', () => {
    menufunction();

})

home.addEventListener('click', () => {
    homeFunction();
})

contact.addEventListener('click', () => {
    contactFunction();
 })