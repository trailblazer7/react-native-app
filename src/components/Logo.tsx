import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

type Props = {}

const Logo = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>💁👌🎍😍</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.large
    }
})