import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

type Props = {
    title: string,
    subTitle: string,
    onSubTitlePress: () => void
}

const SubHeader = (props: Props) => {
  return (
    <View>
        <Text style={styles.h1}>{props.title}</Text>
        <Text style={styles.link} onPress={props.onSubTitlePress}>{props.subTitle}</Text>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
    h1: {
        textAlign: 'center', 
        paddingTop: SIZES.large, 
        fontSize: SIZES.extraLarge
      },
    link: {
        textAlign: 'center', 
        marginBottom: SIZES.large
    }
})