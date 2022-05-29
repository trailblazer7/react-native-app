import { View, SafeAreaView, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Button from '../components/Button'
import SubHeader from '../components/SubHeader'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const SignUp = (props: Props) => {

  const navigation = useNavigation();

  const onSignUp = () => {
    console.log('Sign Up!');
  }

  const onHaveAccountPress = () => {
    navigation.navigate('SignIn' as never);
  }


  return (
      
    <SafeAreaView style={{flex:1}}>

        <StatusBar animated={true} />

        <View style={{flex: 1}}>
            
          <Header  showTags={false} />

          <SubHeader 
            title='Sign Up' 
            subTitle='Have an account?' 
            onSubTitlePress={onHaveAccountPress} 
          />

          <View style={{padding: SIZES.base}}>
            <TextInput 
              style={styles.input}
              placeholder='Username'
              onChangeText={() => {}}
            />
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
            <Button text='Sign In' onPress={onSignUp}/>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default SignUp


const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.small,
    borderRadius: SIZES.base
  }
})