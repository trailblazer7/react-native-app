import { View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { useAppDispatch } from '../store/hooks'


const Settings = () => {

  const dispatch = useAppDispatch()

  const onLogout = () => {
    //dispatch(loginUser({ email, password }))
  }

  return (
      
    <SafeAreaView style={{flex:1}}>

        <StatusBar animated={true} />

        <View style={{flex: 1}}>
            
          <Header  showTags={false} />

            <Button text='Log Out' onPress={onLogout}/>
          </View>
    </SafeAreaView>
  )
}

export default Settings