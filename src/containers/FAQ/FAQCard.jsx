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
margin-top:10px;
font-family:time;
font-size:${getDeviceType() === "mobile" ? "15px" : "30px"};
color:#3d84b8;
border-radius:10px;
`

const Result = styled.p`
margin-top:20px;
font-family:time;
font-size:${getDeviceType() === "mobile" ? "7px" : "20px"};
border-bottom:outset;
border-top:inset;
border-radius:10px;
color:#435a64;
`