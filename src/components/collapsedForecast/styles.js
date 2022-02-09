import styled from 'styled-components';

export const Location = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

export const Forecast = styled.div`
  align-items: center;
  width: 60%;
`;

export const SymbolDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0rem;
  text-align: center;
  font-size: 0.7rem;
  color: white;
  width: 20%;
`;

export const Symbol = styled.img`
  padding-top: 0.3rem;
  max-height: 40px;
  width: 20%;
`;

export const TemperatureDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.7rem;
  color: white;
  width: 50%;
`;

export const Temperature = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: #7B7E83;
  width: 50%;
`;

export const TemperatureSpan = styled.span`
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

export const PrecipitationDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.7rem;
  color: white;
  width: 40%;
`;

export const Precipitation = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  width: 40%;
`;

export const PrecipitationSpan = styled.span`
  padding-left: 0.1rem;
  font-size: 0.7rem;
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
