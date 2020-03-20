import React from 'react';
import styled from 'styled-components';

/*     Styled Components
 ******************************
 */

const CardStyles = styled.div`
  width: 25%;
  border: 2px solid blue;
  margin: 5%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-style: italic;
  border: 1px solid red;
  margin: 2%;
`;

const Content = styled.p`
  width: 50%;
`;

/*
 *******************************
 */

const Card = ({name, height, weight, hair, eyes}) => {
  return (
    <CardStyles>
      <h3>{name}</h3>
      <ContentContainer>
        <Content>Height: {height}</Content>
        <Content>Mass: {weight}</Content>
        <Content>Hair color: {hair}</Content>
        <Content>Eye color: {eyes}</Content>
      </ContentContainer>
    </CardStyles>
  );
}

export default Card;