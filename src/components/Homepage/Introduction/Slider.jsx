import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {imageArray} from './SliderData'

const Slider = () => {
    const [selected,setSelected] =useState(0)
    const length = imageArray.length

    useEffect(() => {
        const interval =setInterval(()=>setSelected(selected===length-1?0:selected+1),2000)
       return () => {
           clearInterval(interval)
       }
   }, [length,selected])
    const prev=()=>{
        setSelected(selected===0?length-1:selected-1)
    }
    const next=()=>{
        setSelected(selected===length-1?0:selected+1)
    } 
    if(length<=0){
        return null;
    }
    return (
       <Container>
            <Button onClick={prev}></Button>
            <Button onClick={next} style={{right:0}}></Button>
            <SliderBox>
            
                <Slide alt='' src={imageArray[selected].image}></Slide>
     
            </SliderBox>
       </Container>
    )
}

export default Slider

const Container = styled.div`
position:relative;
display:flex;
overflow:hidden;
height:400px;
padding-bottom:70px;

`
const Button = styled.button`
position:absolute;
z-index:101;
height:400px;
width:12vw;
border:none;
outline:none;
background:transparent;
:hover{
    cursor: pointer;
    background-color:rgba(0,0,0,0.2);
    transition:0.4s;
}
`

const Slide=styled.img`
width:100%;
height:400px;
transition-duration:1s ease;

`
const SliderBox = styled.div`
width:75vw;
`