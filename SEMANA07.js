class Produto {
    nome;
    preco;
    quantidade;
  
    constructor(valorNome, valorPreco, valorQuantidade){
      this.nome = valorNome
      this.preco = valorPreco
      this.quantidade = valorQuantidade
    }
  
    Vender(quantidadeVendida){
      if(quantidadeVendida > this.quantidade){
        console.log("Estoque insuficiente para venda!")
        console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
        return
      }
        
      this.quantidade -= quantidadeVendida
    }
  
    Repor(quantidadeReposta){
      this.quantidade += quantidadeReposta
    }
  
    MostrarEstoque(){
      console.log(`O produto ${this.nome} está custando R$ ${this.preco}\n e no momento possui ${this.quantidade} unidades em estoque!`)
    }
  
    AtualizarPreco(novoValor){
      this.preco = novoValor
    }
  }
  
  class Pessoa {
    nome;
    idade;
    profissao;
    
    constructor(nome, idade, profissao){
      this.nome = nome
      this.idade = idade
      this.profissao = profissao
    }
  }
  
  
  class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;
  
    constructor(nome, idade, profissao, telefone, email, clienteDesde){
      super(nome, idade, profissao)
      this.telefone = telefone
      this.email = email
      this.clienteDesde = clienteDesde
    }
  }
  
  
  const clienteBruno = new Cliente("Daniel", 28, "Analista de Sistemas", "123456789", "daniel@gmail.com", "2020-01-20")
  console.log(clienteBruno)
  
  
  
  
  const caneta = new Produto("Caneta BIC", 2, 5)
  caneta.Vender(10)
  caneta.Repor(10)
  caneta.Vender(12)
  caneta.AtualizarPreco(2.5)
  caneta.MostrarEstoque()