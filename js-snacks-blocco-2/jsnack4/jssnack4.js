const INT=[];
let somma=0;
let size=0;
do {
    size=parseInt(prompt("inserisci la dimensione dell'array:"));
}while(isNaN(size));
for (let i = 0; i < size; i++) {
    do{
        INT[i]=parseInt(prompt(`inserisci il ${i+1} numero:`));
    }while (isNaN(INT[i]))
    if(i%2===0){
        somma+=INT[i];
    }
}
console.log(somma);
