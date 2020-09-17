import React, { Component } from "react";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 85vh;
  left: 3vw;
  display: flex;
  width: 9vw;
  justify-content: space-between;
  a {
    font-size: 2.5vh;
    color: #ad9677;
    text-decoration: none;
  }
`;

class Option extends Component {
  state = {};
  render() {
    return (
      <Container>
        <a href="https://www.facebook.com/"> social </a>
        <a href="mailto:sunriental@gmail.com"> email </a>
      </Container>
    );
  }
}

export default Option;
