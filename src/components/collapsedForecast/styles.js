import styled from 'styled-components';

export const Location = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  width: 20%;
`;

export const Time = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  color: white;
  font-size: 0.8rem;
`;

export const Symbol = styled.img`
  width: 2.5rem;
`;

export const Temperature = styled.p`
  margin: 0.2rem 0rem 0rem 0.2rem;
  color: white;
`;

export const StatusArrow = styled.img`
  width: 2rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
