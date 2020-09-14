import React, { Component } from "react";
import styled from "@emotion/styled/macro";

//Elements
import background_Pic from "../static/Yosemite.jpg";
import Menu from "../components/Menu";

const Background = styled.img`
  height: 100vh;
  width: 100vw;
`;

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </header>
        <Menu />
        <Background src={background_Pic} alt="Background Image" />
      </div>
    );
  }
}

export default HomePage;
