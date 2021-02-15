import React from "react";
import Content from "../styledComponents/Content";
import styled from "styled-components";
import Tags from "../Tags";

const ProjectEntry = styled.div``;

const PersonalProjects = () => {
  return (
    <div className="personalProjectsWrapper">
      <h2>Noen av mine prosjekter</h2>
      <Content>
        <ProjectEntry>
          <h3>🎶 Spotimood</h3>
          <p>Spotimood lar deg generere spillelister basert på ditt humør!</p>
          <Tags
            entries={[
              "React",
              "TypeScript",
              "GraphQL",
              "Apollo",
              "Cypress",
              "Redis",
            ]}
          ></Tags>
          <p>Sjekk ut Spotimood her</p>
        </ProjectEntry>
        <ProjectEntry>
          <h3>📅 Webcal for linjeforeningen Online</h3>
          <p>
            Lar deg eksportere alle fremtidige arrangementer og hendelser for
            linjeforeningen Online, til iCal format
          </p>
          <Tags entries={["JavaScript", "Express", "Heroku"]}></Tags>
        </ProjectEntry>
      </Content>
    </div>
  );
};

export default PersonalProjects;
