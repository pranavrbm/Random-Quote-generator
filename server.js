const express = require("express");
const axios = require("axios");
const app = express();
const port = 2000;

app.use(express.static("public")); // Serve frontend files

app.get("/quote", async (req, res) => {
	try {
		const response = await axios.get("https://api.quotable.io/random");
		res.json({
			content: response.data.content,
			author: response.data.author,
		});
	} catch (error) {
		res.status(500).json({ error: "Could not fetch quote" });
	}
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
