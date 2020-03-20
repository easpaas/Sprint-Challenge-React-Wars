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
    <>
      <h2>Characters</h2>
      <Container>
        {
          results.map((character, index) => {
            return(
              <Card 
                key={index}
                name={character.name}
                height={character.height}
                weight={character.mass}
                hair={character.hair_color}
                eyes={character.eye_color}
              />
            )
          })
        }
      </Container>
    </>
  );
}

export default CardContainer;