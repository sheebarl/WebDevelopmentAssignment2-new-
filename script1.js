let number=document.querySelectorAll('.btn1');
let solution=document.querySelector('.result');
let calchistory=document.querySelector(".history");
let equbutton=document.querySelector('.btn_equ');
let operators=document.querySelectorAll('.btn_operators');
let clrbutton=document.querySelector('.btn_clr');
let history = " ";
let currentName='';



for(let i=0; i<number.length; i++){
    number[i].addEventListener('click',event =>{
        solution.value += number[i].value;
        console.log(number[i]);
        //addToHistory(solution.value);
    });
}

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click', event => {

        if (!operation(solution.value)) {
            currentName = event.target.value;
            solution.value += currentName;
        }
    });
    
}


equbutton.addEventListener('click',event => {
    
    let x=solution.value;
    console.log(x);
    let y=eval(x);
    solution.value=y;
    addToHistory( x + '=' + solution.value);
    solution.value='';
   
});

clrbutton.addEventListener('click',event => {
    solution.value = '';
    //x='';
    addToHistory(" ");
});

function addToHistory(val) {
    history = history + val +'\n';
   calchistory.innerText= history ;
}


function operation(opContent) {

    let lastchar = opContent.slice(-1);
    if (lastchar === '*' || lastchar === '+' || lastchar === '-' || lastchar === '/') {
        if (lastchar === '*' && opContent.innerText == '') {
            return false;
        }
        return true;
    } else {
        return false;
    }
}


   


