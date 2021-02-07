import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

import { theme } from '../theme';

export const InputComponent = props => {
    return <TextInput 
                {...props} 
                style={{...styles.input, ...props.style}}                
                />
}

const styles = StyleSheet.create({    
    input: {        
        borderBottomWidth: 1,
        width: 70,                  
        textAlign: 'center', 
        marginVertical: 25,
        paddingTop: 4,        
        fontFamily: theme.font.mainFont                       
    }
})