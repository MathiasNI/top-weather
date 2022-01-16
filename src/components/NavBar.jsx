import React from 'react';
import styled from 'styled-components';

// Logo

const NavBarContainer = styled.div`
`;

const Header = styled.h1`
  color: #FFFFFF;
  font-size: 2rem;
  padding: 0.4rem 0rem 0rem 0.6rem;
  margin: 0rem;
`;

const NavBar = () => { 
  return (
  <>
    <NavBarContainer>
      <Header> top-weather </Header>
    </NavBarContainer>
  </>
  );
};

export default NavBar;