import styled from 'styled-components';

export const Location = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

export const TimeDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.8rem;
  color: white;
  width: 13%;
`;

export const Time = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.9rem;
  color: white;
  width: 10%;
`;

export const SymbolDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 10%;
`;

export const Symbol = styled.img`
  max-height: 50px;
  width: 15%;
`;

export const TemperatureDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 10%;
`;

export const Temperature = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  width: 10%;
`;

export const PrecipitationDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 15%;
`;

export const Precipitation = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  width: 15%;
`;

export const WindDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 20%;
`;

export const Wind = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  width: 20%;
`;

export const WindTextDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.8rem;
  color: white;
  width: 30%;

  @media (max-width: 730px) {
    display: none;
  }
`;

export const WindText = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.9rem;
  color: white;
  width: 30%;

  @media (max-width: 730px) {
    display: none;
  }
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
  justify-content: space-between;
  align-items: center;
`;
