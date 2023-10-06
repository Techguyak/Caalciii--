document.querySelector('.ac-btn').addEventListener('click',()=>{
    calci.value='';
});

document.querySelector('.del-btn').addEventListener('click',()=>{
    calci.value=calci.value.toString().slice(0,-1);
});

document.querySelector('.dz-btn').addEventListener('click',()=>{
     calci.value+= '00';
});

document.querySelector('.a-btn').addEventListener('click',()=>{
    calci.value+= '+';
});

document.querySelector('.s-btn').addEventListener('click',()=>{
    calci.value+= '7';
});

document.querySelector('.e-btn').addEventListener('click',()=>{
    calci.value+= '8';
});

document.querySelector('.n-btn').addEventListener('click',()=>{
    calci.value+= '9';
});

document.querySelector('.sub-btn').addEventListener('click',()=>{
    calci.value+= '-';
});

document.querySelector('.f-btn').addEventListener('click',()=>{
    calci.value+= '4';
});

document.querySelector('.fi-btn').addEventListener('click',()=>{
    calci.value+= '5';
});

document.querySelector('.si-btn').addEventListener('click',()=>{
    calci.value+= '6';
});

document.querySelector('.m-btn').addEventListener('click',()=>{
    calci.value+= '*';
});

document.querySelector('.on-btn').addEventListener('click',()=>{
    calci.value+= '1';
});

document.querySelector('.t-btn').addEventListener('click',()=>{
    calci.value+= '2';
});

document.querySelector('.th-btn').addEventListener('click',()=>{
    calci.value+= '3';
});

document.querySelector('.div-btn').addEventListener('click',()=>{
    calci.value+= '/';
});

document.querySelector('.z-btn').addEventListener('click',()=>{
    calci.value+= '0';
});

document.querySelector('.p-btn').addEventListener('click',()=>{
    calci.value+= '.';
});

document.querySelector('.ex-btn').addEventListener('click',()=>{
    calci.value+= '**';
});

document.querySelector('.eq-btn').addEventListener('click',()=>{
    calci.value=eval(calci.value);
});

