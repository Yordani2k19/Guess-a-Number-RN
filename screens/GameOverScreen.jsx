import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import colors from '../components/constants/colors';

import { Text, Card, Button } from '../components/core'

const GameOverScreen = props => {        
    const { rounds, userChoice, storedGuesses } = props   
    const [ showGuess, setShowGuess ] = useState(false)
    
    let roundOrRounds
    let showText 

    rounds === 1 ? roundOrRounds = 'round' : roundOrRounds = 'rounds'    

    const handleShowGuesses = () => setShowGuess(true)   

    if(showGuess)  {
        showText = storedGuesses.map(guess => <Text key={guess} style={{ textAlign: 'center' }} >{guess} </Text>)         
    }   else {
        showText = <Text style={{ textAlign: 'center' }}>Show guesses</Text>
    }


    return(
        <View style={styles.screen}>

            <Card>
                <Text 
                    style={{ textAlign: 'center' }}
                    fontSize={4}>
                    It took <Text style={{ color: colors.secondary }}>{rounds}</Text> {roundOrRounds} to guess                                  
                </Text>

                <Text 
                    style={styles.highlight}
                    fontSize={7}>
                        {userChoice}
                </Text>  

                <Button color={'red'} onPress={handleShowGuesses}>{showText}</Button>                             

            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50
    },

    highlight: {
        textAlign: 'center',
        color: colors.secondary,        
    }
})

export default GameOverScreen