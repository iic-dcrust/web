import React from "react";
import styled from "styled-components";
import {getDeviceType} from "helpers";
import FAQDetails from "./FAQDetails";

const FAQ = () => {
  return (
  <Container>
    <Cover>
      <Heading>FAQ</Heading>
      </Cover>
    <Image src="https://media.osram.info/media/img/osram-dam-300240/s,x,1260,y,0/338965_Faq_getty_82041747_cropped_672x260.jpg" alt=" " />
    <FAQDetails />
  </Container>
  );
};

export default FAQ;


const Container = styled.div`
	padding-top: 70px;
  margin:0 auto;
	text-align: center;
`
const Cover =styled.div`
  padding-left:285px;
`
const Heading = styled.h1`
  margin-top:10px;
  width:${getDeviceType() === "mobile" ? "35vw" :"61.8vw"};
  height:${getDeviceType() === "mobile" ? "30vh" : "45vh"};
  font-size:${getDeviceType() === "mobile" ? "30px" :"80px"};
  font-family:time;
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgba(0,0,0,0.25); 
  color:#00203fff;
`
const Image = styled.img`
	margin-top: 10px;
  max-height: 45vh;
  `

const Container = styled.div`
	padding-top: 70px;
	text-align: center;
`
const Image = styled.img`
	margin-top: 30px;
  `
