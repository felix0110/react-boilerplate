
import React from "react"
import { Fade } from '@material-ui/core';
import messages from './messages';
import H2 from 'components/H2';
import H1 from 'components/H1';
import A from 'components/A';

const WorkSection = () => {
    return (
        <div className="section" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Work</h1>
                    </Fade>

                    <div className="grid">
                        <Fade bottom cascade>
                            {data.projects.map((project, index) => (
                                <Card
                                    key={index}
                                    heading={project.title}
                                    paragraph={project.para}
                                    imgUrl={project.imageSrc}
                                    projectLink={project.url}
                                ></Card>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WorkSection