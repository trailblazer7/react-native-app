import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SHADOWS, SIZES } from '../constants'
import ImgButton from './ImgButton'
import Tag from './Tag'
import { ArticleInterface } from '../store/articles/articlesSlice'

type Props = {
    data: ArticleInterface
}

const Article = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={{
          height: 150
        }}>
          <Image 
            resizeMode='cover'
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: SIZES.font,
              borderTopLeftRadius: SIZES.font
            }}
            source={IMAGES.nft05}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 10,
          left: 10
        }}>
          <Text style={{
            fontWeight: 'bold'
          }}>{props.data.author.username}</Text>
          <Text style={{
            color: COLORS.white
          }}>{props.data.createdAt}</Text>
        </View>
        
        <ImgButton handlePress={() => {}} count={props.data.favoritesCount}/>

        <TouchableOpacity style={{
          padding: 10
        }}>
          <Text style={{
            fontWeight: 'bold'
          }}>{props.data.title}</Text>
          <Text>{props.data.description}</Text>
      </TouchableOpacity>

      <View style={{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={{
            padding: 10
          }}>
            <Text>Read more...</Text>
        </TouchableOpacity>

        <Tag title='introduction'/>
      </View>


    </View>
  )
}

export default Article


const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      paddingBottom: SIZES.xs,

      ...SHADOWS.dark
    }
})