const dispari=[];
for (let i = 0; i < 6; i++) {
    const numero
    do{
        numero =parseInt(prompt(`inserisci il ${i+1} numero:`));
    }while (isNaN(numero))
    
    if (numero%2===1) {
        dispari.push(numero);
    }
}
console.log(dispari);