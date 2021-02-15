import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  text-align: center;
  width: 90px;
  height: 20px;
  border-radius: 1rem;
  margin-right: 1rem;
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;

const colors = [
  "#D0E2F4",
  "#C9DAF9",
  "#D0E0E3",
  "#D9EAD3",
  "#FFF2CC",
  "#F4CCCC",
  "#FCE5CD",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

interface IAboutMe {
  entries: string[];
}

const AboutMe = ({ entries }: IAboutMe) => {
  return (
    <Tags>
      {entries.map((entry) => {
        return <Tag style={{ backgroundColor: getRandomColor() }}>{entry}</Tag>;
      })}
    </Tags>
  );
};

export default AboutMe;
