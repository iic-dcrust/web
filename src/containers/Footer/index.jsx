import React from 'react'
import styled from 'styled-components'
import Links from './Links/Links'

const Footer = () => {
    return (
       <Container>
           <Box>
               <Logo src='https://www.edufever.com/wp-content/uploads/2016/12/dcrust-logo.jpg' alt=''></Logo>
               <Contact>
                   <ContactHead>Contact us</ContactHead>
                   <h5>DCRUST University</h5>
               </Contact>
           </Box>
           <Links/>
       </Container>
    )
}

export default Footer

const Container=styled.div`
background-color:#040016;
padding:60px;
display:flex;
justify-content:space-between;
`
const Box = styled.div`
`
const Contact = styled.div`
color:gray;
`

const Logo = styled.img`
margin-bottom:60px;
`
const ContactHead= styled.h4`
text-decoration:underline;
`
