import styled from "styled-components";

// components
import ToDoList from "./components/ToDoList";
import { ResetStyles } from "./components/ResetStyles";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container>
      <ResetStyles />
      <ToDoList />
    </Container>
  );
}

export default App;
