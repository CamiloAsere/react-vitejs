import React from 'react'
import styled from 'styled-components';

const padding='0.58rem'
const borderR='0.5rem'
const color= '#3A5795' 
// 
const StyledBtn=styled.button`
background-color:${color};
padding:${padding};
padding-bottom:1px;
border-radius:${borderR};
color:#fff;
    &:hover{
    background-color:#CC181E;
    color:#fff;
}
`
export const Button=({text='My Login',dcolor='#3f50b5'}) => {
    return (
        <div>
            <StyledBtn style={{color:{dcolor}}}>
            <h6>
            {text}
            </h6>
            </StyledBtn> 
            
        </div>
    )
}