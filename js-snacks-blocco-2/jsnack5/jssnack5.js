const A1=[];
const A2=[];
let size=0;
do {
    size=parseInt(prompt("inserisci la dimensione dell'array:"));
}while(isNaN(size))
for (let i = 0; i < size; i++) {
    do{
        A1[i]=parseInt(prompt(`inserisci il ${i+1} numero:`));
    }while (isNaN(A1[i]))
}
do {
    size=parseInt(prompt("inserisci la dimensione dell'array:"));
}while(isNaN(size))
for (let i = 0; i < size; i++) {
    do{
        A2[i]=parseInt(prompt(`inserisci il ${i+1} numero:`));
    }while (isNaN(A2[i]))
}
if(A1.length>A2.length){
    let diff=A1.length-A2.length;
    console.log("il primo array è più grande di:",diff);
    for (let i = 0; i < diff; i++) {
        do{
            A2[i]=parseInt(prompt(`inserisci il ${i+1} numero per completare:`));
        }while (isNaN(A2[i])) 
    }
} else if(A2.length>A1.length){
    let diff=A2.length-A1.length;
    console.log("il secondo array è più grande di:",diff);
    for (let i = 0; i < diff; i++) {
        do{
            A1[i]=parseInt(prompt(`inserisci il ${i+1} numero per completare:`));
        }while (isNaN(A1[i])) 
    }
}else{
    prompt("sono grandi uguali");
}
