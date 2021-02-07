import React, { useState, useRef } from 'react';
import { 
    View, 
    StyleSheet, 
    Alert, 
    ScrollView,
    TouchableOpacity,
    Image 
} from 'react-native'

// icons provided by iconic in this case
import { FontAwesome } from '@expo/vector-icons';

import colors from '../components/constants/colors';

import { 
    Text, 
    Card, 
    Button } from '../components/core'

import { theme } from '../components/theme';

import MainHeader from '../components/MainHeader'
import NumberContainer from '../components/NumberContainer'
import GameOverScreen from './GameOverScreen'

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    
    const rndNum = Math.floor(Math.random() * (min - max)) + max

    if (rndNum === exclude) {
        generateRandomNumberBetween(min, max, exclude)
    }   else {
        return rndNum
    }
}

const GameScreen = props => {
    const { userChoice } = props      

    let min = 1
    let max = 100  

    const [ currentGuess, setCurrentGuess ] = useState(generateRandomNumberBetween(min, max, userChoice)) 
    const [ missedGuesses, setMissedGuesses ] = useState([])
    const [ rounds, setRounds ] = useState(0)        

    const currentLow = useRef(min)
    const currentHigh = useRef(max)    

    let currentStatus
    let results    

    const questionMarkAlert = () => {
        Alert.alert(
            "",
            `Your number is ${userChoice}`,
            [{
                text: 'Close',
                style: 'cancel',
            }]
        )
    }        

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoice) || (direction === 'greater') && currentGuess > userChoice) {
            Alert.alert(
                "Don't lie!",
                'Your hint is incorrect! I know the answer -.O',
                [{
                    text: 'Close',
                    style: 'cancel',
                }]
            )
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }   else {
            currentLow.current = currentGuess + 1
        }

        const nextNumberGenerated = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumberGenerated)
        setMissedGuesses(missGuess => [...missGuess, currentGuess])                
        setRounds(round => round + 1)          
    }    

    if (currentGuess === userChoice) {
        results = 
            <GameOverScreen 
                rounds={rounds}
                userChoice={userChoice}   
                storedGuesses={missedGuesses}                                                       
            />      
    }   else {
        currentStatus = 
            <View>
                <NumberContainer>{currentGuess}</NumberContainer> 
                <View style={styles.buttonContainer}>
                    <Button mr={'5%'} onPress={nextGuessHandler.bind(this, 'lower')}>LOWER</Button>
                    <Button ml={'5%'} onPress={nextGuessHandler.bind(this, 'greater')}>GREATER</Button>                
                </View>
            </View>
    }         

    return(
            
        <ScrollView>
            <MainHeader title='Header'/>

            <View style={styles.screen}>   
                <Card>
                    <TouchableOpacity 
                        onPress={() => questionMarkAlert()}
                        style={styles.questionMark}>
                        {/* <Image source={require('../assets/question.png')} /> */}

                        {/* Icons made easy */}
                        <FontAwesome name="question-circle-o" size={24} color={colors.secondary} />
                    </TouchableOpacity>
                    
                    <Text 
                    style={styles.computersCurrentGuess}
                    fontSize={5}
                    fontWeight={400}
                    >Computer's Guess
                    </Text>    
                                        
                    {currentStatus}                    

                    <View style={styles.newGameContainer}>
                        <Button 
                        onPress={() => {                            
                            props.newGame()
                        }}
                        style={styles.newGameButton}>
                            New Game
                        </Button>
                    </View>                
                </Card>  

                {results}
                              
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {        
        padding: 10,        
        alignItems: 'center',
        marginTop: 50
    },

    questionMark: {
        alignSelf: 'flex-end',
        marginBottom: 10
    },

    computersCurrentGuess: {
        textAlign: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',                
        width: 'auto',
        maxWidth: '100%' 
    },

    computerGuessedCorrectlyContainer: {
        marginVertical: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderWidth: 2,
        borderRadius: 12,
        borderStyle: 'dashed',        
        borderColor: colors.secondary,
        backgroundColor: colors.primary
    },

    computerGuessedCorrectly: {
        fontSize: theme.font.standardTextSize,
        textAlign: 'center',
        color: 'white'
    },

    newGameContainer: {
        width: 'auto',
        alignSelf: 'center',
        marginTop: 30
    },

    newGameButton: {
        width: '50%'
    }

})

export default GameScreen


// const renderGameList = (guess, rounds) => {
//     return(
//         <View key={guess}>
//             <Text>{guess}</Text>
//             <Text>{rounds}</Text>
//         </View>
//     )
// }

// guessArr.map(guess, index => renderGameList(guess, pastGuesses))