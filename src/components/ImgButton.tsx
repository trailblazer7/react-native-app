import { StyleSheet, Text, TouchableOpacity, Image, ImageProps } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, IMAGES } from '../constants'

type Props = {
    handlePress: () => void
}

const ImgButton = (props: Props) => {
  return (
    <TouchableOpacity 
        style={{
            width: 40,
            height: 40,
            top: 10,
            right: 10,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',

            ...SHADOWS.light
        }}
        onPress={props.handlePress}
    >
        <Image 
            source={IMAGES.heart}
            resizeMode='contain'
            style={{
                width: 24,
                height: 24
            }}
        />
    </TouchableOpacity>
  )
}

export default ImgButton

const styles = StyleSheet.create({})