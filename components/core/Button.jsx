import React from "react"
import styled from "styled-components/native"
import { space, color } from "styled-system"

const StyledButton = styled.TouchableOpacity`
    background-color: rgba(21, 42, 73, 1);                 
    width: auto;
    border-radius: 4px
    ${space}
    ${color}
`

const StyledText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    width: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
`

export const Button = ({ children, ...rest }) => {
    return(
        <StyledButton {...rest}>
            <StyledText>{children}</StyledText>
        </StyledButton>
    )
}