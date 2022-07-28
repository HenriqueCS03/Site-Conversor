const btnDecBin = document.getElementById('decBin')
const btnBinDec = document.getElementById('binDec')
const btnDecOct = document.getElementById('decOct')
const btnLimpar = document.getElementById('limparId')
const btnConfirmar = document.getElementById('confirmId')

//OPERAÇÕES INICIAIS
//Função de Decimal para binário
 btnConfirmar.addEventListener('click', ()=>{
    var valor = parseInt(document.getElementById('converterValorId').value)
    var resultado = valor.toString(2)
    document.getElementById('resultadoId').innerHTML= resultado;
})

//Função para restaurar o valor e resultado
btnLimpar.addEventListener('click', ()=>{
    document.getElementById('converterValorId').value = ""; 
    document.getElementById('resultadoId').innerHTML= "(bin)";
})

//Função de inverter a String
function reverseString(str) {
    // Passo 1. Use o método split() para retornar um novo array
    var splitString = str.split(""); // var splitString = "hello".split("");
    
    // Passo 2. Use o método reverse() para inverter o array recém-criado
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    // Passo 3. Use o método join() para unir todos os elementos do array em uma string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
    // Passo 4. Retorne a string invertida
    return joinArray;
}

//Caso o usuário retorne para o cálculo de Decimal para Binário
btnDecBin.addEventListener('click', ()=>{
    document.getElementById('converterValorId').placeholder = "(dec)";
    document.getElementById('converterValorId').value = "";
    document.getElementById('resultadoId').innerHTML = "(bin)";
    document.getElementById('nmAlteracaone').innerHTML = " Decimal";
    document.getElementById('nmAlteracaot').innerHTML = " Binário";

    //Função de Decimal para binário
    btnConfirmar.addEventListener('click', ()=>{
        var valor = parseInt(document.getElementById('converterValorId').value)
        var resultado = valor.toString(2)
        document.getElementById('resultadoId').innerHTML= resultado;
    })
    //Função para restaurar o valor e resultado
    btnLimpar.addEventListener('click', ()=>{
        document.getElementById('converterValorId').value = ""; 
        document.getElementById('resultadoId').innerHTML= "(bin)";
    })

})

//OPERAÇÕES BINÁRIO PARA DECIMAL
//Função Binário para Decimal
function binDec(valor){
    
}

//Função para a conta em Binário para decimal
btnBinDec.addEventListener('click', ()=>{
    document.getElementById('converterValorId').value = "";
    document.getElementById('nmAlteracaone').innerHTML = " Binário";
    document.getElementById('nmAlteracaot').innerHTML = " Decimal";
    document.getElementById('converterValorId').placeholder = "(bin)";
    document.getElementById('resultadoId').innerHTML = "(dec)";
    let btnConfirm = document.getElementById('confirmId')
  
    //Converter Binário para Decimal
    btnConfirm.addEventListener('click', ()=>{
        var valor = parseInt(document.getElementById('converterValorId').value)
        var resultadoBinDec = binDec(valor)
        document.getElementById('resultadoId').innerHTML= resultadoBinDec;
    })

    //Função para restaurar o valor e resultado
    btnLimpar.addEventListener('click', ()=>{
        document.getElementById('converterValorId').value = ""; 
        document.getElementById('resultadoId').innerHTML= "(dec)";
    })
})

//Operações Decimal para Octagonal
//Função Decimal para Octagonal
function decOct(valor){
    var octagonal = ''
    while (valor > 0){
        recebe = valor % 8
        recebe = String(recebe)
        octagonal += recebe
        valor = Math.floor(valor/ 8) 
    }
    return octagonal
}

btnDecOct.addEventListener('click', ()=>{
    document.getElementById('converterValorId').placeholder = "(dec)";
    document.getElementById('converterValorId').value = "";
    document.getElementById('resultadoId').innerHTML = "(Oct)";
    document.getElementById('nmAlteracaone').innerHTML = " Decimal";
    document.getElementById('nmAlteracaot').innerHTML = " Octagonal";
    let btnConfirm = document.getElementById('confirmId')

    //Função converter Decimal para Octagonal
    btnConfirm.addEventListener('click', ()=>{
        valor = parseInt(document.getElementById('converterValorId').value)
        resultado = reverseString(decOct(valor))
        document.getElementById('resultadoId').innerHTML= resultado;
    })

    //Função para restaurar o valor e resultado
    btnLimpar.addEventListener('click', ()=>{
        document.getElementById('converterValorId').value = "";
        document.getElementById('resultadoId').innerHTML= "(Oct)";
    })
})