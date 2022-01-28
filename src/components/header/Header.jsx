import React, { useState } from 'react';
import * as S from './styles';

// Logo
import LogoIcon from './../../assets/logo/logo.svg'

const Header = () => {
  const [activeButton, setActiveButton] = useState("Byfjellene");

  return (
  <S.Header>
    <S.NavBar>
      <S.Icon src={LogoIcon}/>
      <S.VerticalLine/>
      <S.Text 
        style={{backgroundColor: activeButton === "Byfjellene" ? "#03A9F1" : "#2F333C"}}
        onClick={() => {
          setActiveButton("Byfjellene")
        }}>
        Byfjellene 
      </S.Text>
      <S.Text 
        style={{backgroundColor: activeButton === "Klatrefelt" ? "#03A9F1" : "#2F333C"}}
        onClick={() => {
          setActiveButton("Klatrefelt")
        }}>
        Klatrefelt 
      </S.Text>
      <S.Text 
        style={{backgroundColor: activeButton === "Skisenter" ? "#03A9F1" : "#2F333C"}}
        onClick={() => {
          setActiveButton("Skisenter")
        }}>
        Skisenter 
      </S.Text>
    </S.NavBar>
  </S.Header>
  );
};

export default Header;
