function calcMoy(xTabl) {
    let somme = 0
    let j = 0
    for (let i = 0; i < xTabl.length; i++) {
        somme = somme + xTabl[i];
        j = j+1
        
        }
        return (somme/j)

}


let tabl1 = [4, 5]
console.log(calcMoy(tabl1));
