let array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
if (array.length===5){
    for(let i=0; i < array.length ;i++){
        let Jogador = `Jogador ${i+1}: `
        for (let j =0 ; j <array[i].length; j++){
             Jogador+= `${array[i][j]} `
        }
        console.log(Jogador)
    
    }
   
}

//ou
for(let i=0; i < array.length ;i++){
    console.log (`Jogador ${i+1}: ${array[i]}` )
}


//ou
jogador=0

for (let i=0; i < array.length ;i++){
    jogador= jogador + 1;
    console.log(`Jogador ${jogador}: ${array[i]}` )
}
//ou
for (let i = 0; i < array.length; i++) {
    console.log (`Jogador ${i}: `)
    for ( let c = 0; c < array[i].length; c++){
        console.log(`${c+1}ª temporada: ${array[i][c]}`)
    }
    console.log("=".repeat(20))
 }