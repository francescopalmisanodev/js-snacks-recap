let somma=0;
for (let i = 0; i < 5; i++) {
    const verifier;
    do {
        verifier =parseInt(prompt(`inseirsci il ${i+1} numero:`));
    }while (isNaN(verifier))
    somma += verifier;
    
}
console.log(somma);


// let counter=0;
// let somma=0;

// while (counter < 5) {
//     const verifier;
//     do {
//         verifier =parseInt(prompt(`inseirsci il ${counter+1} numero:`));
//     }while (isNaN(verifier))
//     somma += verifier;
//     counter++;       
// }
// console.log(somma);