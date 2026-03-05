import React, { useState } from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
	const [openSection, setOpenSection] = useState(null);

	const toggleSection = (index) => {
		setOpenSection(openSection === index ? null : index);
	};

	return (
		<div className="all-projects-container">
			{INFO.projects.map((section, sectionIndex) => {
				const isOpen = openSection === sectionIndex;
				const visibleItems = isOpen
					? section.items
					: section.items.slice(0, 3);

				return (
					<React.Fragment key={sectionIndex}>
						<div className="all-projects-section-title">
							{section.section}
						</div>

						{visibleItems.map((project, projectIndex) => (
							<div
								className="all-projects-project"
								key={`${sectionIndex}-${projectIndex}`}
							>
								<Project
									logo={project.logo}
									title={project.title}
									description={project.description}
									linkText={project.linkText}
									link={project.link}
								/>
							</div>
						))}

						{section.items.length > 3 && (
							<div
								className="all-projects-loadmore-divider"
								onClick={() => toggleSection(sectionIndex)}
							>
								<span>{isOpen ? "Voir moins d'articles" : "Voir plus d'articles"}</span>
							</div>
						)}

					</React.Fragment>
				);
			})}
		</div>
	);
};

export default AllProjects;
