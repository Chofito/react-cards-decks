import styled from 'styled-components';

import Deck from './components/Deck';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

function App() {
  return (
    <AppContainer>
      <Deck />
    </AppContainer>
  );
}

export default App;
