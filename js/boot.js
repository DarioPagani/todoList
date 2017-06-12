/** Migliarino Pisano, li 09/06/2017
 * Questo file contiene le istruzioni
 * @author: Dario Pagani <dario.pagani@itispisa.gov.it>, Nordine Oubihi <nordine.oubihi@itispisa.gov.it>
 * @version: 0.05a
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
	throw errore;
}
document.getElementById("error2").remove();

if($ === undefined)
	throw new Error("No JQuerry relevated!");

document.getElementById("error4").remove();
document.getElementById("errors").remove();

// Memoria globale
var inOrario	= new Array();
var inRitardo	= new Array();
var scaduti		= new Array();

// Tento di recuperare dalla memoria locale della roba
if(localStorage.getItem("inOrario") !== null)
	inOrario = JSON.parse('[' + localStorage.getItem("inOrario") + ']');

if(localStorage.getItem("inRitardo") !== null)
	inOrario = JSON.parse('[' + localStorage.getItem("inRitardo") + ']');

if(localStorage.getItem("inRitardo") !== null)
	inOrario = JSON.parse('[' + localStorage.getItem("inRitardo") + ']');

// Configurazione dei campi di input in basso
$.datepicker.setDefaults( $.datepicker.regional[ "it" ] );
$("#data").datepicker({dateFormat: "dd/mm/yy",});
$("#data_").datepicker({dateFormat: "dd/mm/yy",});

$("#data").val((new Date).toLocaleDateString());
$("#data_").val((new Date).toLocaleDateString());


/*$("#campiInner").validate({
		rules:
		{
			attivita: {
				required: "true"
			}
		}
	}
);*/
