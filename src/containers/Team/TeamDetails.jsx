import React from "react";
import styled from "styled-components";
import {getDeviceType} from "helpers";


const TeamDetails = (details) => {
    return( 
    <Container>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
        alt=""
      ></Image>
      <Box>
        <Text>{details.position}</Text>
        <Info>
          {details.name}
        </Info>
      </Box>
    </Container>
    );
}

const Container = styled.div`
    margin: 20px 0px;
    width:${getDeviceType() === "mobile" ? "5vw" : "13.5vw"};
    height:${getDeviceType() === "mobile" ? "10vh" : "42vh"};
    justify-content:center;
    flex-direction: column;
    :hover{
      opacity:.85;
      transform: scale(0.95);
    }
`
const Image = styled.img`
    height:${getDeviceType() === "mobile" ? "100px" : "200px"};
    width:${getDeviceType() === "mobile" ? "100px" : "200px"};
    box-shadow:rgba(0,0,0,0.5) 0px 5px 10px;
    border-radius:100px;
`

const Box = styled.div`
    height:${getDeviceType() === "mobile" ? "1vw" : "5vw"};
    text-align:center;
    margin: 10px;
`
const Text = styled.h1`
  font-size:${getDeviceType() === "mobile" ? "15px" : "30px"};
  font-family:time;
`
const Info =  styled.p`
  margin: 5px;
  font-size:${getDeviceType() === "mobile" ? "10px" : "20px"};
  font-family:time;
  font-style:italic;
  font-weight:bold;
`

export default TeamDetails;