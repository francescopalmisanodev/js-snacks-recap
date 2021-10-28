let numero=0;
do{
    numero = parseInt(prompt("inserisci un numero:"));
}
while(isNaN(numero))

if (numero%2===0){
    console.log(numero);
}else{
    console.log(numero+1);
}
