import { View, SafeAreaView, StatusBar, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Button from '../components/Button'
import SubHeader from '../components/SubHeader'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { loginUser } from '../store/common/loginUser'
import { useNavigation } from '@react-navigation/native'


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const redirectTo = useAppSelector(state => state.common.redirectTo)

  const onSignIn = () => {
    dispatch(loginUser({ email, password }))
  }

  const onNeedAccount = () => {
    console.log('Need an account!');
  }

  useEffect(() => {
    if (redirectTo) {
      navigation.navigate(redirectTo as never)
    }
  }, [redirectTo])


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
              onChangeText={setEmail}
              value={email}
            />
            <TextInput 
              style={styles.input}
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
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