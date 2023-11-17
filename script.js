function calcular(){
    var operacao = document.getElementById("operacao").value;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var resposta = document.getElementById("resposta");

    var soma = parseFloat(n1) + parseFloat(n2);
    var subtracao = parseFloat(n1) - parseFloat(n2);
    var multiplicacao = parseFloat(n1) * parseFloat(n2);
    var divisao = parseFloat(n1) / parseFloat(n2);


    if(operacao == 1){
        resposta.innerHTML = "Resposta: " + soma;
    }
    else if(operacao == 2){
        resposta.innerHTML = "Resposta: " + subtracao;
    }
    else if(operacao == 3){
        resposta.innerHTML = "Resposta: " + multiplicacao;
    }
    else if(operacao == 4){
        resposta.innerHTML = "Resposta: " + divisao;
    }
    else{
        resposta.innerHTML = "Digite uma operação existente.";
    }
}