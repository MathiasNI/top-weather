import styled from 'styled-components';

export const Header = styled.h5`
  color: white;
  width: 40%;
  margin: 0rem 0rem 0.3rem 0rem;
`;

export const DangerLevel = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;

export const DangerLevelText = styled.p`
  margin: auto;
  text-align: center;
  font-size: 0.8rem;
  color: white;
`;

export const ColorBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem;
  width: 1%;
  height: 100%;
`;

export const DangerLevelGrades = styled.div`
  height: 20%;
`;

export const MainText = styled.p`
  margin: 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  color: white;
  width: 79%;
`;

export const Container = styled.div`
  display: flex;
  
  border-color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;

  margin-bottom: 1rem
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;