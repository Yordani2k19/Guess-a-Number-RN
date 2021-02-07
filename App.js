import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'

import { theme } from "./components/theme"
import { ThemeProvider } from "styled-components/native"

import MainHeader from './components/MainHeader'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {  
  const [ dataLoaded, setDataLoaded ] = useState(false)
  const [ userNumber, setUserNumber ] = useState()      

  if(!dataLoaded) {
    return <AppLoading 
            startAsync={() => console.log('Started')}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log('App Loading ERROR: ', err)}/>
  }

  const startGameHandler = selecterNumber => {
        setUserNumber(selecterNumber)         
  }  

  const handleRestart = () => {
    setUserNumber(null)
  }

  if (userNumber) {
    return <GameScreen
      newGame={handleRestart}
      userChoice={userNumber}       
      />
  } 

  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={styles.appContainer}>

        <MainHeader 
          title='Guess a Number' 
        />                        

      <StartGameScreen 
        onStartGame={startGameHandler} />     

      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {    
    height: '100%'
  },
})