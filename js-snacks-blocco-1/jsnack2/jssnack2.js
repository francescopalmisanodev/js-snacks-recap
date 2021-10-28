const p1 =prompt("inserisci la prima parola:");
const p2 =prompt("inserisci la seconda parola:");
if (p1.length>p2.length){
    console.log(`Questa è la parola più corta è:${p2} "Questa è la parola più lunga:${p1}`);
} else if (p2.length>p1.length){
    console.log(`Questa è la parola più corta è:${p1} "Questa è la parola più lunga:${p2}`);
}else{
    console.log("Le due parole hanno la stessa lunghezza");
}