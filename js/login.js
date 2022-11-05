function loginUsuario(){
    var nomeUsuario;
    var senhaUsuario;

    nomeUsuario = document.formLoginUsuario.usuario.value
    senhaUsuario = document.formLoginUsuario.senha.value
    
    if (nomeUsuario == "" || senhaUsuario == ""){
        window.alert('Preencha os campos por gentileza');
    }
    else if (nomeUsuario != "bigchungus" || senhaUsuario != "wow"){
        window.alert('Credenciais incorretas');
    }
    else{
        location.href="pages/polos/polos.html"
    }
}