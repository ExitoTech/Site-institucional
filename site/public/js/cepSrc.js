function buscarCep() {
    var cep = inputCep.value;
    var logradouro = inputLogradouro;
    var uf = inputUf;
    // console.log(cep)
    var url = "https://viacep.com.br/ws/"+cep+"/json/"  
    $.ajax({
        url:url,
        type:"GET",
        success:function(response){
            console.log(response)
            logradouro.value = response.logradouro;
            uf.value = response.uf
        }
    })
}
