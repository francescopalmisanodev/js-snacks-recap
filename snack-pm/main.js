const btn=document.getElementById("btn");
const calcolo=document.getElementById("calc");

btn.addEventListener("click",function(){
    const numero=[];
    let somma=0;
    let media=0;
    for (let i = 0; i < 4; i++) {
        do{
            numero[i] = parseInt(prompt(`inserisci la ${i+1} cifra del numero:`));
        }while (isNaN(numero[i]))
        somma+=numero[i]; 
    }
    media=somma/numero.length; 
    calcolo.innerHTML=(`<div>La somma è:${somma}, La media è:${media}</div>`);
})
