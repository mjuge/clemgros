import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = ({ date, title, description }) => {
	return (
		<div className="article">
			<div className="article-left-side">
				<div className="article-date">{date}</div>
			</div>

			<div className="article-right-side">
				<div className="article-title">{title}</div>
				<div className="article-description">{description}</div>
			</div>
		</div>
	);
};


export default Article;
