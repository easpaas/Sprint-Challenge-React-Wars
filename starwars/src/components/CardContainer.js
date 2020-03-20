import React from 'react';
import styled from 'styled-components';
import Card from './Card';

/*     Styled Components
 ******************************
 */

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

/*
 *******************************
 */

const CardContainer = ({results}) => {
  return (
    <Container>
      {
        results.map((character, index) => {
          return(
            <Card 
              key={index}
              name={character.name} 
            />
          )
        })
      }
    </Container>
  );
}

export default CardContainer;