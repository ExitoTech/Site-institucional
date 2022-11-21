function mostrarImgUser(){
    var imgUser = sessionStorage.IMG_USER;
    var divImgUser = document.getElementById('divImgPerfil')
    

    if(imgUser == null){
        divImgUser.innerHTML = `<img src="img/fotoPerfil/default-avatar-profile.jpg" alt="">`
    }else{
        divImgUser.innerHTML = `<img src="${imgUser}" alt="">`
    }
}