const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(bt){
    bt.addEventListener('click', function(ev){
        if(ev.target.id==='red'){
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id==='gray'){
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id==='blue'){
            body.style.backgroundColor = ev.target.id;
        }
        if(ev.target.id==='yellow'){
            body.style.backgroundColor = ev.target.id;
        }
    });
});