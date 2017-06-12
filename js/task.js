/** Migliarino Pisano, li 09/06/2017
 * Questo file contiene la classe "Task" per gestire la gestione di un singolo
 *  task
 *  @author: Dario Pagani <dario.pagani@itispisa.gov.it>, Nordine Oubihi <nordine.oubihi@itispisa.gov.it>
 *  @version: 0.5a
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
		this.id = this.scadenza.getTime().toString() + (new Date()).getTime().toString();
		this.initializeTimer();
	}

	// Metodo per avviare il timer, controlla se non è già stato avviato in primis
	initializeTimer()
	{
		if(this.timer !== undefined)
			return -1;

			clearTimeout(this.timer);

		console.log(this.scadenza.getTime() - (new Date()).getTime());

		this.timer = setTimeout(this.move, this.scadenza.getTime() - (new Date()).getTime(), "scaduti", this);
	}

	toStringHTML()
	{
		return "<div class=\"card\" id=\""+ this.id + "\">" +
				"<header class=\"card-header\">" +
					"<p class=\"card-header-title\">" + this.nome + "</p>" +
				"</header>" +
					"<div class=\"card-content\">"+
						"<div class=\"content\">" +
							this.descrizione.toString() +
							"<br>" +
							"<small>Scade il " + this.scadenza.toLocaleString() + "</small>" +
						"</div>" +
					"</div>" +
				"<footer class=\"card-footer\">" +
					"<a class=\"card-footer-item button is-danger is-outlined delete_\">" +
							"<span class=\"icon is-small\"><i class=\"fa fa-trash\"></i></span>"+
							"<span>Elimina</span>"+
						"</a>"+
						"<a class=\"card-footer-item button is-warning is-outlined delay_\" onclick=\"" + ">" +
							"<span class=\"icon is-small\"><i class=\"fa fa-clock-o\"></i></span>"+
							"<span>Posticipa</span>"+
						"</a>"+
						"<a class=\"card-footer-item button is-success is-outlined\ ok_\">"+
							"<span class=\"icon is-small\"><i class=\"fa fa-check\"></i></span>"+
							"<span>Terminato</span>"+
					"</a>"+
				"</footer>" +
			"</div>";
	}

	addToHTML(a)
	{
		/*if(typeof a !== "String")
			throw new Error("First parm MUST be a String()!");*/


		$("#"+ a + " .listaPromemoria").append("<li>"+this.toStringHTML()+"</li>");
		this.elementoHTML = $("#" + this.id.toString());
		this.elementoHTML[0].padre = this;
		console.log(this.elementoHTML);

		// Inzializzazione dei pulsanti
		$('#' + this.id).find(".delete_").click(this, function(a)
				{
					//a.elementoHTML.remove();
					$(this).parent().parent()[0].padre.finalize();
				});

		$('#' + this.id).find(".delay_").click(this, function(a)
				{
					$("#newTime").addClass("is-active");

					$("#newTime").find("button").click(a.data, function(a)
						{
							var miaData = $("#data_").val().split("/");
							var f = new Date(miaData[2], miaData[1] - 1, miaData[0]);
							a.data.scadenza = f;
							a.data.elementoHTML.find("small").text("scade il " + f.toLocaleString());
							a.data.initializeTimer();
							$("#newTime").removeClass("is-active");
						});
				});
		$('#' + this.id).find(".ok_").click(this, function(a)
				{
					$(this).parent().parent()[0].padre.move("terminati", a.data);
				});
	}

	move(a, b)
	{
		if(b === undefined)
			$("#" + b.id) = this

		$("#" + b.id).hide('fade').detach().appendTo("#"+a).end().show('fade');

		if(a == "terminati")
		{
			$("#" + b.id).find(".delay_").remove();
			$("#" + b.id).find(".ok_").remove();
		}
	}

	finalize(a)
	{
		this.elementoHTML.remove();
		clearTimeout(this.timer);
	}


	// Roba statica
	static parse(toParse)
	{

	}

	static inOrario(){return 3;}
}
