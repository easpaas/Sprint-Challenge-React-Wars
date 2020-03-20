import React, {useState, useEffect} from 'react';
import CardContainer from './components/CardContainer';
import styled from 'styled-components';
import axios from 'axios';

/*     Styled Components
 ******************************
 */

const AppStyles = styled.div`
  text-align: center;
`;

const HeaderStyles = styled.div`
  padding: 2%;
  margin-bottom: 4%;
  font-size: 1.5rem;
  border: 4px solid red;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

/*
 *******************************
 */

const App = () => {
  const [data, setData] = useState([]);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://swapi.co/api/people";

  useEffect(() => {
    axios.get(proxy + url)
      .then(response => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <AppStyles>
      <HeaderStyles>React Wars</HeaderStyles>
      <CardContainer results={data} />
    </AppStyles>
  );
}

export default App;
