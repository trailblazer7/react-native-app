import { View, SafeAreaView, StatusBar, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Button from '../components/Button'
import SubHeader from '../components/SubHeader'
import { useNavigation } from '@react-navigation/native'
import { registerUser } from '../store/common/loginUser'
import { useAppDispatch, useAppSelector } from '../store/hooks'

type Props = {}

const SignUp = (props: Props) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const loading = useAppSelector( state => state.common.loading );

  const onSignUp = () => {
    dispatch(registerUser({
      username,
      password,
      email
    }))
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
              onChangeText={setUserName}
              value={username}
            />
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
            <Button text={`${loading === 'loading' ? 'Registration...' : 'Sign In'}`} onPress={onSignUp}/>
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