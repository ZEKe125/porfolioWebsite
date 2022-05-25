import React from 'react';
import { Grid, Text, Code } from '@chakra-ui/react';
import './projects.css';

function Projects() {
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
    </Grid>
  );
}

export default Projects;
