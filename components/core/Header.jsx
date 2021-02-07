import React from "react"
import styled from "styled-components/native"
import { space, typography } from "styled-system"

const StyledContainer = styled.View`
    background-color: rgba(21, 42, 73, 1);             
    align-items: center;
    justify-content: center;    
    width: auto;   
    ${space}       
`

const StyledText = styled.Text`    
    color: #FFF;    
    ${typography}
    ${space}
`

export const Header = ({ children, ...rest }) => {
    return(
        <StyledContainer {...rest}>
            <StyledText>{children}</StyledText>
        </StyledContainer>
    )
}