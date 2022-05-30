import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';

import './projects.css';

function ProjectCard({ name, desc, imageArr, track = 'track' }) {
  return (
    <div className="project-card">
      <div className="image">
        {/* <img src={image} alt="projectImage" className="project-image" /> */}
        <div className="marquee">
          <div className={track}>
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
        <a>
          <button>Live Project</button>
        </a>
        <a>
          <button>Project Code</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
