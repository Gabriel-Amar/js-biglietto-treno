let chilometri = prompt("Quanti chilometri vuoi percorrere?")

let anni = prompt("Quanti anni hai?")

let prezzo = chilometri * 0.21

let scontoMin = prezzo * 20 / 100

let scontoOver = prezzo * 40 / 100

if (anni > 65){
    console.log(prezzo - scontoOver);
} else if (anni < 18){
    console.log(prezzo - scontoMin)
} else{
    console.log(prezzo)
}