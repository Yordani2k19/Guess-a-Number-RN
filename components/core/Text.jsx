import React from "react"
import styled from "styled-components/native"
import { color, space, typography } from "styled-system"

const StyledText = styled.Text`          
    ${typography}
    ${space}
    ${color}    
`

export const Text = ({ children, ...rest }) => {
    return <StyledText{...rest}>{children}</StyledText>            
}