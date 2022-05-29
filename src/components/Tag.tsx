import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

type Props = {
    title: string
}

const Tag = (props: Props) => {
  return (
    <TouchableOpacity style={styles.continer}>
        <Text style={{color: COLORS.white}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Tag

const styles = StyleSheet.create({
    continer: {
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.xs,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.medium,
        marginRight: SIZES.base,
        marginBottom: SIZES.base,

        ...SHADOWS.light
    }
})