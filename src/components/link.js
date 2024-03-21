import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StyledLink } from '../styledComponents/styled-components';
export const Link = (props) => {
    const navigate = useNavigate()
    const link = (to) => {
        navigate(to)
    }
    return <StyledLink color='white' {...props} onClick={() => link(props.to)}>
    </StyledLink>
}