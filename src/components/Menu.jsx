import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import menu from "../static/menu.svg";

const MenuIcon = styled.a`
  position: fixed;
  height: 5vh;
  width: 5vw;
  top: 10vh;
  left: 3vw;
  &:hover {
    color: white;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: "hidden",
    };
  }
  render() {
    return (
      <div>
        <MenuIcon
          onClick={() => this.setState({ showModal: "visible" })}
          href="#"
        >
          <img src={menu} alt="Menu Icon" />
        </MenuIcon>
        <Modal style={{ visibility: this.state.showModal }}>
          This is a Modal
        </Modal>
      </div>
    );
  }
}

export default Menu;
