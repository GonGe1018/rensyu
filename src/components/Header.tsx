import styled from "styled-components/native";
import LogoIcon from "../assets/logo.svg"
import ExitIcon from "../assets/exit_icon.svg"
import SearchIcon from "../assets/search_icon.svg"
import React from "react";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoIcon/>
      <IconGroup>
        <IconButton><SearchIcon/></IconButton>
        <IconButton><ExitIcon/></IconButton>
      </IconGroup>
    </HeaderContainer>
  );
};


const HeaderContainer = styled.View`
  display: flex;
  width: 390px;
  height: 56px;
  padding: 0px 26px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  flex-direction: row;
`;

const IconGroup = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  flex-direction: row;
`

const IconButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
`



export default Header;
