export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
}

export const formatearFecha = fecha => {    
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };
    const fechaNueva = new Date(fecha);
    const hora = addCero(fechaNueva.getHours());
    const minuto = addCero(fechaNueva.getMinutes());
    const fechaDeHoy = fechaNueva.toLocaleDateString('es-ES', opciones);

    function addCero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    };

    return fechaDeHoy + ' ' + '-' + ' ' + hora + ':' + minuto + 'hs';
}