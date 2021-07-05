export function pegaUsuarioLogado() {
    if (window.localStorage.length > 0) {
        let retorno = JSON.parse(window.localStorage.getItem('usuarioLogado'));
        return retorno.data[0];
    }
    return false;
}

export function verificaSePossuiUsuarioLogado() {
    const user = pegaUsuarioLogado();
    return !!user
}

export function deslogar() {
    window.localStorage.clear();
}

