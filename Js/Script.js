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
    document.getElementById('resultadoId').innerHTML= "(bin)";
})

function binDec(num){
    var num = parseInt(document.getElementById('converterValorId').value) 

}

//Função para a conta em Binário para decimal
const btnBinDec = document.getElementById('binDec')

btnBinDec.addEventListener('click', ()=>{
    document.getElementById('nmAlteracaone').innerHTML = " Binário";
    document.getElementById('nmAlteracaot').innerHTML = " Decimal";
    document.getElementById('converterValorId').placeholder = "(bin)";
    document.getElementById('resultadoId').innerHTML = "(dec)";
    let btnConfirm = document.getElementById('confirmId')
    
    btnConfirm.addEventListener('click', ()=>{
        var valor = parseInt(document.getElementById('converterValorId').value)
        var resultadoBinDec = binDec(valor)
        document.getElementById('resultadoId').innerHTML= resultadoBinDec;
    })
})