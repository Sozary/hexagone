class GestionCommandes {
	traiter(req, res) {
		const db = new MySQL("localhost", "root", "1234");
		const ids = req.query.ids;
		const articles = db.query(
			"SELECT * FROM articles WHERE id IN (" + ids + ")",
		);

		let total = 0;
		for (const a of articles) total += a.prix;
		if (req.query.codePromo === "ETE2026") total = total * 0.8;
		db.query("INSERT INTO commandes (total) VALUES (" + total + ")");
		envoyerEmail(
			req.query.email,
			"<h1>Merci !</h1><p>Total : " + total + "€</p>",
		);

		res.writeHead(200);
		res.end(JSON.stringify({ total }));
	}
}
