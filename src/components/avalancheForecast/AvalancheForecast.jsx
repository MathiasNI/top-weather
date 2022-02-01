import React from 'react';
import * as S from './styles';

const AvalancheForecast = (avelancheDataList) => {

  const DangerLevelColor = (dangerLevel) => {
    if (dangerLevel === '1')
      return '#82af34'
    if (dangerLevel === '2')
      return '#f7ce55'
    if (dangerLevel === '3')
      return '#e26a2b'
    if (dangerLevel === '4')
      return '#d02c24'
    if (dangerLevel === '5')
      return '#000000'
  }

  const DangerLevelComment = (dangerLevel) => {
    if (dangerLevel === '1')
      return 'Liten'
    if (dangerLevel === '2')
      return 'Moderat'
    if (dangerLevel === '3')
      return 'Betydelig'
    if (dangerLevel === '4')
      return 'Stor'
    if (dangerLevel === '5')
      return 'Meget stor'
  }

  if (avelancheDataList.DangerLevel > 0)
    return (
      <>
      <S.Header>Skredvarsel:</S.Header>
      <S.Container>
        <S.Row>
          <S.DangerLevel style={{backgroundColor: DangerLevelColor(avelancheDataList.DangerLevel)}}>
            <S.DangerLevelText>
                {avelancheDataList.DangerLevel}
                <br/>
                {DangerLevelComment(avelancheDataList.DangerLevel)}
              </S.DangerLevelText>
          </S.DangerLevel>
          <S.ColorBar>
            <S.DangerLevelGrades style={{backgroundColor: '#000000'}} />
            <S.DangerLevelGrades style={{backgroundColor: '#d02c24'}} />
            <S.DangerLevelGrades style={{backgroundColor: '#e26a2b'}} />
            <S.DangerLevelGrades style={{backgroundColor: '#f7ce55'}} />
            <S.DangerLevelGrades style={{backgroundColor: '#82af34'}} />
          </S.ColorBar>
          <S.MainText>{avelancheDataList.MainText}</S.MainText>
        </S.Row>
      </S.Container>
      </>
    )
  else
    return null
}

export default AvalancheForecast;
