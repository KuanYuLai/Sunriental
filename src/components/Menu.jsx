import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import menu from "../static/menu.svg";

const MenuIcon = styled.div`
  position: fixed;
  z-index: 2;
  height: 3vh;
  width: 3vw;
  top: 10vh;
  left: 3vw;
  cursor: pointer;
  > img {
    height: 3vh;
    width: 3vw;
  }
  > div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(48, 48, 47, 0.7);
  height: 100vh;
  width: 100vw;
`;

const OptionContainer = styled.div`
  margin: 25vh auto;
  width: 15vw;
  > a {
    font-size: 9vh;
    width: 
    color: #ad9677;
    text-decoration: none;
    display: block;
  }
  > a:visited{
    color: #ad9677;
  }
  > a:hover {
    color: #8f7b63;
  }
`;
//<img src={menu} alt="Menu Icon" />
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div>
        <MenuIcon
          onClick={() => {
            this.setState({ showModal: !this.state.showModal });
            console.log("Menu Clicked | Status: " + this.state.showModal);
          }}
          className={this.state.showModal ? "change" : ""}
        >
          <img src={menu} alt="Menu Icon" />
        </MenuIcon>
        {this.state.showModal && (
          <Modal>
            <OptionContainer>
              <a href="/About"> About </a>
              <a href="/Work"> Work </a>
              <a href="/Blog"> Blog </a>
            </OptionContainer>
          </Modal>
        )}
      </div>
    );
  }
}

export default Menu;
