import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Logo from './Logo'
import { useNavigation } from '@react-navigation/native'
import Tag from './Tag'


type Props = {
    showTags: boolean
}

const Header = (props: Props) => {


    const navigation = useNavigation();

    const currentRouteName:string = navigation.getState().routes[navigation.getState().index].name;

    return (
        <View>
            <View style={{
                ...styles.container,
                backgroundColor: currentRouteName === 'Home' ? 'transparent' : COLORS.primary
            }}>
                
                <Logo />
                
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={styles.menuItem} onPress={() => navigation.navigate("Home" as never)}>Home</Text>
                    <Text style={styles.menuItem} onPress={() => navigation.navigate("SignIn" as never)}>Sign In</Text>
                    <Text style={styles.menuItem} onPress={() => navigation.navigate("SignUp" as never)}>Sign Up</Text>
                </View>
            </View>
            { props.showTags && <View style={{
                padding: SIZES.base
            }}>

                <Text style={{
                    color: COLORS.white,
                    textDecorationLine: 'underline',
                    marginBottom: SIZES.base
                }}>Popular Tags</Text>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {['welcome', 'implementations', 'introduction', 'codebaseShow'].map(tag => <Tag title={tag} />)}
                </View>

            </View>}
        </View>
        
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.small
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.font
    },
    menuItem: {
        color: COLORS.white,
        fontSize: SIZES.font,
        paddingHorizontal: SIZES.xs
    }
})