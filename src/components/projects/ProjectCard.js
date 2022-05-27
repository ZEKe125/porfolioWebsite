import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import Pagination from 'docs/src/modules/components/Pagination';
import './projects.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

function ProjectCard({ name, image, desc, imageArr}) {
  const [index, setindex] = useState(0);

  const handleChangeIndex = index => {
    setindex(index);
  };

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
