import React from "react";
import avatar from "../assets/avatar.png";
import styled from "styled-components";

const PortraitPicture = styled.img`
  height: 160px;
  width: 160px;
  margin-right: 4rem;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  width: 40rem;
`;

const AboutMe = () => {
  return (
    <div className="personalProjectsWrapper">
      <AboutMeWrapper>
        <PortraitPicture src={avatar} alt="Logo" />
        <div>
          <p>
            Hei! Jeg heter Andreas Amundsen, og går i tredjeklasse på
            informatikk ved NTNU{" "}
          </p>
          <p>
            Bla deg gjerne videre for å se mine prosjekter og tidligere erfaring
          </p>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

export default AboutMe;
