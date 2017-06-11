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

class Task
{
	constructor(nome, descrizione, scadenza)
	{
		/****** COSTRUTTORE *******/
		// TODO Scrivere il costruttore :P
		this.nome = nome;
		this.descrizione = descrizione;
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
	}
	
	// Metodo per avviare il timer, controlla se non è già stato avviato in primis
	initializeTimer()
	{
		if(this.timer !== undefined)
			return -1;
		
		this.timer = window.setTimeout(this.onScadenza, this.scadenza.getTime() - (new Date()).getTime(), this);
	}
	
	toStringHTML(sopra) 
	{
		return "<div class=\"card\">" +
				"<header class=\"card-header\">" +
					"<p class=\"card-header-title\">" + this.nome + "</p>"
				"</header>" +
				// TODO Finire l'impaginazione
			"</div>";
	}
	
	// Roba statica
	static parse(toParse)
	{
		
	}
}
