import styled from "styled-components/native";
import React, { ReactNode } from "react";

interface Props
{
  children:React.ReactNode;
  title:string;
  description:string;
}

const Section = ({title,description,children}:Props) => {
  return (
    <SectionContainer>
      <TitleGroup>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </TitleGroup>
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.View`
  display: flex;
  width: 100vw;
  padding: 0px 26px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
`;

const TitleGroup = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const TitleText = styled.Text`
  color: #222;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 26.4px */
  letter-spacing: -0.6px;
`

const DescriptionText = styled.Text`
  color: #8D8D8D;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.4px;
`

export default Section;
