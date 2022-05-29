import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

type Props = {
    text: string,
    onPress: () => void
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.base,
    backgroundColor: COLORS.orange,
    padding: SIZES.medium
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    textAlign: 'center'
  }
})