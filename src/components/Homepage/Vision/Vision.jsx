import React from 'react'
import styled from 'styled-components'

const Vision = () => {
    return (
       <Container>
           <Box>
           <Head>VISION OF IIC</Head>
           <Content>
               <TextBox>
                    <Text>Ministry of Education (MoE), Govt. of India has established ‘MoE’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are informative years.</Text>
                </TextBox>
            <Logo src='https://www.mic.gov.in/assets/img/iic-logo.png' alt=''></Logo>
           </Content>
           </Box>
       </Container>
    )
}

export default Vision

const Container = styled.div`
background-color:#dddddd;
padding:10vh 10vw;
`
const Head =styled.h2`
color:#2e2c2c;
font-size:32px;
font-weight:600;
margin-bottom:70px;
text-decoration:underline;
text-decoration-color:#a09e9e;
text-underline-offset:10px;
`

const Box = styled.div``

const Content = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const Text=styled.p`
font-size:18px;
color:#2e2c2c;
font-weight:400;
`
const TextBox = styled.div`
flex:0.6;
text-align:justify;
`
const Logo = styled.img`
height:max-content;
width:max-content;
`