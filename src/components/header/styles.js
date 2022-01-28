import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2F333C;
  align-items: center;
  margin: 0.5rem auto 0 auto;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  border-radius: 0.5rem;
`;

export const Icon = styled.img`
  height: 1.8rem;
  `;

export const VerticalLine = styled.div`
  border-left: 2px solid #7B7E83;
  height: 2rem;
  border-radius: 99px;
  margin: 0rem 0.4rem 0rem 0.8rem;
`;

export const Text = styled.p`
  color: white;
  border-radius: 0.5rem;
  padding: 0.4rem 0.4rem 0.4em 0.4rem;
  margin: 0rem 0rem 0rem 0.4rem;
`;
