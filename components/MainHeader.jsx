import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { theme } from './theme'

import { Header } from './core'

const MainHeader = props => {
    return(
        <Header
            pt={80}
            pb={15}            
            >
            <Text style={styles.headerText}>
                {props.title}                
            </Text>            
        </Header>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: theme.font.headerFontSize,        
        fontWeight: theme.font.headerFontWeight,
        fontFamily: theme.font.mainFont
    }
})

export default MainHeader