function mostrarImgUser(){
    var imgUser = sessionStorage.fotoPerfil;
    var divImgUser = document.getElementById('divImgPerfil')
    divImgUser.innerHTML = `<img src="${imgUser}" alt="">`

}