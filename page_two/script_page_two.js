const wrapper = document.querySelector ('.wrapper');
const btn = document.querySelector ('.btnStart');
const iconClose = document.querySelector ('.icon-close');

//btn login and close events 
btn.addEventListener('click', ()=> {wrapper.classList.add('active');});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove ('active');});
