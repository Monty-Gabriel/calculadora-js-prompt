/*//tipos de função

//Declarativas
function funcao(){
    console.log('Tudo certo')
}
funcao();

// Expresão de função

//Com nomeação

var funcao = function funcao(){
    console.log('Sou uma mensagem de função de expresão')
}

funcao();


var funcao = () => {
    console.log('Sou uma arrow funtion!')
}
funcao();
*/

function escopoLocal() {
    let escopoLocal = "Local";
}
console.log(escopoLocal);