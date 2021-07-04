import React from 'react';
import { Fade, Card } from '@material-ui/core';

const data = {};
const WorkSection = () => (
  <div className="section" id="work">
    <div className="container">
      <div className="work-wrapper">
        <Fade in>
          <h1>Work</h1>
        </Fade>

        <div className="grid">
          <Fade in>
            {data.projects.map(project => (
              <Card
                key={project.id}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default WorkSection;
