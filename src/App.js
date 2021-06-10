import styled from 'styled-components';
import './App.css';
import Newletter from "./components/newsletter"

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0065d8;
  
`;

function App() {
  return (
    <AppContainer>
      <Newletter />
    </AppContainer>
  );
}

export default App;
