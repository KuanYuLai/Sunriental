import React, { Component } from "react";
import styled from "@emotion/styled/macro";

//Components
import Menu from "../components/Menu";
import Option from "../components/OptionBar";
//Elements
import background_Pic1 from "../static/Home_Background_1.jpg";
import background_Pic2 from "../static/Home_Background_2.jpg";
import background_Pic3 from "../static/Home_Background_3.jpg";
import Logo_Pic from "../static/Logo.jpg";

const Background = styled.img`
  height: 100vh;
  width: 100vw;
  z-index: -1;
  object-fit: cover;
`;

const Logo = styled.img`
  position: fixed;
  z-index: 2;
  width: 7vw;
  height: 10vh;
  object-fit: contain;
  top: 80vh;
  left: 85vw;
`;

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Menu />
        <Logo src={Logo_Pic} alt="Logo" />
        <Option />
        <Background src={background_Pic1} alt="Background Image" />
      </div>
    );
  }
}

export default HomePage;
