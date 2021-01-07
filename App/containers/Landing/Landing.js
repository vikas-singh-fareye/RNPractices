
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Header } from '@components'
import { colors } from '@styles'

const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Page title='Correct' style={{ backgroundColor: colors.green }} onPress={() => navigation.navigate('Correct')} />
            <Page title='Incorrect' style={{ backgroundColor: colors.red }} onPress={() => navigation.navigate('Incorrect')} />
        </View>
    )
}

const Page = ({ title='', style, onPress }) => {
    return(
        <TouchableOpacity style={[styles.pageContainer, style]} activeOpacity={0.75} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Landing
