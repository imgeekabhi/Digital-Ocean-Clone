import React from "react";
import "./App.css";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import theme from "./theme/Theme";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <Header />
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
