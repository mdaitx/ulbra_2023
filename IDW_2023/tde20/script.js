function somar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
   
    if (num1 != '' && num2 != ''){
         let soma = num1 + num2
        document.getElementById('result').innerHTML = 'Resultado: ' + soma
    }else{
        alert('Preencha os dois campos.')
    }
}
function subtrair(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
   
    if (num1 != '' && num2 != ''){
         let subtrai = num1 - num2
        document.getElementById('result').innerHTML = 'Resultado: ' + subtrai
    }else{
        alert('Preencha os dois campos.')
    }
}
function multiplicar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
   
    if (num1 != '' && num2 != ''){
         let multiplicar = num1 * num2
        document.getElementById('result').innerHTML = 'Resultado: ' + multiplicar
    }else{
        alert('Preencha os dois campos.')
    }
}
function dividir(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
   
    if (num1 != '' && num2 != ''){
         let dividir = num1 / num2
        document.getElementById('result').innerHTML = 'Resultado: ' + dividir
    }else{
        alert('Preencha os dois campos.')
    }
}
function limpar(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('result').innerHTML = 'Resultado: '
}


//calcular notas

function calcular(){
    const ap1 = Number(document.getElementById('ap1').value)
    const ap2 = Number(document.getElementById('ap2').value)
    const as = Number(document.getElementById('as').value)

    let nota = ap1 + ap2 + as
    if(nota > 6 ){
        document.getElementById('nota').innerHTML = 'Nota: ' + nota + ' Aprovado. Parabéns!'
        alert(' Aprovado. Parabéns!')
    }else{
        document.getElementById('nota').innerHTML = 'Nota: ' + nota + ' Reprovado. Reforçe seus estudos para realização da AF.'
        alert(' Reprovado. Reforçe seus estudos para realização da AF.')
    }
}
function verificaAp1(){
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 > 1.5){
        alert ('Nota inválida. Digite uma nota de 0 a 1.5.')
        document.getElementById('ap1').value = ''
        document.getElementById('ap1').focus()
    }
}
function verificaAp2(){
    const ap2 = Number(document.getElementById('ap2').value)
    if (ap2 < 0 || ap2 > 2.5){
        alert ('Nota inválida. Digite uma nota de 0 a 2.5.')
        document.getElementById('ap2').value = ''
        document.getElementById('ap2').focus()
    }
}
function verificaAs(){
    const as = Number(document.getElementById('as').value)
    if (as < 0 || as > 6){
        alert ('Nota inválida. Digite uma nota de 0 a 6.')
        document.getElementById('as').value = ''
        document.getElementById('as').focus()
    }
}
function limpar2(){
    document.getElementById('ap1').value = ''
    document.getElementById('ap2').value = ''
    document.getElementById('as').value = ''
    document.getElementById('nota').innerHTML = 'Resultado: '
}