console.log('Hello, Dio Bootcamp Savegnago!');
let nome = 'Pedrinho Savegnago';
let quantidade_Experiencia = 2002;
let nivel = '';

if (quantidade_Experiencia >= 10001){
    nivel = 'Radiante';
} else if (quantidade_Experiencia >= 9001){
    nivel = 'Imortal';
} else if (quantidade_Experiencia >= 8001){
    nivel = 'Ascendente';
} else if (quantidade_Experiencia >= 7001){
    nivel = 'Platina';
} else if (quantidade_Experiencia >= 5001){
    nivel = 'Ouro';
} else if (quantidade_Experiencia >= 2001){
    nivel = 'Prata';
} else if (quantidade_Experiencia >= 1001){
    nivel = 'Bronze';
} else {
    nivel = 'Ferro';
}

console.log(`O Herói de nome  ${nome} está no nível de ${nivel}`);
