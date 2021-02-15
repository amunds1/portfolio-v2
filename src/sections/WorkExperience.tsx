import React from "react";
import Content from "../styledComponents/Content";
import bekkLogo from "../assets/bekkLogo.png";

import styled from "styled-components";

const CompanyLogo = styled.img`
  width: 100px;
  height: 50px;
`;

const WorkExperience = () => {
  return (
    <div className="workExperienceWrapper">
      <h2>Experience and internships</h2>
      <Content>
        <div>
          <CompanyLogo src={bekkLogo} alt="Logo" />
        </div>
        <p>NAV IT summer internship</p>
        <p>Spark* NTNU</p>
      </Content>
    </div>
  );
};

export default WorkExperience;
