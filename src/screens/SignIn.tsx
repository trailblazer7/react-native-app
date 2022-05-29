import { View, SafeAreaView, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Button from '../components/Button'
import SubHeader from '../components/SubHeader'

type Props = {}

const SignIn = (props: Props) => {

  const onSignIn = () => {
    console.log('Sign In!');
  }

  const onNeedAccount = () => {
    console.log('Need an account!');
  }


  return (
      
    <SafeAreaView style={{flex:1}}>

        <StatusBar animated={true} />

        <View style={{flex: 1}}>
            
          <Header  showTags={false} />

          <SubHeader 
            title='Sign In' 
            subTitle='Need an account?' 
            onSubTitlePress={onNeedAccount} 
          />

          <View style={{padding: SIZES.base}}>
            <TextInput 
              style={styles.input}
              placeholder='Email'
              onChangeText={() => {}}
            />
            <TextInput 
              style={styles.input}
              placeholder='Password'
              onChangeText={() => {}}
            />
            <Button text='Sign In' onPress={onSignIn}/>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default SignIn


const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.small,
    borderRadius: SIZES.base
  }
})