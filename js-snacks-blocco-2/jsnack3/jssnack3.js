const nomi =["Paolo", "Giovanni", "Antonio", "Francesco", "Giacomo"];
const cognomi =["Rossi", "Tagliente", "Grassi", "Lippolis", "Fusillo"];
const fakelist =[];
for (let i = 0; i < 3; i++) {
    fakelist[i]=`${nomi[Math.floor(Math.random() * nomi.length)]} ${cognomi[Math.floor(Math.random() * cognomi.length)]}`; 
}
console.log(fakelist);
