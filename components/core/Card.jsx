import React from 'react';
import { View, StyleSheet } from 'react-native'

export const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {        
        shadowColor: '#767474',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,
        // elevation is used for shadows in Android
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 35,
        borderRadius: 4,    
        width: 'auto',
        maxWidth: '100%'    
    },
})