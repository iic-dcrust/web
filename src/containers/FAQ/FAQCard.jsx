import React from "react";
import styled from "styled-components";
import {getDeviceType} from "helpers";

function FAQCard (content) {
    return(        
        <Container>
            <Box>
                <Text>{'\u2B26'}
                    {content.ques}
                </Text>
                <Result>{'\u2b25'}
                    {content.ans}
                </Result>
            </Box>
        </Container>
    );
}

export default FAQCard;

const Container = styled.div`
padding-top:15px;
padding-bottom:20px;
margin:0 auto;
justify-content:center;
align-item:center;
width:${getDeviceType() === "mobile" ? "50vw" :"75vw"};
`

const Box = styled.div`
width:${getDeviceType() === "mobile" ? "50vw" :"75vw"};
`
const Text = styled.h3`
font-family:time;
font-size:${getDeviceType() === "mobile" ? "15px" : "30px"};
color:#128c7e;
border-radius:15px;
box-shadow:rgba(0,0,0,0.25) 0 7px 8px;
`
const Result = styled.p`
margin-top:10px;
font-family:time;
font-size:${getDeviceType() === "mobile" ? "7px" : "20px"};
color:#435a64;
border-radius:10px;
box-shadow:rgba(0,0,0,0.2) 0 5px 5px;
`