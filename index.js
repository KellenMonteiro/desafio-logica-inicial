let nomeHeroi = "Homem de Ferro";
let qtdXP = 6495;
let classifcacaoNivel;

if (qtdXP < 1000) {
    classifcacaoNivel = "Ferro";
} else if (qtdXP >= 1001 && qtdXP < 2000) {
    classifcacaoNivel = "Bronze";
} else if (qtdXP >= 2001 && qtdXP < 5000) {
    classifcacaoNivel = "Prata";
} else if (qtdXP >= 5001 && qtdXP < 7000) {
    classifcacaoNivel = "Ouro";
} else if (qtdXP >= 7001 && qtdXP < 8000) {
    classifcacaoNivel = "Platina";
} else if (qtdXP >= 8001 && qtdXP < 9000) {
    classifcacaoNivel = "Ascendente";
} else if (qtdXP >= 9001 && qtdXP < 10000) {
    classifcacaoNivel = "Imortal";
} else {
    classifcacaoNivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${classifcacaoNivel}.`);




