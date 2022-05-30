import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';

import './projects.css';

function ProjectCard({ name, image, desc, imageArr }) {
  return (
    <div className="project-card">
      <div className="image">
        {/* <img src={image} alt="projectImage" className="project-image" /> */}
        <div className="marquee">
          <div className="track">
            {imageArr?.map((image, i) => (
              <img src={image} alt="projectImage" className="project-image" />
            ))}
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <h2 className="project-title">
          <strong>{name}</strong>
        </h2>
        <div className="project-description">{desc}</div>
      </div>
      <div className="project-links">
        <Link>
          <button>Live Project</button>
        </Link>
        <Link>
          <button>Project Code</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
