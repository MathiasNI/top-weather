import React from 'react';
import * as S from './styles';

// Logo
import LogoIcon from './../../assets/logo/logo.svg'

const Header = () => { 
  return (
  <S.Header>
    <S.NavBar>
      <S.Icon src={LogoIcon}/>
      <S.VerticalLine/>
      <S.Text style={{backgroundColor: '#03A9F1'}}> Byfjellene </S.Text>
      <S.Text> Klatrefelt </S.Text>
      <S.Text> Skisenter </S.Text>
    </S.NavBar>
  </S.Header>
  );
};

export default Header;
