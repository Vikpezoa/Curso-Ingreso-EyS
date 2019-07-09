/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    var importe;
    var resultado;
 

    importe = parseFloat(importe);
    importe = document.getElementById("importe").value;

    resultado = parseFloat(importe) - parseFloat(importe * 0.25);

    alert("El total es: " + resultado);
    






	
}
