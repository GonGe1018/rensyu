import styled from "styled-components/native";
import React, { ReactNode } from "react";
import ArrowIcon from "../assets/see_more_arrow.svg"


const MoreButton = () => {
  return (
    <MoreButtonContainer>
      <MoreGroup>
        <MoreText>더보기</MoreText>
        <ArrowIcon/>
      </MoreGroup>
    </MoreButtonContainer>
  );
};


const MoreButtonContainer = styled.View`
  display: flex;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  flex-direction: row;
`

const MoreText = styled.Text`
  color: #111;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  letter-spacing: -0.41px;
`;

const MoreGroup = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export default MoreButton;
