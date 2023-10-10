 
/*Instruções para entrega
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/
function calcSaldoRankeadas(numVitorias, numDerrotas) {

    let saldoPartidas = numVitorias - numDerrotas;
  
    return saldoPartidas
  
  }
  
  
  
  let resultadoPartidas = calcSaldoRankeadas(271, 9)
  
  
  
  let nivelHeroi;
  
  
  
  if (resultadoPartidas <= 10) {
  
    nivelHeroi = "Ferro"
  
  } else if (resultadoPartidas > 10 && resultadoPartidas <= 20 ) {
  
    nivelHeroi = "Bronze"
  
  } else if (resultadoPartidas > 20 && resultadoPartidas <= 50 ) {
  
    nivelHeroi = "Prata"
  
  } else if (resultadoPartidas > 50 && resultadoPartidas <= 80 ) {
  
    nivelHeroi = "Ouro"
  
  } else if (resultadoPartidas > 80 && resultadoPartidas <= 90 ) {
  
    nivelHeroi = "Diamante"
  
  } else if (resultadoPartidas > 90 && resultadoPartidas <= 100 ) {
  
    nivelHeroi = "Lendario"
  
  } else if (resultadoPartidas >= 101 ) {
  
    nivelHeroi = "Imortal"
  
  }
  
  
  
  console.log(" O herói tem saldo de " + resultadoPartidas + " e está no nível de " + nivelHeroi)