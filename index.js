const nome = "Super Programador"

let XPdoHeroi = 9512

let nivelHeroi;



if (XPdoHeroi <= 1000) {

  nivelHeroi = "Ferro"

} else if (XPdoHeroi > 1000 && XPdoHeroi <= 2000) {

  nivelHeroi = "Bronze"

} else if (XPdoHeroi > 2000 && XPdoHeroi <= 5000) {

  nivelHeroi = "Prata"

} else if (XPdoHeroi > 5000 && XPdoHeroi <= 7000) {

  nivelHeroi = "Ouro"

} else if (XPdoHeroi > 5000 && XPdoHeroi <= 8000) {

  nivelHeroi = "Platina"

} else if (XPdoHeroi > 8000 && XPdoHeroi <= 9000) {

  nivelHeroi = "Ascndente"

} else if (XPdoHeroi > 9000 && XPdoHeroi <= 10000) {

  nivelHeroi = "Imortal"

} else {

  nivelHeroi = "Radiante"

}



console.log("O heroi de nome " + nome + " está no nível " + nivelHeroi)