import React, { Component } from 'react';
import styled from "@emotion/styled/macro";
//Elements
import Eddy from "../static/Eddy_2.jpg";
import Elvis from "../static/Elvis_2.jpg";
import Vaness from "../static/Vaness_2.jpg";

const CardContainer = styled.div`
    width: 1000px;
    height: 308px;
`;

const CardImg = styled.img`
    width: 30%;
    height: 308px;
    object-fit: cover;
    object-position: 0% 4%;
    float: left;
`;
const CardContent = styled.div`
    width: 70%;
    height: 100%;
    background-color: #ad9677;
    float: right;
    display: flex;
`;

const Title = styled.div`
    margin: 0 20px 0 -100px;
    width: 50%;
    font-weight: 600;
    h1{
        color: #083f36;
        font-size: 47px;
        margin: 80px 0 0 0;
    }
    h2{
        color: #083f36;
        font-size: 22px;
        margin: 0;
    }
`;
const Description = styled.div`
    width: 50%;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: 0.42px;
    color: #083f36;
    margin: auto;
    text-align: justify;
`;
class ProfileCard extends Component {
    state = {  }
    render() { 
        return ( 
        <CardContainer>
            <CardImg src={Eddy} alt="Eddy Profile Pic"/>
            <CardContent> 
                <Title>
                    <h1>Edward Tsao</h1>
                    <h2>Director of Hospitality </h2>
                </Title>
                <Description>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta tempor urna, eu suscipit metus mollis ut. Sed eu consequat quam, sit amet lacinia dolor. Curabitur varius et sem non scelerisque. Etiam molestie tincidunt leo at lobortis. In sollicitudin tempor diam in tincidunt. Fusce pulvinar tellus in purus consequat iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac velit libero. Ut vulputate dui.
                    </p>
                </Description>
            </CardContent>
        </CardContainer> );
    }
}
 
export default ProfileCard;