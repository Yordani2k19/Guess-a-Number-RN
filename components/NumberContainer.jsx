import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { theme } from '../components/theme';
import colors from './constants/colors';

const NumberContainer = props => {
    return(
        <View style={{ ...styles.confirmedOutputTextContainer }}>
            <Text style={{ ...styles.confirmedOutputText }}>{props.children}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    confirmedOutputTextContainer: {},
    confirmedOutputText: {
        textAlign: 'center',        
        fontSize: 60,
        color: colors.secondary,
        fontFamily: theme.font.mainFont,
        fontWeight: '600',  
    }
})

export default NumberContainer