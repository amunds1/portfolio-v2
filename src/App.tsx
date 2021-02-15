import React, { useState } from "react";

// Sections
import PersonalProjects from "./sections/PersonalProjects";
import WorkExperience from "./sections/WorkExperience";
import AboutMe from "./sections/AboutMe";

// Styling
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

const Button = styled.button`
  display: flex;
`;

enum Section {
  AboutMe,
  PersonalProjects,
  WorkExperience,
}

const App = () => {
  const [section, setSection] = useState(Section.AboutMe);

  return (
    <>
      <SectionWrapper>
        {section === Section.AboutMe && <AboutMe />}
        {section === Section.PersonalProjects && <PersonalProjects />}
        {section === Section.WorkExperience && <WorkExperience />}
      </SectionWrapper>
      <Button
        onClick={() => {
          setSection(Section.PersonalProjects);
        }}
      >
        Videre
      </Button>
      <Button
        onClick={() => {
          setSection(Section.WorkExperience);
        }}
      >
        Forrige
      </Button>
    </>
  );
};

export default App;
