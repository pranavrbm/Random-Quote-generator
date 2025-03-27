async function getQuote() {
	try {
		const response = await fetch("/quote");
		const data = await response.json();
		if (data.error) {
			document.getElementById("quoteDisplay").innerHTML =
				"Error fetching quote.";
			document.getElementById("authorDisplay").innerHTML = "- Unknown";
		} else {
			document.getElementById(
				"quoteDisplay"
			).innerHTML = `"${data.quote}"`;
			document.getElementById(
				"authorDisplay"
			).innerHTML = `- ${data.author}`;
		}
	} catch (error) {
		document.getElementById("quoteDisplay").innerHTML =
			"Something went wrong!";
		document.getElementById("authorDisplay").innerHTML = "- Unknown";
	}
}

// Load a quote on page load
getQuote();
