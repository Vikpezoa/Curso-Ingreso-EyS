function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while (numero<0 || numero>9)
	{
		numero = prompt ("Error, Ingrese nuevamente");
	}

	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN