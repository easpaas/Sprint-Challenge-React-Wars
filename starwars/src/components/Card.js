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

const Name = styled.h2`
  border: 1px solid red;
`;

/*
 *******************************
 */

const Card = ({name}) => {
  return (
    <CardStyles>
      <Name>{name}</Name>
    </CardStyles>
  );
}

export default Card;