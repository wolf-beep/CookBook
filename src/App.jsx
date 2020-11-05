/** @format */

import React, { Component } from "react";
// 导入布局文件（底部导航）
import Layout from "./components/Layout/index";
import GlobalStyled from "./style";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyled></GlobalStyled>
        <Layout></Layout>
      </>
    );
  }
}

export default App;
