import React from 'react';
import { Link } from "react-router-dom";
import * as S from './styles';

// Logo
import LogoIcon from './../../assets/logo/logo.svg'

const Header = (location) => {

  return (
  <S.Header>
    <S.NavBar>
      <S.Icon src={LogoIcon}/>
      <S.VerticalLine/>
      <Link style={{textDecoration: 'none'}} to='/byfjellene'>
        <S.Text 
          style={{backgroundColor: location.location === "Byfjellene" ? "#03A9F1" : "#2F333C"}}>
          Byfjellene
        </S.Text>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/klatrefelt'>
        <S.Text 
          style={{backgroundColor: location.location === "Klatrefelt" ? "#03A9F1" : "#2F333C"}}>
          Klatrefelt
        </S.Text>
      </Link>
      <Link style={{textDecoration: 'none'}} to='/skisteder'>
        <S.Text 
          style={{backgroundColor: location.location === "Skisteder" ? "#03A9F1" : "#2F333C"}}>
          Skisteder
        </S.Text>
      </Link>
    </S.NavBar>
  </S.Header>
  );
};

export default Header;
