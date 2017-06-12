function addTask()
{
	try
	{
		var ok = true;

		// TODO Scrivere qua il codice
		if($("#attivita").val()-length <= 0)
		{
			$("#attivita").addClass("is-danger");
			$("#attivita_p").text("Questo campo non deve essere vuoto!");
			ok = false;
		}
		else
		{
			$("#attivita").removeClass("is-danger");
			$("#attivita_p").text("");
		}

		if($("#descrizione").val().length <= 0)
		{
			$("#descrizione").addClass("is-danger");
			$("#descrizione_p").text("Questo campo non deve essere vuoto!");
			ok = false;
		}
		else
		{
			$("#descrizione").removeClass("is-danger");
			$("#descrizione_p").text("");
		}

		if(!(!ok)) {
			var from = $("#data").val().split("/");
			var f = new Date(from[2], from[1] - 1, from[0]);
			f.setHours($("#ora").val());
			f.setMinutes($("#minuti").val());

			console.log(f.toString())

			var x = new Task($("#attivita").val(), $("#descrizione").val(), f);
			console.log(x);
			x.addToHTML("orario");
			inOrario.push(x);
		}

	}
	catch(e)
	{
		console.error("Qalcosa non ha funzionato:\n"+e.toString());
		$("#errore_").text(e.toString());
		$("#eccezione").addClass("is-active")
	}

	// Ritorna sempre false per il PHP
	return false;
}
