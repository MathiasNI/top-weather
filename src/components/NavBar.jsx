import React from 'react';
import styled from 'styled-components';

// Logo
import LogoIcon from '../assets/logo/logo.svg'

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem 0rem 0rem 0.6rem;
  align-items: center;
`;

const Logo = styled.img`
  height: 3rem;
  `;

const Header = styled.h2`
  color: #FFFFFF;
  margin: 0rem 0rem 0rem 0.8rem;
`;

const NavBar = () => { 
  return (
  <>
    <NavBarContainer>
      <Logo src={LogoIcon}/>
      <Header> Byfjellene </Header>
    </NavBarContainer>
  </>
  );
};

export default NavBar;