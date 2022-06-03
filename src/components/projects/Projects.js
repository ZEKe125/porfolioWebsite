import React from 'react';
import { div, Text, Code } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import './projects.css';
import p1i1 from '../../assets/project1/omronProjectMobil (1).png';
import p1i2 from '../../assets/project1/omronProjectMobil (2).png';
import p1i3 from '../../assets/project1/omronProjectMobil (3).png';

import p2i1 from '../../assets/project2/store1.PNG';
import p2i2 from '../../assets/project2/store2.PNG';
import p2i3 from '../../assets/project2/store3.PNG';

import p3i0 from '../../assets/project3/eyebook0.png';
import p3i1 from '../../assets/project3/eyebook1.png';
import p3i2 from '../../assets/project3/eyebook2.png';

import p4i1 from '../../assets/project4/portfolio.PNG';
import p4i2 from '../../assets/project4/portfolio2.PNG';

function Projects() {
  const ProjectImages1 = [p1i1, p1i2, p1i3];
  const projectCode1 = 'https://github.com/ZEKe125/Predictive-Maintenance-Dash';
  const projectLive1 = 'https://zeke-porfolio-tawny.vercel.app/';
  const ProjectDesc1 =
    'This Predictive Maintenance Dashboard was Developed as Proof of Concept for the Omron Corp. Utilizes React, Flask API, SQLite, d3.js.';
  const ProjectImages2 = [p2i1, p2i2, p2i3];
  const projectCode2 = 'https://github.com/ZEKe125/eStore_sanity_stripe';
  const projectLive2 = 'https://ecommerce-zeke125.vercel.app';
  const ProjectDesc2 =
    'This e-commerce Website was built using Next.js react framework, and react functional components. It uses APIs and React hooks, useState, useEffect, useContext, etc. ';
  const ProjectImages3 = [p3i0, p3i1, p3i2];
  const projectCode3 = 'https://github.com/ZEKe125/eyebook-react';
  const projectLive3 = 'https://eyebook-react-zeke125.vercel.app/';
  const ProjectDesc3 =
    'Small Web Application built as Proof of Concept using React.js, Redux, Material UI, and WebGazer API. Tracks user eyes to navigate through the Application.';
  const ProjectImages4 = [p4i1, p4i2];
  const projectCode4 = 'https://github.com/ZEKe125/porfolioWebsite';
  const projectLive4 = 'https://zeke-porfolio-tawny.vercel.app/';
  const ProjectDesc4 =
    'This Mobile First Portfolio Website, was built mostly from HTML/CSS/javascript as well as some Chakra UI.';
  return (
    <div className="projects" id="#projects">
      <div className="title">
        
          <Code className='code'>{`<Projects />`}</Code>
        
      </div>
      <div className="project-cards">
        <ProjectCard
          name="Predictive Maintanance Dashboard (OMRON Corp) Award: 2022 UCM CS Capstone Winner"
          imageArr={ProjectImages1}
          desc={ProjectDesc1}
          track={'track'}
          live={projectLive1}
          code={projectCode1}
        />
        <ProjectCard
          name="Zeke Supply Co. Ecommerce Project"
          imageArr={ProjectImages2}
          desc={ProjectDesc2}
          live={projectLive2}
          code={projectCode2}
          // track={'no-track'}
        />
        <ProjectCard
          name="EyeBook Project"
          imageArr={ProjectImages3}
          desc={ProjectDesc3}
          live={projectLive3}
          code={projectCode3}
        />
        <ProjectCard
          name="Portfolio Website"
          imageArr={ProjectImages4}
          desc={ProjectDesc4}
          live={projectLive4}
          code={projectCode4}
          // track={'no-track'}
        />
      </div>
    </div>
  );
}

export default Projects;
