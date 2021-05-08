import React from "react";
import {Grid} from "@material-ui/core";
import FAQCard from "./FAQCard";
import styled from "styled-components";
import {getDeviceType} from "helpers";

function FAQDetails (){
    return(
        <Container>
            <Grid spacing={0}>
                <Grid item xs={12}>
                    <FAQCard ques="What is the Institute Innovation Cell (IIC)?" ans ="" />
                    <FAQCard ques="Why does our college have an IIC?" ans="" />
                </Grid>
                <Grid item xs={12}>
                    <FAQCard ques="How can I benefit from it?" ans="As part of its activities, IIC on a periodic basis conducts lectures from industrial experts to keep students updated on the latest trends in the industry. Also, it provides a unique platform where students can get connected to employers for potential projects and internship opportunities." />
                    <FAQCard ques="Can IIC help me in technical matters related to my project/idea?" ans ="Yes. One of our fundamental roles is to facilitate development of ideas into projects, and projects further into start-ups." />
                    <FAQCard ques="I want to convert my project into a start-up. How should I do it?" ans ="There are several things you need to consider when taking the step of commercializing your project. One of them, and perhaps the most important one, is Intellectual Property Rights (IPR). IPR forms an essential part in the journey of your product. We help students deal with its practical implications." />
                </Grid>
            </Grid>
        </Container>

    );
}

export default FAQDetails;

const Container =styled.div`
width:${getDeviceType() === "mobile" ? "50vw" :"75vw"};
margin:0 auto;
justify-content:center;
item-align:center;
`