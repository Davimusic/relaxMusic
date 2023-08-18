let coor = 0;
let reproducir = 'no';
let intervaloSubir;
let estado = 'audioActual';

export function variablesGlobales() {

    function getCoor() {
        return coor;
    }

    function setCoor(newCoor) {
        coor = newCoor;
    }

    function getReproducir() {
        return reproducir;
    }

    function setReproducir(newReproducir) {
        reproducir = newReproducir;
    }

    function getIntervaloSubir() {
        return intervaloSubir;
    }

    function setIntervaloSubir(newIntervaloSubir) {
        intervaloSubir = newIntervaloSubir;
    }

    function getEstado() {
        return estado;
    }

    function setEstado(newEstado) {
        estado = newEstado;
    }

    return {
        getCoor,
        setCoor,
        getReproducir,
        setReproducir,
        getIntervaloSubir,
        setIntervaloSubir,
        getEstado,
        setEstado
    };
}


