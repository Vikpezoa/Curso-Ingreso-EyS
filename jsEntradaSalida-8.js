/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
    var numeroDivisor;
    var resto;
     numeroDividendo = parseInt(numeroDividendo);
     numeroDivisor = parseInt(numeroDivisor);

     numeroDividendo = document.getElementById("numeroDividendo").value;
     numeroDivisor = document.getElementById("numeroDivisor").value;

    resto = parseInt(numeroDividendo) % parseInt(numeroDivisor);

    alert("El resto es: " + resto);
}
