let buttonPlus=document.querySelector('.b1');

let buttonMinus=document.querySelector('.b2');

let heading=document.querySelector('h1');
let counter=0;



buttonPlus.addEventListener('click',function() {
counter +=1;
heading.textContent=counter
});

buttonMinus.addEventListener('click',function(){
    counter -=1;
    heading.textContent=counter
})




    
