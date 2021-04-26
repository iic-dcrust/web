import { getDeviceType } from 'helpers'
import React from 'react'
import styled from 'styled-components'

const Links = () => {
    return (
        <Container>
            <Column>
                <Head>Quick Links</Head>
                <Body>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>

                </Body>
            </Column>
            <Column>
                <Head>Quick Links</Head>
                <Body>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                </Body>
            </Column>
            <Column>
            <Head>Quick Links</Head>
                <Body>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                    <p>curriculum</p>
                </Body>
            </Column>
        </Container>
    )
}

export default Links

const Container = styled.div`
display:flex;
justify-content:space-evenly;
flex:${getDeviceType()==='mobile'?'1':'0.85'};`

const Column=styled.div`
color:gray;`

const Head =styled.h4`
text-decoration:underline;
margin-bottom:20px;
font-size:${getDeviceType()==='mobile'?'12px':''};`

const Body = styled.div`
font-size:${getDeviceType()==='mobile'?'8px':''};
color:gray;`