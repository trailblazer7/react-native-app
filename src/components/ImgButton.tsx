import { StyleSheet, Text, TouchableOpacity, Image, ImageProps } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, IMAGES } from '../constants'

type Props = {
    handlePress: () => void,
    count: number
}

const ImgButton = (props: Props) => {
  return (
    <TouchableOpacity 
        style={{
            width: 80,
            height: 40,
            top: 10,
            right: 10,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: SIZES.font,
            paddingLeft: SIZES.base,

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
        <Text style={{color: COLORS.gray}}>{props.count}</Text>
    </TouchableOpacity>
  )
}

export default ImgButton

const styles = StyleSheet.create({})