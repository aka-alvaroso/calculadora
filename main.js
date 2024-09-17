let display = document.getElementById("display");
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => manejarBoton(button.value));   
});



function manejarBoton(valor){
    if (valor === '0' || valor === '1'|| valor === '2'|| valor === '3'|| valor === '4'|| valor === '5'|| valor === '6'|| valor === '7'|| valor === '8'|| valor === '9'){    

        if (display.value === '0'){
            display.value = valor;
        }else{            
            display.value += valor;
        }
    }else if(valor === '+'|| valor === '-'|| valor === '*'|| valor === '/'){
        if (display.value === '0'){
            display.value = display.value;
        }else if(display.value.charAt(display.value.length - 1) === '+' 
        || display.value.charAt(display.value.length - 1) === '-' 
        || display.value.charAt(display.value.length - 1) === '*'  
        || display.value.charAt(display.value.length - 1) === '/'){
            display.value = display.value;            
        }
        else{
            display.value += valor;
        }        
    }
    else if (valor === 'C'){
        limpiar()
    }else if (valor === '='){
        resolver()
    }
}

function resolver(){
    if (display.value.charAt(display.value.length - 1) === '+'
        || display.value.charAt(display.value.length - 1) === '-'
        || display.value.charAt(display.value.length - 1) === '*'
        || display.value.charAt(display.value.length - 1) === '/'){

        }else{
            display.value = eval(display.value)
        }
}

function limpiar(){
    display.value = 0;

}