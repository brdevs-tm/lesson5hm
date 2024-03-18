import { Google } from "./components/Google";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "styled-components";
import { ModalPage } from "./components/ModalPage";

function App() {
  return (
    <>
      <div className="">
        <GlobalStyle />
        <Google />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
