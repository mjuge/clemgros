import React from "react";

function article_1() {
	return {
		date: "Janvier 2025 - Aujourd'hui",
		title: "LE FIGARO | Journaliste transport, spécialisé automobile ",
		description:
			"J’ai été recruté pour lancer la verticale web automobile du Figaro, ce qui m’a permis d’élaborer et de mettre sur pied la stratégie éditoriale de la rubrique. Au fil des mois, nous avons utilisé la voiture comme point de départ d'un récit journalistique plus large. Mon travail s'est articulé autour de trois axes : le décryptage d'actualité (analyse des débats sur les Zones à Faible Émission), des récits anglés « société » (la Peugeot 504 devenue pièce de musée, les voitures confisquées aux délinquants routiers réutilisés par des garages solidaires, l'enquête sur la mort de Bernadette Delmotte étranglée par la vitre automatique de sa Fiat 500), et du fact-checking après avoir constaté la forte mésinformation circulant dans l'écosystème de la presse automobile (radars, voitures radars, contrôle technique). Nous avons également mis sur pied enquêtes, reportages et couverts nos informations propres et inédites.",
		keywords: [
			"LE FIGARO",
			"Journaliste transport",
			"Automobile",
			"Clément Gros",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Septembre 2024 - Janvier 2025",
		title: "LE FIGARO | Journaliste web économique ",
		description:
			"Au sein du service web Économie, j'ai assuré la rédaction d'articles et de brèves sur l'actualité économique quotidienne. Cette expérience m'a permis d'acquérir toutes les clés du journalisme web : maîtrise des méthodes SEO, production de contenus réactifs et traitement rapide de l'information. Dans ce court laps de temps, j’ai pu me concentrer sur les thématiques du travail et de l'emploi. Ce faisant, j’ai contribué à un dossier  du journal papier consacré au recrutement avec un article analysant « les stratégies d'Amazon, Cdiscount et King Jouet pour gagner la bataille des embauches de Noël ».",
		style: ``,
		keywords: [
			"LE FIGARO",
			"Journaliste web économique",
			"Clément Gros",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Février à août 2024",
		title: "CONTEXTE | Journaliste stagiaire, pôle Pouvoirs",
		description:
			"C’est dans cette rédaction que j'ai été formé à la rigueur journalistique : vérification systématique via plusieurs sources, respect de la déontologie et sélection minutieuse des angles. Durant cette période électorale intense, j'ai assuré le suivi de la gauche aux élections européennes puis aux élections législatives anticipées. Le défi consistait à trouver des informations propres, Contexte ne publiant que des brèves ou articles à valeur ajoutée que l'on ne retrouve pas ailleurs.",
		style: ``,
		keywords: [
			"CONTEXTE",
			"Journaliste stagiaire",
			"Pôle Pouvoirs",
			"Clément Gros",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Septembre 2022 à mars 2023",
		title: "PUBLIC SÉNAT | Journaliste assistant ",
		description:
			"En tant qu'assistant de l'émission matinale « Bonjour Chez Vous !», j'ai géré le calage des invités et préparé l'ensemble de la documentation nécessaire (fiches, éléments de contexte pour la présentatrice). Cette mission m'a permis d'acquérir une connaissance du travail parlementaire et de développer un réseau de sources institutionnelles. J'ai également contribué à la couverture d'événements majeurs comme le Congrès des maires et le Salon de l'Agriculture.",
		style: ``,
		keywords: [
			"PUBLIC SÉNAT",
			"Journaliste assistant",
			"Clément Gros",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 4</h1>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "Février à juillet 20223",
		title: "REVUE REGARDS | Journaliste stagiaire ",
		description:
			"Mon premier stage dans le métier s'est déroulé pendant la période électorale de la présidentielle et des législatives. La taille réduite de la rédaction constituait un avantage : j'avais toute liberté pour proposer et réaliser des sujets variés (reportages, récits), ce qui m’a même permis de réaliser une première  enquête : à propos des conditions de travail dégradées et de l'état de vétusté des équipements dans le lycée Voillaume d'Aulnay-sous-Bois.",
		style: ``,
		keywords: [
			"REVUE REGARDS",
			"Journaliste stagiaire",
			"Clément Gros",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 5</h1>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1, article_2, article_3, article_4, article_5];

export default myArticles;
