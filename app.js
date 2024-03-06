let numeroSecreto = 0;
let intentos = 0;
let listadeNumeros = [];
let numeroMaximo =10;
console.log(numeroSecreto);

function asignarTexto(elemento, textp){
    let asignamiento = document.querySelector(elemento);
    asignamiento.innerHTML= textp;
    return;
}
function verificarIntento(){
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numerodeUsuario){
        asignarTexto('p',`Asertaste hijo de pta en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else{
            if(numerodeUsuario > numeroSecreto){
            asignarTexto('p','Numero menor');
        }else{
            asignarTexto('p','Numero mayor');
        }
        intentos++;
        limpiarcaja();

        }
    return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value ='';
}

function numeroAleatorio(){ 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numeroAleatorio);

    if(listadeNumeros.length == numeroMaximo){
        asignarTexto('p','Ya esta pe causa')
    } else{ 

    if(listadeNumeros.includes(numeroGenerado)){
        return numeroAleatorio();
    } else{
         listadeNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condIniciales(){
    asignarTexto('h1','Jueguito de Alura');
    asignarTexto('p',`Ingresa Tu numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}
function reinicirJuego(){
    limpiarcaja();
    condIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condIniciales();