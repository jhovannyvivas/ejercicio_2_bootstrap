function envioTarjetas (cantidad) 
{

    if (cantidad === 0) {
        return console.log('Envio terminado');
    }
    else
    {
        console.log(cantidad + ' tarjetas por enviar');
        // codigo de envio de la tarjeta
        cantidad -= 1;
        return envioTarjetas(cantidad);
        
    }

}