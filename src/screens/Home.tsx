import { View, SafeAreaView, StatusBar, StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Article from '../components/Article'

type Props = {}

const Home = (props: Props) => {


    const dummy = [
        {id: '1', title: 'First Article', description: 'first description'},
        {id: '2', title: 'Second Article', description: 'second description'},
        {id: '3', title: 'Theard Article', description: 'theard description'}
    ]

    return (
        
        <SafeAreaView style={{flex:1}}>

            <StatusBar animated={true} />

            <View style={{flex: 1}}>
                
                <View style={{zIndex: 0}}>

                    
                    <FlatList 
                        style={styles.container}
                        data={dummy}
                        renderItem={({ item }) => <Article data={item} />}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={<Header  showTags={true} />}
                    />
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
    container: {},
    
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