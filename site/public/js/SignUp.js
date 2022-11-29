function entrarDivA(){
    textoLink.innerHTML= `< voltar`
    
}

function sairDivA(){
    textoLink.innerHTML= 'ExitoTech'
}

function validarNomeEmpresa() {
    var nomeEmpresa = inputNomeDaEmpresa.value;

    if (nomeEmpresa.length >= 3) {
        spanEmpresa.innerHTML = "Ok";
        spanEmpresa.style.color = "#80b918";
    }
    else {
        spanEmpresa.innerHTML = "O nome deve conter ao menos 3 caracteres";
        spanEmpresa.style.color = "#d90429";
    }
}

function verificarCep() {
    var Cep = inputCep.value

    if (Cep.length == 9) {
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "Ok";
        spanCep.style.color = "#80b918";
        spanLogradouro.innerHTML = "OK";
        spanLogradouro.style.color = "#80b918";
        spanUf.innerHTML = "OK";
        spanUf.style.color = "#80b918";
    }

    else {
        inputCep.style.borderLeft = "none";
        inputCep.style.borderTop = "none";
        inputCep.style.borderRight = "none";
        spanCep.innerHTML = "O CEP deve conter 8 dígitos";
        spanCep.style.color = "#d90429";
    }
}

function verificarCnpj() {
    var cnpj = inputCnpj.value

    if (cnpj.length == 18) {
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
        spanCnpj.innerHTML = "Ok";
        spanCnpj.style.color = "#80b918";
    }
    else {
        inputCnpj.style.borderLeft = "none";
        inputCnpj.style.borderTop = "none";
        inputCnpj.style.borderRight = "none";
        spanCnpj.innerHTML = "O CNPJ deve conter 14 dígitos";
        spanCnpj.style.color = "#d90429";
    }
}

function validarPorte(){
    var porteEmpresa = document.getElementById('selectPorte').value;

    if(porteEmpresa == 1 || porteEmpresa == 2 || porteEmpresa == 3){
        spanPorte.style.color = "#80b918"
        spanPorte.innerHTML = "Ok"
    }
   if(porteEmpresa == 1){
    porte = "Grande Porte"
   }
   else if(porteEmpresa == 2){
    porte =  "Médio Porte"
   }
   else{
    porte = "Pequeno Porte"
   }
}


function nextSignUp() {

    var errosValidação = 0

    if(inputNomeDaEmpresa.value < 3){

        errosValidação++
    }
    else if(inputCep.value < 9){

        errosValidação++

    }
    else if( selectPorte.value != 1 && selectPorte.value != 2 && selectPorte.value != 3){

        errosValidação++
    }
    else if(inputCnpj.value < 18){

        errosValidação++

    }


     if (errosValidação == 0  ) {
        setTimeout(() => {
            window.location.assign("cadastro-pt2.html");
        }, "2500")

        Swal.fire({
            icon: 'success',
            title: '<h3>Dados enviados com sucesso</h3> <br> Indo para a proxima etapa.',
            showConfirmButton: false
        })
        sessionStorage.setItem("NOME_EMPRESA" ,document.getElementById("inputNomeDaEmpresa").value) 
        sessionStorage.setItem("CEP_EMPRESA",document.getElementById("inputCep").value) 
        sessionStorage.setItem("CNPJ_EMPRESA",document.getElementById("inputCnpj").value) 
        sessionStorage.setItem("PORTE_EMPRESA", porte)
        sessionStorage.setItem("RUA_EMPRESA",document.getElementById("inputLogradouro").value) 
        sessionStorage.setItem("UF", document.getElementById("inputUf").value) 
        sessionStorage.setItem("WEB_HOOK", document.getElementById("inputHook").value)
  
    }
    else {
        Swal.fire({
            icon: 'error',
            title: '<h3>Dados Invalidos</h3> <br> Verifique se tudo está digitado corretamente.',
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.assign("cadastro.html");
        }, "2500")
    }
}

function exibirPopUp(){
    ppSlack.style.display = "block"
}

function fecharPopUp(){
    ppSlack.style.display = "none"
    contador = 0;
    avancar();
}

var contador = -1;

function avancar(){
    if(contador < 18){
        contador++
    }

    switch(contador){
        case 0:
            explicacao.innerHTML = "Slack é um aplicativo que tem como finalidade o envio e recebimento de mensagens. Dentro do Slack é possível criar canais, que funcionam como grupos, você pode por exemplo, criar grupos para cada área de sua empresa. <br><br> Nós da ExitoTech, temos uma função muito interessante! Nós utilizamos um bot para enviar alertas sobre o alto uso de CPU e memória RAM dos computadores de sua empresa. Caso se interesse por esse sistema de envio de alertas via mensagem, nos próximos slides você terá acesso a um passo a passo de como criar uma conta no Slack e como ter acesso ao 'WebHook', um link que usaremos para enviar os alertas."
            explicacao.style.fontSize = "1.5rem"
            explicacao.style.paddingTop = "2rem"
            break;
        case 1:
            s1.innerHTML = "<img src='./img/slide-slack/slide1.jpg'>"
            explicacao.innerHTML = "Clique em 'Create an App' para criar o bot que enviará as mensagens. Para acessar esta tela, clique <a href='https://api.slack.com/' target='_blank'>aqui.</a>"
            console.log(contador);
            break;
        case 2:
            s2.innerHTML = "<img src='./img/slide-slack/slide2.jpg'>"
            s1.innerHTML = ""
            explicacao.innerHTML = "Clique em 'sign in to your Slack account' para criar uma conta, ou logar em uma já existente."
            console.log(contador);
            break;
        case 3: 
            s3.innerHTML = "<img src='./img/slide-slack/slide3.jpg'>"
            s2.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Criar um workspace' caso não tenha um. Se já tiver um workspace, pode pular os próximos 5 slides."
            console.log(contador);
            break;
        case 4:
            s4.innerHTML = "<img src='./img/slide-slack/slide4.jpg'>"
            s3.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Criar um workspace'."
            console.log(contador);
            break;
        case 5:
            s5.innerHTML = "<img src='./img/slide-slack/slide5.jpg'>"
            s4.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá escolher o nome do seu workspace, pode ser o nome da empresa."
            console.log(contador);
            break;
        case 6:
            s6.innerHTML = "<img src='./img/slide-slack/slide6.jpg'>"
            s5.innerHTML = ""
            explicacao.innerHTML = "Aqui você pode adicionar integrantes ao seu worspace, basta inserir o email deles. Caso não queira adicionar ninguém agora, você pode ignorar esta etapa. Você poderá adicionar integrantes posteriormente."
            console.log(contador);
            break;
        case 7:
            s7.innerHTML = "<img src='./img/slide-slack/slide7.jpg'>"
            s6.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá escolher o nome do canal para onde deveremos mandar os alertas."
            console.log(contador);
            break;
        case 8:
            s8.innerHTML = "<img src='./img/slide-slack/slide8.jpg'>"
            s7.innerHTML = ""
            explicacao.innerHTML = "Quando chegar nesta tela, volte para a tela inicial do Slack. Você pode fazer isso clicando <a href='https://api.slack.com/apps?new_app=1' target='_blank'>aqui.</a>"
            console.log(contador);
            break;
        case 9:
            s9.innerHTML = "<img src='./img/slide-slack/slide9.jpg'>"
            s8.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Create an App' para criar o Bot."
            console.log(contador);
            break;
        case 10:
            s10.innerHTML = "<img src='./img/slide-slack/slide10.jpg'>"
            s9.innerHTML = ""
            explicacao.innerHTML = "Aqui você pode clicar nesta primeira opção."
            console.log(contador);
            break;
        case 11:
            s11.innerHTML = "<img src='./img/slide-slack/slide11.jpg'>"
            s10.innerHTML = ""
            explicacao.innerHTML = "Aqui, no primeiro campo você deve colocar o nome que quer dar ao Bot, e logo em seguida, no campo abaixo, você deve especificar em qual workspace o Bot deverá ser adicionado."
            console.log(contador);
            break;
        case 12:
            s12.innerHTML = "<img src='./img/slide-slack/slide12.jpg'>"
            s11.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Incoming Webhooks'."
            console.log(contador);
            break;
        case 13:
            s13.innerHTML = "<img src='./img/slide-slack/slide13.jpg'>"
            s12.innerHTML = ""
            explicacao.innerHTML = "Ative a chave, para que seja possível criar um webhook (webhook é o link que usaremos para enviar as mensagens de alerta)."
            console.log(contador);
            break;
        case 14:
            s14.innerHTML = "<img src='./img/slide-slack/slide14.jpg'>"
            s13.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Add New Webhook to Workspace'."
            console.log(contador);
            break;
        case 15:
            s15.innerHTML = "<img src='./img/slide-slack/slide15.jpg'>"
            s14.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá selecionar o canal para o qual deveremos enviar os alertas. Clique em 'Pesquisar um canal...' para encontrar o canal que você criou."
            console.log(contador);
            break;
        case 16: 
            s16.innerHTML = "<img src='./img/slide-slack/slide16.jpg'>"
            s15.innerHTML = ""
            explicacao.innerHTML = "Selecione o canal desejado."
            console.log(contador);
            break;
        case 17:
            s17.innerHTML = "<img src='./img/slide-slack/slide17.jpg'>"
            s16.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Permitir' para permitir que o Bot seja adicionado ao canal."
            console.log(contador);
            break;
        case 18:
            s18.innerHTML = "<img src='./img/slide-slack/slide18.jpg'>"
            s17.innerHTML = ""
            explicacao.innerHTML = "Clique em 'copy' e cole o webhook no campo informado na nossa página de cadastro."
            break;
    }
    console.log(contador)
}

function retroceder(){
    if(contador <= 18 && contador > 0){
        contador--
    }
    switch(contador){
        case 0:
            explicacao.innerHTML = "Slack é um aplicativo que tem como finalidade o envio e recebimento de mensagens. Dentro do Slack é possível criar canais, que funcionam como grupos, você pode por exemplo, criar grupos para cada área de sua empresa. <br><br> Nós da ExitoTech, temos uma função muito interessante! Nós utilizamos um bot para enviar alertas sobre o alto uso de CPU e memória RAM dos computadores de sua empresa. Caso se interesse por esse sistema de envio de alertas via mensagem, nos próximos slides você terá acesso a um passo a passo de como criar uma conta no Slack e como ter acesso ao 'WebHook', um link que usaremos para enviar os alertas."
            explicacao.style.fontSize = "1.5rem"
            explicacao.style.paddingTop = "2rem"
            s1.innerHTML = ""
            break;
        case 1:
            s1.innerHTML = "<img src='./img/slide-slack/slide1.jpg'>"
            s2.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Create an App' para criar o bot que enviará as mensagens. Para acessar esta tela, clique <a href='https://api.slack.com/' target='_blank'>aqui.</a>"
            console.log(contador);
            break;
        case 2:
            s2.innerHTML = "<img src='./img/slide-slack/slide2.jpg'>"
            s3.innerHTML = ""
            explicacao.innerHTML = "Clique em 'sign in to your Slack account' para criar uma conta, ou logar em uma já existente."
            console.log(contador);
            break;
        case 3: 
            s3.innerHTML = "<img src='./img/slide-slack/slide3.jpg'>"
            s4.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Criar um workspace' caso não tenha um. Se já tiver um workspace, pode pular os próximos 5 slides."
            console.log(contador);
            break;
        case 4:
            s4.innerHTML = "<img src='./img/slide-slack/slide4.jpg'>"
            s5.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Criar um workspace'."
            console.log(contador);
            break;
        case 5:
            s5.innerHTML = "<img src='./img/slide-slack/slide5.jpg'>"
            s6.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá escolher o nome do seu workspace, pode ser o nome da empresa."
            console.log(contador);
            break;
        case 6:
            s6.innerHTML = "<img src='./img/slide-slack/slide6.jpg'>"
            s7.innerHTML = ""
            explicacao.innerHTML = "Aqui você pode adicionar integrantes ao seu worspace, basta inserir o email deles. Caso não queira adicionar ninguém agora, você pode ignorar esta etapa. Você poderá adicionar integrantes posteriormente."
            console.log(contador);
            break;
        case 7:
            s7.innerHTML = "<img src='./img/slide-slack/slide7.jpg'>"
            s8.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá escolher o nome do canal para onde deveremos mandar os alertas."
            cosole.log(contador);
            break;
        case 8:
            s8.innerHTML = "<img src='./img/slide-slack/slide8.jpg'>"
            s9.innerHTML = ""
            explicacao.innerHTML = "Quando chegar nesta tela, volte para a tela inicial do Slack. Você pode fazer isso clicando <a href='https://api.slack.com/apps?new_app=1' target='_blank'>aqui.</a>"
            console.log(contador);
            break;
        case 9:
            s9.innerHTML = "<img src='./img/slide-slack/slide9.jpg'>"
            s10.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Create an App' para criar o Bot."
            console.log(contador);
            break;
        case 10:
            s10.innerHTML = "<img src='./img/slide-slack/slide10.jpg'>"
            s11.innerHTML = ""
            explicacao.innerHTML = "Aqui você pode clicar nesta primeira opção."
            console.log(contador);
            break;
        case 11:
            s11.innerHTML = "<img src='./img/slide-slack/slide11.jpg'>"
            s12.innerHTML = ""
            explicacao.innerHTML = "Aqui, no primeiro campo você deve colocar o nome que quer dar ao Bot, e logo em seguida, no campo abaixo, você deve especificar em qual workspace o Bot deverá ser adicionado."
            console.log(contador);
            break;
        case 12:
            s12.innerHTML = "<img src='./img/slide-slack/slide12.jpg'>"
            s13.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Incoming Webhooks'."
            console.log(contador);
            break;
        case 13:
            s13.innerHTML = "<img src='./img/slide-slack/slide13.jpg'>"
            s14.innerHTML = ""
            explicacao.innerHTML = "Ative a chave, para que seja possível criar um webhook (webhook é o link que usaremos para enviar as mensagens de alerta)."
            console.log(contador);
            break;
        case 14:
            s14.innerHTML = "<img src='./img/slide-slack/slide14.jpg'>"
            s15.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Add New Webhook to Workspace'."
            console.log(contador);
            break;
        case 15:
            s15.innerHTML = "<img src='./img/slide-slack/slide15.jpg'>"
            s16.innerHTML = ""
            explicacao.innerHTML = "Aqui você irá selecionar o canal para o qual deveremos enviar os alertas. Clique em 'Pesquisar um canal...' para encontrar o canal que você criou."
            console.log(contador);
            break;
        case 16: 
            s16.innerHTML = "<img src='./img/slide-slack/slide16.jpg'>"
            s17.innerHTML = ""
            explicacao.innerHTML = "Selecione o canal desejado."
            console.log(contador);
            break;
        case 17:
            s17.innerHTML = "<img src='./img/slide-slack/slide17.jpg'>"
            s18.innerHTML = ""
            explicacao.innerHTML = "Clique em 'Permitir' para permitir que o Bot seja adicionado ao canal."
            console.log(contador);
            break;
        case 18:
            s18.innerHTML = "<img src='./img/slide-slack/slide18.jpg'>"
    }
}
