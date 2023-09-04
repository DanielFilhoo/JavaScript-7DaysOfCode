// Função para realizar a soma
function soma(a, b) {
    return a + b;
  }
  
  // Função para realizar a subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função para realizar a multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função para realizar a divisão
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: Divisão por zero!";
    } else {
      return a / b;
    }
  }
  
  while (true) {
    console.log("Opções disponíveis:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
  
    const escolha = prompt("Escolha uma opção (1/2/3/4/5): ");
  
    if (escolha === '5') {
      console.log("Até a próxima!");
      break;
    }
  
    if (escolha === '1' || escolha === '2' || escolha === '3' || escolha === '4') {
      const num1 = parseFloat(prompt("Digite o primeiro número: "));
      const num2 = parseFloat(prompt("Digite o segundo número: "));
  
      if (escolha === '1') {
        console.log("Resultado: ", soma(num1, num2));
      } else if (escolha === '2') {
        console.log("Resultado: ", subtracao(num1, num2));
      } else if (escolha === '3') {
        console.log("Resultado: ", multiplicacao(num1, num2));
      } else if (escolha === '4') {
        const resultado = divisao(num1, num2);
        if (typeof resultado === 'string') {
          console.log(resultado);
        } else {
          console.log("Resultado: ", resultado);
        }
      }
    } else {
      console.log("Opção inválida. Por favor, escolha uma opção válida (1/2/3/4/5).");
    }
  }
  