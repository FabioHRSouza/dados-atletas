//definição da Classe
class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    
    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria"
        }
    }
    calculaIMC(){
        return (this.peso / (this.altura * this.altura));  // pode acrescentar .toFixed(2); para limitar em 2 casas decimais
    }   
    calculaMediaValida(){
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4);
        let soma = notasComputadas.reduce((total, nota) => total + nota, 0);
        return soma / notasComputadas.length;
    }   
    obtemNomeAtleta(){
        return this.nome;
    } 
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemNotasAtleta(){
        return this.notas;
    }
    obtemCategoria(){
        return this.calculaCategoria();
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }

}

const atleta = new Atleta(
    "Andre Sardet",
    15,
    55,
    1.64,
    [9.8, 9.9, 9.7, 10, 10]
);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta()); // pode acrescentar + " anos"
console.log("Peso: " + atleta.obtemPesoAtleta() ); // pode acrescentar + "kg"
console.log("Altura: " + atleta.altura); // pode acrescentar + "m"
console.log("Categoria: " + atleta.obtemCategoria());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Média Válida: " + atleta.obtemMediaValida());
console.log("IMC: " + atleta.obtemIMC());
