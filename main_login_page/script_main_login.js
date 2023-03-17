const wrapper = document.querySelector ('.wrapper');
const btn = document.querySelector ('.btnlogin');
const iconClose = document.querySelector ('.icon-close');

btn.addEventListener('click', ()=> {wrapper.classList.add('active');});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove ('active');});