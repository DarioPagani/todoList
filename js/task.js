/** Migliarino Pisano, li 09/06/2017 
 * Questo file contiene la classe "Task" per gestire la gestione di un singolo 
 *  task
 *  @author: Dario Pagani <dario.pagani@itispisa.gov.it>, Nordine Oubihi <nordine.oubihi@itispisa.gov.it>
 *  @version: 0.05a
 */

var stati = 
{
	inOrario: 0,
	inRitardo: 1,
	terminato: 2,
	eliminato: 3,
};

function Task(nome, descrizone, scadenza)
{
	/****** METODI **********/
	// TODO Scrivere i metodi
	this.onScadenza = function(sopra) 
	{
		sopra.stato = stati.inRitardo
		console.log("sono qua!");
	};
	
	this.setTitolo = function() {;};
	
	this.toString = function() {;};
	this.toStringHTML = function(sopra) 
	{
		return
			"<div class=\"card\">" +
				"<header class=\"card-header\">" +
					"<p class=\"card-header-title\">" + sopra.nome + "</p>"
				"</header>" +
				// TODO Finire l'impaginazione
			"</div>";
	};
	
	
	/****** COSTRUTTORE *******/
	// TODO Scrivere il costruttore :P
	this.nome = nome;
	this.descrizione = descrizone;
	this.scadenza = scadenza;
	this.stato = stati.inOrario;
	
	// È una scadenza valida?
	if(this.scadenza.getTime() <= (new Date()).getTime())
		throw new Error("La data di scadenza è già passata!");
	
	// Aggiungo un ID da utilizzare poi
	var i;
	for(i = 0; i < 10 && $("#" + this.id)[0] !== undefined; i++)
		this.id = this.scadenza.getTime().toString() + (new Date()).getTime().toString();
	
	if(i >= 10)
		throw new Error("Impossibile generare un ID univoco al momento!")
	
	// Avvio 
	window.setTimeout(this.onScadenza, this.scadenza.getTime() - (new Date()).getTime(), this);
}
