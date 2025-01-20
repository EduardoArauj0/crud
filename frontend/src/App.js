import GlobalStyle from "./styles/global";
import styled from "styled-componnets";
import Form from "./components/Form.js";
import { toast, ToastContainer } from "react-toasty";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  whidth: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>USUÁRIO</Title>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
