import React from 'react'
import styled from 'styled-components'

const Functions = () => {
    return (
        <Container>
            <Box>
                <Head>FUNCTIONS OF IIC</Head>
                <Text>To create a vibrant local innovation ecosystem.
Start-up supporting Mechanism in HEIs.
Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework.
Establish Function Ecosystem for Scouting Ideas and Pre-incubation of Ideas.
Develop better Cognitive Ability for Technology Students.To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion.
Identify and reward innovations and share success stories.
Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.
Network with peers and national entrepreneurship development organizations.
Create an Institution’s Innovation portal to highlight innovative projects carried out by institution’s faculty and students.
Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.</Text>
            </Box>
        </Container>
    )
}

export default Functions

const Container = styled.div`
padding:10vh 10vw;

`
const Box= styled.div``
const Head = styled.h2`
color:#2e2c2c;
font-size:32px;
font-weight:600;
margin-bottom:70px;
text-align:center;
text-decoration:underline;
text-decoration-color:#a09e9e;
text-underline-offset:10px;`

const Text=styled.p`
font-size:19px;
color:#2e2c2c;
font-weight:400;
text-align:justify;`