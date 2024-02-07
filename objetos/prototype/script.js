function Person(name, age) {
  this.name = name;
  this.age = age;
}

//ao criar a funç no protótipo ela é criada apenas uma vez e qlqr obj novo criado terá acesso a ela
//caso tenha o mesmo método dentro do obj Person primeiro é verificado dentro do obj e executado, caso contrário executará o do prototype
Person.prototype.andar = function () {
  return "Pessoa andou";
};

//o objeto criado usando o construtor Person terão acesso as propriedades como aos métodos do prototype
const pedro = new Person("Pedro", 35);
//prototype é uma objeto adicionado a uma função qnd ela é criada
console.log(Person.prototype);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
