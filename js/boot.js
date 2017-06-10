/** Migliarino Pisano, li 09/06/2017
 * Questo file contiene le istruzioni
 * @author: Dario Pagani <dario.pagani@itispisa.gov.it>, Nordine Oubihi <nordine.oubihi@itispisa.gov.it>
 * @version: 0.01a
 */

// TODO Scrivere questo file

document.getElementById("error1").remove();

try
{
	if(localStorage === undefined)
		throw new Error("Questa piattaforma non supporta il LocalStorage");
	else
		document.getElementById("error3").remove();
}
catch(errore)
{
	throw erroe;
}
document.getElementById("error2").remove();

if($ === undefined)
	throw new Error("No JQuerry relevated!");

document.getElementById("error4").remove();
document.getElementById("errors").remove();
