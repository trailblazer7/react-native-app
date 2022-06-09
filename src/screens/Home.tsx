import { View, SafeAreaView, StatusBar, StyleSheet, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Article from '../components/Article'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchArticles } from '../store/articles/fetchArticles'
import { appLoad } from '../store/common/commonSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = () => {

    const { articles } = useAppSelector( state => state );
    const dispatch = useAppDispatch();

    // On Mount
    useEffect(() => {

        // Check user token
        (async () => {
            try {
                const _token = await AsyncStorage.getItem('jwt')
                dispatch(appLoad({
                    token: _token ? _token : null
                }))
            } catch (error) {
                
            }
        })()
        
        dispatch(fetchArticles())
    }, [])


    return (
        
        <SafeAreaView style={{flex:1}}>

            <StatusBar animated={true} />

            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    { 
                        articles.loading 
                        ? <Text style={styles.loading}>Loading...</Text>
                        : <FlatList 
                            data={articles.list}
                            renderItem={({ item }) => <Article data={item} key={item.slug}/>}
                            keyExtractor={item => item.slug}
                            ListHeaderComponent={<Header  showTags={true} />}
                        />
                    }
                </View>
                
                <View style={styles.fixedContainer}>
                    <View style={styles.topCover} />
                    <View style={styles.bottomCover} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    loading: {
        padding: SIZES.extraLarge,
        textAlign: 'center',
        color: COLORS.white,
        fontSize: SIZES.extraLarge
    },
    
    fixedContainer: {
        position: 'absolute',
        top:0,
        left: 0,
        bottom:0,
        right: 0,
        zIndex: -1
    },
    topCover: {
        height: 300,
        backgroundColor: COLORS.primary
    },
    bottomCover: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})