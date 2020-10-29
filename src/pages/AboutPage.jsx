import React, { Component } from "react";
import styled from "@emotion/styled/macro";

//Components
import Menu from "../components/Menu";
import OptionBar from "../components/OptionBar";
//Elements
import Eddy_Preview from "../static/Eddy_1.jpg";
import Elvis_Preview from "../static/Elvis_1.jpg";
import Vaness_Preview from "../static/Vaness_1.jpg";

const Page = styled.div`
  background-color: #083f36;
  height: 120vh;
  width: 100vw;
`;

const Description = styled.div`
  border-bottom: 0.3vh #ad9677 solid;
  width: 75vw;
  position: relative;
  float: right;
  margin: 20vh 3vw 0 0;
  display: flex;
  padding: 0 0 2% 0;
`;

const Member = styled.div`
  border-bottom: 0.3vh #ad9677 solid;
  width: 75vw;
  position: relative;
  float: right;
  margin: 5vh 3vw 0 0;
  display: flex;
  justify-content: space-around;
  padding: 1% 0 4% 0;
`;

const ProfileImg = styled.div`
  width: 30%;
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const Title = styled.div`
  width: 45%;
  h1 {
    height: 80%;
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 2.25px;
    color: #ad9677;
    margin: 10% auto;
  }
`;
const Content = styled.div`
  width: 50%;
  color: #ad9677;
  text-align; justify;
  font-size: 100%;
  a{
    margin: 0 3%;
  }
`;

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <Page>
        <Menu />
        <OptionBar />
        <Description>
          <Title>
            <h1> About </h1>
          </Title>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
              sapien leo. Praesent bibendum tincidunt diam nec aliquet. Morbi
              eget ante ac ante eleifend ultrices eu a odio. Aliquam viverra
              porttitor molestie. Morbi quis lectus non leo aliquet
              pellentesque. Phasellus suscipit massa quis orci blandit congue.
              Aenean fringilla efficitur sem, a consectetur eros porttitor
              lobortis. Nunc tortor metus, feugiat sed sagittis ac, elementum
              sed augue. Etiam tristique ultrices libero sed mattis.
              <br />
              <br />
              In lacinia condimentum vestibulum. Donec mauris mauris, congue a
              accumsan non, cursus eu metus. Aliquam facilisis lectus est, id
              venenatis elit semper efficitur. Integer a odio eu elit sodales
              dapibus eget et ipsum. Aliquam varius urna in tempor lacinia. In
              nec tristique velit. Vivamus.
            </p>
            <a > Contact </a>
            <a> sunriental@gmail.com / @sunriental </a>
          </Content>
        </Description>
        <Member>
          <ProfileImg> <img style={{objectPosition: "30% 20%"}} src={Elvis_Preview} alt="Elvis Preview" /></ProfileImg>
          <ProfileImg> <img style={{objectPosition: "30% 20%"}} src={Vaness_Preview} alt="Vaness Preview" /></ProfileImg>
          <ProfileImg> <img style={{objectPosition: "30% 10%"}}src={Eddy_Preview} alt="Eddy Preview" /></ProfileImg>
        </Member>
      </Page>
    );
  }
}

export default AboutPage;
