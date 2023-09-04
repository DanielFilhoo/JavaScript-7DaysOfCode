const numeroInicial = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10
let tentativas = 3; // Número de tentativas

while (tentativas > 0) {
    const chute = parseInt(prompt("Digite o seu chute (entre 0 e 10):"));

    if (chute === numeroInicial) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert(`Você errou. Restam ${tentativas} tentativas.`);
        } else {
            alert(`Você errou todas as tentativas. O número era ${numeroInicial}.`);
        }
    }
}
