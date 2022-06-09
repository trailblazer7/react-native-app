import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import Logo from './Logo'
import { useNavigation } from '@react-navigation/native'
import Tag from './Tag'
import { useAppSelector } from '../store/hooks'
import { UserType } from '../store/common/loginUser'


type HeaderPropsType = {
    showTags: boolean
}

type LogViewPropsType = {
    user: UserType,
    navigation: any
}

const LoggedOutView = (props: LogViewPropsType) => {

    const {user, navigation} = props

    if (!user) {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={styles.menuItem} onPress={() => navigation.navigate("Home" as never)}>Home</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate("SignIn" as never)}>Sign In</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate("SignUp" as never)}>Sign Up</Text>
            </View>
        )
    }
    return null
}

const LoggedInView = (props: LogViewPropsType) => {

    const {user, navigation} = props

    if (user) {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={styles.menuItem} onPress={() => navigation.navigate("Home" as never)}>Home</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate("Settings" as never)}>Settings</Text>
                <Text style={styles.menuItem}>New Post</Text>
            </View>
        )
    }
    return null
}



const Header = (props: HeaderPropsType) => {

    const navigation = useNavigation();
    const currentRouteName:string = navigation.getState().routes[navigation.getState().index].name;

    const currentUser = useAppSelector(state => state.common.currentUser)

    return (
        <View>
            <View style={{
                ...styles.container,
                backgroundColor: currentRouteName === 'Home' ? 'transparent' : COLORS.primary
            }}>
                
                <Logo />
                
                <LoggedInView user={currentUser} navigation={navigation} />
                <LoggedOutView user={currentUser} navigation={navigation} />
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
                    {['welcome', 'implementations', 'introduction', 'codebaseShow'].map((tag, index) => <Tag title={tag} key={index} />)}
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