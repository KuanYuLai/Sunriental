import React, { Component } from "react";
import styled from "@emotion/styled/macro";

//Components
import Menu from "../components/Menu";

//Elements
import Eddy_Preview from "../static/Eddy_1.jpg";
import Elvis_Preview from "../static/Elvis_1.jpg";
import Vaness_Preview from "../static/Vaness_1.jpg";

const Page = styled.div`
  background-color: #083f36;
  height: 100vh;
  width: 100vw;
`;

const Description = styled.div`
  border-bottom: 0.3vh #ad9677 solid;
  width: 75vw;
  position: relative;
  float: right;
  margin: 20vh 3vw 0 0;
`;

const Member = styled.div`
  border-bottom: 0.3vh #ad9677 solid;
  width: 75vw;
  position: relative;
  float: right;
  margin: 5vh 3vw 0 0;
  display: flex;
  justify-content: space-around;
  img {
    height: 40vh;
    width: 30vw;
    object-fit: contain;
  }
`;

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <Page>
        <Menu />
        <Description>
          <h1> About </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
            sapien leo. Praesent bibendum tincidunt diam nec aliquet. Morbi eget
            ante ac ante eleifend ultrices eu a odio. Aliquam viverra porttitor
            molestie. Morbi quis lectus non leo aliquet pellentesque. Phasellus
            suscipit massa quis orci blandit congue. Aenean fringilla efficitur
            sem, a consectetur eros porttitor lobortis. Nunc tortor metus,
            feugiat sed sagittis ac, elementum sed augue. Etiam tristique
            ultrices libero sed mattis. In lacinia condimentum vestibulum. Donec
            mauris mauris, congue a accumsan non, cursus eu metus. Aliquam
            facilisis lectus est, id venenatis elit semper efficitur. Integer a
            odio eu elit sodales dapibus eget et ipsum. Aliquam varius urna in
            tempor lacinia. In nec tristique velit. Vivamus.
          </p>
        </Description>
        <Member>
          <img src={Eddy_Preview} alt="Eddy Preview" />
          <img src={Elvis_Preview} alt="Elvis Preview" />
          <img src={Vaness_Preview} alt="Vaness Preview" />
        </Member>
      </Page>
    );
  }
}

export default AboutPage;
