import { View, SafeAreaView, StatusBar, StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Article from '../components/Article'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { add, remove } from '../store/features/articlesSlice'

type Props = {}

const Home = (props: Props) => {

    const articles = useAppSelector( state => state.articles.articles );
    const dispatch = useAppDispatch();

    return (
        
        <SafeAreaView style={{flex:1}}>

            <StatusBar animated={true} />

            <View style={{flex: 1}}>
                
                <View style={{zIndex: 0}}>

                    <View style={{
                        flexDirection: 'row',
                        paddingTop: SIZES.small
                    }}>
                        <TouchableOpacity onPress={() => dispatch(add())} style={{ 
                            backgroundColor: COLORS.white,
                            padding: SIZES.base
                        }}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch( remove('1') )} style={{ 
                            backgroundColor: COLORS.white,
                            padding: SIZES.base,
                            marginLeft: 5
                        }}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <FlatList 
                        style={styles.container}
                        data={articles}
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