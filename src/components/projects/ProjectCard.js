import React from 'react';
import Link from 'next/link';
import './projects.css';

function ProjectCard({ name, image, desc }) {
  return (
    <div className="project-card">
      <div className="image">
        <img src={image} alt="projectImage" className="project-image" />
      </div>
      <div className="card-bottom">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <div className="project-description">{desc}</div>
      </div>
      <div className="project-links">
        <Link>Live Project</Link>
        <Link>Project Code</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
