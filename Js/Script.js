//Função de Decimal para binário
const btnConfirmar = document.getElementById('confirmId')

btnConfirmar.addEventListener('click', ()=>{
    var valor = parseInt(document.getElementById('converterValorId').value)
    var resultado = valor.toString(2)
    document.getElementById('resultadoId').innerHTML= resultado;
})

//função para restaurar o valor e resultado
const btnLimpar = document.getElementById('limparId')

btnLimpar.addEventListener('click', ()=>{
    document.getElementById('converterValorId').value = ""; 
    document.getElementById('resultadoId').innerHTML= "(dec)";
})