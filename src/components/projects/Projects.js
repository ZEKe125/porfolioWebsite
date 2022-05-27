import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import ProjectCard from './projectCard';
import './projects.css';
import p1i1 from '../../assets/project1/omronProjectMobil (1).png';
import p1i2 from '../../assets/project1/omronProjectMobil (2).png';
import p1i3 from '../../assets/project1/omronProjectMobil (3).png';
function Projects() {
  const ProjectImages1 = [p1i1, p1i2, p1i3];
  const ProjectDesc1 =
    'This Predictive Maintance Dashboard was Developed as Proof of Concept for the Omron Corp. Utilizes React, Flask API, SQLite, d3.js.';
  const ProjectDesc2 = '';
  const ProjectDesc3 = '';
  const ProjectDesc4 = '';
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
          name="Predictive Maintanace Dashboard (OMRON Corp)"
          imageArr={ProjectImages1}
          desc={ProjectDesc1}
        />
        <ProjectCard name="" image={''} desc={ProjectDesc2} />
        <ProjectCard name="" image={''} desc={ProjectDesc3} />
        <ProjectCard name="Portfolio Website" image={''} desc={ProjectDesc4} />
      </div>
    </Grid>
  );
}

export default Projects;
