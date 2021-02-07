import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Keyboard, 
    TouchableWithoutFeedback,
    Alert
} from 'react-native'

import { theme } from '../components/theme';
import colors from '../components/constants/colors';

import { 
    Text, 
    Button, 
    Card, 
    InputComponent 
} from '../components/core'

import NumberContainer from '../components/NumberContainer'
import { height } from 'styled-system';


const StartGameScreen = props => {
    const [ enteredInput, setEnteredInput ] = useState('')
    const [ enteredNumber, setEnteredNumber ] = useState()
    const [ confirmed, setConfirmed ] = useState(false)
    
    const handleEnteredInput = inputText => {
        setEnteredInput(inputText.replace(/^0-9/g, ''))       
    }

    const handleConfirmButton = () => {       
        const chosenNumber = parseInt(enteredInput)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number',
                'Only numbers between 0 and 99 allowed.',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: setEnteredInput('')
                }]
                )
            return;
        }
        
        setEnteredNumber(parseInt(enteredInput))
        setConfirmed(true)
        setEnteredInput('')
        Keyboard.dismiss()
    }        

    const handleReset = () => {
        setEnteredInput('')
        setConfirmed(false)
    }    

    let confirmedOutput

        if (confirmed) {
            confirmedOutput = (
                <Card style={styles.confirmedOutputContainer}>
                <Text style={styles.confirmedOutputHeaderText}>Your number is..</Text>
                <NumberContainer>{enteredNumber}</NumberContainer>
                <Button 
                    onPress={() => props.onStartGame(enteredNumber)}
                    style={styles.confirmedOutputButton}>
                        START
                </Button>
            </Card>
            )
        }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>

                <Text style={styles.title}>Start a New Game</Text>
                
                <Card>
                    <Text style={styles.selectNumberText}>Select a Number</Text>
                    <InputComponent 
                        style={styles.input}  
                        fontSize={60}                                            
                        blurOnSubmit                    
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={handleEnteredInput}
                        value={enteredInput}
                    />                

                    <View style={styles.buttonContainer}>
                        <Button 
                            onPress={handleReset}
                            mr={'5%'}>
                                Reset
                        </Button>
                        <Button 
                            onPress={handleConfirmButton}
                            ml={'5%'}>
                                Confirm
                        </Button>
                    </View>
                </Card>
                
                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    title: {
        fontSize: theme.font.standardTextSize,
        fontFamily: theme.font.mainFont,
        marginVertical: 50
    },

    input: {
        alignSelf: 'center',
        height: '25%'
    },

    selectNumberText: {
        textAlign: 'center',
        fontSize: theme.font.standardTextSize,
        fontFamily: theme.font.mainFont,        
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'  
    },

    confirmedOutputContainer: {
        marginTop: 50,        
        paddingVertical: 30,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },     

    confirmedOutputHeaderText: {
        textAlign: 'center',
        fontSize: theme.font.standardTextSize,
        fontFamily: theme.font.mainFont,
        fontWeight: theme.font.headerFontWeight
    },                    

    confirmedOutputButton: {
        width: '50%',
        backgroundColor: colors.secondary
    }
})

export default StartGameScreen