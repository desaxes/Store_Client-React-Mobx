import styled from 'styled-components';

export const StyledLink = styled.div`
color:${props => props.color ? props.color : 'white'};
font-size:${props => props.fz} ;
margin:${props => props.margin};
cursor:pointer;
transition: 0.3s;
border:${props => props.border};
border-radius:8px;
padding:4px 12px;
align-self:center;
&:hover{
    color:${props => props.hover ? props.hover : 'green'}; 
}
`
export const StyledBox = styled.div`
width:${props => props.width};
display:${props => props.display};
align-items:${props => props.align};
justify-content:${props => props.jstf};
gap:${props => props.gap};
margin:${props => props.margin};
padding:${props => props.padding};
`
