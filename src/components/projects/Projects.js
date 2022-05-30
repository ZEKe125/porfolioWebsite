import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import './projects.css';
import p1i1 from '../../assets/project1/omronProjectMobil (1).png';
import p1i2 from '../../assets/project1/omronProjectMobil (2).png';
import p1i3 from '../../assets/project1/omronProjectMobil (3).png';

import p4i1 from '../../assets/project4/portfolio.PNG';

function Projects() {
  const ProjectImages1 = [p1i1, p1i2, p1i3];
  const ProjectDesc1 =
    'This Predictive Maintance Dashboard was Developed as Proof of Concept for the Omron Corp. Utilizes React, Flask API, SQLite, d3.js.';
  const ProjectDesc2 = '';
  const ProjectDesc3 = '';
  const ProjectImages4 = [p4i1];
  const ProjectDesc4 =
    'On this porfolio website although Chakra UI was implemented, it was built mostly from HTML/CSS/javascrip,';
  return (
    <Grid
      className="projects"
      id="intro"
      // style={{ backgroundImage: `url(${mySvg})` }}
    >
      <div className="title">
        <Text>
          <Code>{`<Projects />`}</Code>
        </Text>
      </div>
      <div className="project-cards">
        <ProjectCard
          name="Predictive Maintanace Dashboard (OMRON Corp) Award: 2022 UCM CS Capstone Winner"
          imageArr={ProjectImages1}
          desc={ProjectDesc1}
          track={'track'}
        />
        <ProjectCard
          name="Zeke Supply Co. Ecommerce Project"
          imageArr={ProjectImages4}
          desc={ProjectDesc2}
          track={'no-track'}
        />
        <ProjectCard
          name="EyeBook Project"
          imageArr={ProjectImages4}
          desc={ProjectDesc3}
        />
        <ProjectCard
          name="Portfolio Website"
          imageArr={ProjectImages4}
          desc={ProjectDesc4}
          track={'no-track'}
        />
      </div>
    </Grid>
  );
}

export default Projects;
